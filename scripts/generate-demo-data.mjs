import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const demoRoot = path.resolve(__dirname, "..");
const outputFile = path.join(demoRoot, "data", "sample-data.js");

const MODEL_COLORS = [
  "#36c3a0",
  "#4d8cff",
  "#f59e0b",
  "#d946ef",
  "#ef4444",
  "#14b8a6",
  "#a855f7",
  "#f97316"
];

const DETECTION_CLASS_COLORS = [
  "#ffe66d",
  "#5eead4",
  "#fca5a5",
  "#93c5fd",
  "#c4b5fd",
  "#f9a8d4",
  "#86efac",
  "#fdba74"
];

const SEGMENTATION_CLASS_COLORS = {
  FloodNetPlus: {
    0: "#000000",
    1: "#4f87bd",
    2: "#e11d48",
    3: "#1b1699",
    4: "#7e1020",
    5: "#1e22e8",
    6: "#6b8f1a",
    7: "#0f4f79",
    8: "#ff1010",
    9: "#18f40d"
  },
  RescueNet: {
    0: "#5a5a5a",
    1: "#18a2e6",
    2: "#73ebe5",
    3: "#fff65b",
    4: "#ffa05b",
    5: "#ef0000",
    6: "#ed00d7",
    7: "#b17cbc",
    8: "#49ff00",
    9: "#1b18ec",
    10: "#d7a200"
  }
};

const DATASET_ORDER = ["FloodNetPlus", "RescueNet", "LADD"];

const IGNORED_DIRS = new Set([
  ".git",
  "assets",
  "data",
  "scripts",
  "node_modules",
  "viewer",
  "thumbnails",
  "visualisations"
]);

const TASK_META = {
  "semantic-segmentation": {
    name: "Semantic Segmentation",
    priority: 0
  },
  "object-detection": {
    name: "Object Detection",
    priority: 1
  }
};

function isDirectory(targetPath) {
  return fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory();
}

function listDirectories(targetPath) {
  if (!isDirectory(targetPath)) return [];
  return fs.readdirSync(targetPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function listJsonIds(targetPath) {
  if (!isDirectory(targetPath)) return new Set();
  return new Set(
    fs.readdirSync(targetPath)
      .filter((name) => name.endsWith(".json"))
      .map((name) => path.basename(name, ".json"))
  );
}

function toPosix(targetPath) {
  return targetPath.split(path.sep).join("/");
}

function existsFile(targetPath) {
  return fs.existsSync(targetPath) && fs.statSync(targetPath).isFile();
}

function readJson(targetPath) {
  return JSON.parse(fs.readFileSync(targetPath, "utf8"));
}

function humanizeModelName(raw) {
  const compact = raw.replaceAll("_", "");
  if (/^rtdetrv?\d*l$/i.test(compact)) {
    const version = compact.match(/^rtdetr(v?\d*)l$/i)?.[1] || "";
    if (version) {
      const formattedVersion = version.startsWith("v") ? version.toLowerCase() : `v${version}`;
      return `RT-DETR${formattedVersion}-L`;
    }
    return "RT-DETR-L";
  }

  if (/^yolo\d+[a-z]?$/i.test(compact)) return compact.toUpperCase();
  if (/^pspnet/i.test(compact)) return "PSPNet";
  if (/^ccnet/i.test(compact)) return "CCNet";
  if (/^segformer/i.test(compact)) return "SegFormer";
  if (/^deeplabv3plus/i.test(compact)) return "DeepLabV3+";

  return raw
    .split(/[_-]+/)
    .map((part) => {
      if (!part) return part;
      if (/\d/.test(part)) return part.toUpperCase();
      return `${part[0].toUpperCase()}${part.slice(1)}`;
    })
    .join(" ");
}

function safeNumericSort(a, b) {
  return Number(a) - Number(b);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round(value, digits = 3) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function preferredDatasetOrder(name) {
  const explicitIndex = DATASET_ORDER.indexOf(name);
  return explicitIndex === -1 ? DATASET_ORDER.length : explicitIndex;
}

function assignDetectionClassColors(names) {
  return [...names].sort().map((name, index) => ({
    id: slugify(name),
    name,
    color: DETECTION_CLASS_COLORS[index % DETECTION_CLASS_COLORS.length]
  }));
}

function segmentationColorFor(datasetName, labelIndex) {
  return SEGMENTATION_CLASS_COLORS[datasetName]?.[labelIndex] || "#ffffff";
}

function segmentationLegendFromSegments(datasetName, segments) {
  return segments.map((segment) => ({
    id: slugify(segment.className),
    name: segment.className,
    labelIndex: segment.labelIndex,
    color: segmentationColorFor(datasetName, segment.labelIndex)
  }));
}

function sceneTaskTypeFromJson(json) {
  if (Array.isArray(json.segments)) return "semantic-segmentation";
  return "object-detection";
}

function modelDirLooksValid(datasetRoot, childName) {
  if (IGNORED_DIRS.has(childName)) return false;
  const childDir = path.join(datasetRoot, childName);
  return isDirectory(path.join(childDir, "samples_gt_with_json"))
    && isDirectory(path.join(childDir, "visualised_samples_with_json"))
    && isDirectory(path.join(childDir, "ground_truth_images"));
}

function collectDatasetDirs() {
  return listDirectories(demoRoot)
    .filter((name) => !IGNORED_DIRS.has(name))
    .filter((name) => listDirectories(path.join(demoRoot, name)).some((child) => modelDirLooksValid(path.join(demoRoot, name), child)))
    .sort((a, b) => preferredDatasetOrder(a) - preferredDatasetOrder(b) || a.localeCompare(b));
}

function ensureModel(modelMap, modelId, taskType) {
  if (!modelMap.has(modelId)) {
    modelMap.set(modelId, {
      id: modelId,
      name: humanizeModelName(modelId),
      shortName: humanizeModelName(modelId),
      color: MODEL_COLORS[modelMap.size % MODEL_COLORS.length],
      datasets: new Set(),
      taskTypes: new Set(),
      sceneCount: 0
    });
  }
  const model = modelMap.get(modelId);
  model.taskTypes.add(taskType);
  return model;
}

function buildDetectionScene({ datasetName, sceneId, sceneRoots, modelDirs, modelMap, detectionClassSet }) {
  const sourceRoot = sceneRoots[0];
  const gtPath = path.join(sourceRoot, "samples_gt_with_json", `${sceneId}.json`);
  const groundTruth = readJson(gtPath);
  const width = groundTruth.width;
  const height = groundTruth.height;
  const gtBoxes = (groundTruth.annotations || []).map((annotation) => {
    detectionClassSet.add(annotation.class_name);
    return {
      className: annotation.class_name,
      bbox: annotation.bbox.map((value) => round(Number(value), 2))
    };
  });

  const rawImagePath = existsFile(path.join(sourceRoot, "ground_truth_images", groundTruth.file_name))
    ? toPosix(path.relative(demoRoot, path.join(sourceRoot, "ground_truth_images", groundTruth.file_name)))
    : "";

  const generatedViewer = path.join(demoRoot, "viewer", datasetName, groundTruth.file_name);
  const generatedThumb = path.join(demoRoot, "thumbnails", datasetName, groundTruth.file_name);
  const fallbackGtImage = path.join(sourceRoot, "samples_gt_with_json", groundTruth.file_name);

  const predictions = {};
  const predictionImages = {};
  const sceneModelStats = {};

  for (const modelId of modelDirs) {
    const modelRoot = path.join(demoRoot, datasetName, modelId);
    const predictionPath = path.join(modelRoot, "visualised_samples_with_json", `${sceneId}.json`);
    if (!existsFile(predictionPath)) continue;

    const prediction = readJson(predictionPath);
    const detections = (prediction.detections || []).map((detection) => {
      detectionClassSet.add(detection.class_name);
      const confidence = detection.confidence == null ? null : round(Number(detection.confidence), 4);
      return {
        className: detection.class_name,
        confidence,
        bbox: detection.bbox.map((value) => round(Number(value), 2))
      };
    });

    predictions[modelId] = detections;
    const predictionImage = path.join(modelRoot, "visualised_samples_with_json", prediction.file_name || groundTruth.file_name);
    if (existsFile(predictionImage)) predictionImages[modelId] = toPosix(path.relative(demoRoot, predictionImage));

    const confidences = detections
      .map((detection) => detection.confidence)
      .filter((confidence) => typeof confidence === "number");

    sceneModelStats[modelId] = {
      count: detections.length,
      maxConfidence: confidences.length ? round(Math.max(...confidences), 3) : null,
      avgConfidence: confidences.length ? round(confidences.reduce((sum, value) => sum + value, 0) / confidences.length, 3) : null
    };

    const model = modelMap.get(modelId);
    model.sceneCount += 1;
    model.datasets.add(datasetName);
  }

  return {
    id: `${slugify(datasetName)}-${sceneId}`,
    dataset: datasetName,
    taskType: "object-detection",
    imageId: sceneId,
    title: `Image ${sceneId}`,
    location: `${datasetName} benchmark sample`,
    baseImage: existsFile(generatedViewer)
      ? toPosix(path.relative(demoRoot, generatedViewer))
      : rawImagePath || toPosix(path.relative(demoRoot, fallbackGtImage)),
    sourceImage: rawImagePath || toPosix(path.relative(demoRoot, fallbackGtImage)),
    thumbnailImage: existsFile(generatedThumb)
      ? toPosix(path.relative(demoRoot, generatedThumb))
      : toPosix(path.relative(demoRoot, fallbackGtImage)),
    rawImageAvailable: Boolean(rawImagePath),
    width,
    height,
    dimensions: `${width} x ${height}`,
    groundTruth: gtBoxes,
    predictions,
    predictionImages,
    sceneModelStats,
    classNames: [...new Set(gtBoxes.map((box) => box.className))],
    classLegend: [],
    summary: `${gtBoxes.length} ground-truth box${gtBoxes.length === 1 ? "" : "es"} with ${Object.keys(predictions).length} model output${Object.keys(predictions).length === 1 ? "" : "s"} loaded.`
  };
}

function buildSegmentationScene({ datasetName, sceneId, sceneRoots, modelDirs, modelMap }) {
  const sourceRoot = sceneRoots[0];
  const gtPath = path.join(sourceRoot, "samples_gt_with_json", `${sceneId}.json`);
  const groundTruth = readJson(gtPath);
  const width = groundTruth.width;
  const height = groundTruth.height;
  const gtSegments = (groundTruth.segments || []).map((segment) => ({
    labelIndex: Number(segment.label_index),
    className: segment.class_name,
    pixelCount: Number(segment.pixel_count)
  })).sort((a, b) => a.labelIndex - b.labelIndex);

  const rawImagePath = existsFile(path.join(sourceRoot, "ground_truth_images", groundTruth.file_name))
    ? toPosix(path.relative(demoRoot, path.join(sourceRoot, "ground_truth_images", groundTruth.file_name)))
    : "";

  const generatedViewer = path.join(demoRoot, "viewer", datasetName, groundTruth.file_name);
  const generatedThumb = path.join(demoRoot, "thumbnails", datasetName, groundTruth.file_name);
  const gtImagePath = path.join(sourceRoot, "samples_gt_with_json", groundTruth.file_name);
  const predictions = {};
  const predictionImages = {};
  const sceneModelStats = {};

  for (const modelId of modelDirs) {
    const modelRoot = path.join(demoRoot, datasetName, modelId);
    const predictionPath = path.join(modelRoot, "visualised_samples_with_json", `${sceneId}.json`);
    if (!existsFile(predictionPath)) continue;

    const prediction = readJson(predictionPath);
    const segments = (prediction.segments || []).map((segment) => ({
      labelIndex: Number(segment.label_index),
      className: segment.class_name,
      pixelCount: Number(segment.pixel_count)
    })).sort((a, b) => a.labelIndex - b.labelIndex);

    predictions[modelId] = segments;
    const predictionImage = path.join(modelRoot, "visualised_samples_with_json", prediction.file_name || groundTruth.file_name);
    if (existsFile(predictionImage)) predictionImages[modelId] = toPosix(path.relative(demoRoot, predictionImage));

    const labeledPixels = segments.reduce((sum, segment) => sum + segment.pixelCount, 0);
    sceneModelStats[modelId] = {
      classCount: segments.length,
      labeledPixels,
      coverage: round(labeledPixels / (width * height), 3)
    };

    const model = modelMap.get(modelId);
    model.sceneCount += 1;
    model.datasets.add(datasetName);
  }

  const gtPixels = gtSegments.reduce((sum, segment) => sum + segment.pixelCount, 0);

  return {
    id: `${slugify(datasetName)}-${sceneId}`,
    dataset: datasetName,
    taskType: "semantic-segmentation",
    imageId: sceneId,
    title: `Scene ${sceneId}`,
    location: `${datasetName} benchmark sample`,
    baseImage: existsFile(generatedViewer)
      ? toPosix(path.relative(demoRoot, generatedViewer))
      : rawImagePath,
    sourceImage: rawImagePath,
    thumbnailImage: existsFile(generatedThumb)
      ? toPosix(path.relative(demoRoot, generatedThumb))
      : rawImagePath || toPosix(path.relative(demoRoot, gtImagePath)),
    rawImageAvailable: Boolean(rawImagePath),
    width,
    height,
    dimensions: `${width} x ${height}`,
    groundTruth: gtSegments,
    groundTruthImage: toPosix(path.relative(demoRoot, gtImagePath)),
    predictions,
    predictionImages,
    sceneModelStats,
    classNames: gtSegments.map((segment) => segment.className),
    classLegend: segmentationLegendFromSegments(datasetName, gtSegments),
    summary: `${gtSegments.length} classes with ${Object.keys(predictions).length} model segmentations loaded.`,
    groundTruthStats: {
      classCount: gtSegments.length,
      labeledPixels: gtPixels,
      coverage: round(gtPixels / (width * height), 3)
    }
  };
}

function buildDatasets() {
  const datasetDirs = collectDatasetDirs();
  const modelMap = new Map();
  const detectionClassSet = new Set();
  const scenes = [];
  const datasets = [];

  for (const datasetName of datasetDirs) {
    const datasetRoot = path.join(demoRoot, datasetName);
    const modelDirs = listDirectories(datasetRoot)
      .filter((name) => modelDirLooksValid(datasetRoot, name))
      .sort();

    if (!modelDirs.length) continue;

    const firstJsonPath = path.join(datasetRoot, modelDirs[0], "samples_gt_with_json", `${[...listJsonIds(path.join(datasetRoot, modelDirs[0], "samples_gt_with_json"))][0]}.json`);
    const firstJson = readJson(firstJsonPath);
    const taskType = sceneTaskTypeFromJson(firstJson);

    modelDirs.forEach((modelId) => {
      const model = ensureModel(modelMap, modelId, taskType);
      model.datasets.add(datasetName);
    });

    const sceneIdSet = new Set();
    for (const modelId of modelDirs) {
      for (const sceneId of listJsonIds(path.join(datasetRoot, modelId, "samples_gt_with_json"))) {
        sceneIdSet.add(sceneId);
      }
    }
    const sceneIds = [...sceneIdSet].sort(safeNumericSort);

    for (const sceneId of sceneIds) {
      const sceneRoots = modelDirs
        .map((modelId) => path.join(datasetRoot, modelId))
        .filter((root) => existsFile(path.join(root, "samples_gt_with_json", `${sceneId}.json`)));

      if (!sceneRoots.length) continue;

      const scene = taskType === "semantic-segmentation"
        ? buildSegmentationScene({ datasetName, sceneId, sceneRoots, modelDirs, modelMap })
        : buildDetectionScene({ datasetName, sceneId, sceneRoots, modelDirs, modelMap, detectionClassSet });

      scenes.push(scene);
    }

    datasets.push({
      id: datasetName,
      name: datasetName,
      taskType,
      sceneCount: sceneIds.length,
      modelIds: modelDirs
    });
  }

  const detectionClasses = assignDetectionClassColors(detectionClassSet);
  const segmentationClasses = [...new Map(
    scenes
      .filter((scene) => scene.taskType === "semantic-segmentation")
      .flatMap((scene) => scene.classLegend)
      .map((item) => [item.id, item])
  ).values()].sort((a, b) => (a.labelIndex ?? 0) - (b.labelIndex ?? 0));

  const models = [...modelMap.values()].map((model) => ({
    id: model.id,
    name: model.name,
    shortName: model.shortName,
    color: model.color,
    datasets: [...model.datasets].sort(),
    taskTypes: [...model.taskTypes].sort(),
    stats: {
      scenes: model.sceneCount
    }
  })).sort((a, b) => a.name.localeCompare(b.name));

  scenes.sort((a, b) => {
    if (a.taskType !== b.taskType) {
      return TASK_META[a.taskType].priority - TASK_META[b.taskType].priority;
    }
    if (a.dataset !== b.dataset) {
      return preferredDatasetOrder(a.dataset) - preferredDatasetOrder(b.dataset)
        || a.dataset.localeCompare(b.dataset);
    }
    return safeNumericSort(a.imageId, b.imageId);
  });

  datasets.sort((a, b) => {
    if (a.taskType !== b.taskType) {
      return TASK_META[a.taskType].priority - TASK_META[b.taskType].priority;
    }
    return preferredDatasetOrder(a.name) - preferredDatasetOrder(b.name)
      || a.name.localeCompare(b.name);
  });

  return {
    title: "Aerial Benchmark Atlas",
    subtitle: "Segmentation and detection benchmark viewer",
    taskTypes: [
      { id: "semantic-segmentation", name: TASK_META["semantic-segmentation"].name },
      { id: "object-detection", name: TASK_META["object-detection"].name }
    ],
    datasets,
    classes: {
      "object-detection": detectionClasses,
      "semantic-segmentation": segmentationClasses
    },
    models,
    scenes
  };
}

const output = `window.DETECTION_ATLAS_DATA = ${JSON.stringify(buildDatasets(), null, 2)};\n`;
fs.writeFileSync(outputFile, output);
console.log(`Wrote ${outputFile}`);
