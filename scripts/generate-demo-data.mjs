import fs from "node:fs";
import { execFileSync } from "node:child_process";
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

const MODEL_COLOR_OVERRIDES = {
  yolo11l: "#84CC16"
};

const DETECTION_CLASS_COLORS = {
  Pedestrian: "#FF69B4",
  smoke: "#7C3AED",
  fire: "#FF5A36"
};

const FALLBACK_DETECTION_CLASS_COLORS = [
  "#FF69B4",
  "#FFD60A",
  "#00FFE6",
  "#FF1744",
  "#8A00FF",
  "#39FF14",
  "#0047FF",
  "#FFB300"
];

const SEGMENTATION_CLASS_COLORS = {
  Background: "#000000",
  Water: "#0047FF",
  "Building-flooded": "#00FFD1",
  "Building-non-flooded": "#FF1744",
  "Road-flooded": "#8A00FF",
  "Road-non-flooded": "#FFB300",
  Grass: "#39FF14",
  Tree: "#006400",
  Vehicle: "#FF00D4",
  Pool: "#4B0082",
  Building_No_Damage: "#00E676",
  Building_Minor_Damage: "#FFD600",
  Building_Major_Damage: "#FF6D00",
  Building_Total_Destruction: "#FF0000",
  "Road-Clear": "#C77DFF",
  "Road-Blocked": "#B6FF00"
};

const FALLBACK_SEGMENTATION_CLASS_COLORS = [
  "#00FFD1",
  "#FF1744",
  "#8A00FF",
  "#FFB300",
  "#39FF14",
  "#0047FF",
  "#FF00D4",
  "#4B0082",
  "#FFD600",
  "#FF6D00",
  "#00E676",
  "#B6FF00"
];

const DATASET_ORDER = ["FloodNetPlus", "RescueNet", "LADD", "DFire"];
const DATASET_SCENE_LIMITS = {
  FloodNetPlus: 50,
  RescueNet: 50
};

const IGNORED_DIRS = new Set([
  ".git",
  "assets",
  "data",
  "Datasets",
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
  if (/^deimv2$/i.test(compact)) return "DEIMv2";
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
  const aNumber = Number(a);
  const bNumber = Number(b);
  const aIsNumeric = Number.isFinite(aNumber);
  const bIsNumeric = Number.isFinite(bNumber);
  if (aIsNumeric && bIsNumeric) return aNumber - bNumber;
  if (aIsNumeric) return -1;
  if (bIsNumeric) return 1;
  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: "base" });
}

function sortSceneCandidates(candidates) {
  return [...candidates].sort((a, b) => {
    const bActiveModels = b.activeModelCount ?? b.modelCount ?? 0;
    const aActiveModels = a.activeModelCount ?? a.modelCount ?? 0;
    if (bActiveModels !== aActiveModels) {
      return bActiveModels - aActiveModels;
    }
    if ((b.classDiversity || 0) !== (a.classDiversity || 0)) {
      return (b.classDiversity || 0) - (a.classDiversity || 0);
    }
    if ((b.qualityScore || 0) !== (a.qualityScore || 0)) {
      return (b.qualityScore || 0) - (a.qualityScore || 0);
    }
    return safeNumericSort(a.sceneId, b.sceneId);
  });
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
    color: DETECTION_CLASS_COLORS[name] || FALLBACK_DETECTION_CLASS_COLORS[index % FALLBACK_DETECTION_CLASS_COLORS.length]
  }));
}

function segmentationColorFor(className) {
  if (SEGMENTATION_CLASS_COLORS[className]) return SEGMENTATION_CLASS_COLORS[className];

  const normalized = String(className || "").trim().toLowerCase();
  let hash = 0;
  for (const char of normalized) {
    hash = ((hash * 31) + char.charCodeAt(0)) >>> 0;
  }

  return FALLBACK_SEGMENTATION_CLASS_COLORS[hash % FALLBACK_SEGMENTATION_CLASS_COLORS.length] || "#ffffff";
}

function segmentationLegendFromSegments(segments) {
  return segments.map((segment) => ({
    id: slugify(segment.className),
    name: segment.className,
    labelIndex: segment.labelIndex,
    color: segmentationColorFor(segment.className)
  }));
}

function mergeSegmentationLegendEntries(datasetName, segmentsBySource) {
  const merged = new Map();
  segmentsBySource.flat().forEach((segment) => {
    if (!segment?.className) return;
    const normalizedName = String(segment.className).trim();
    const key = normalizedName.toLowerCase();
    const existing = merged.get(key);

    if (!existing) {
      merged.set(key, {
        id: slugify(normalizedName),
        name: normalizedName,
        labelIndex: segment.labelIndex,
        color: segmentationColorFor(normalizedName)
      });
      return;
    }

    if (Number.isFinite(segment.labelIndex) && (!Number.isFinite(existing.labelIndex) || segment.labelIndex < existing.labelIndex)) {
      existing.labelIndex = segment.labelIndex;
    }
  });
  return [...merged.values()].sort((a, b) => (a.labelIndex ?? 0) - (b.labelIndex ?? 0) || a.name.localeCompare(b.name));
}

function sceneTaskTypeFromJson(json) {
  if (Array.isArray(json.segments)) return "semantic-segmentation";
  return "object-detection";
}

function average(values) {
  const numericValues = values.filter((value) => Number.isFinite(value));
  return numericValues.length
    ? numericValues.reduce((sum, value) => sum + value, 0) / numericValues.length
    : 0;
}

function predictionAnnotationScore(json) {
  if (Array.isArray(json.detections)) {
    const activeDetections = json.detections.filter((detection) => Array.isArray(detection.bbox));
    return {
      active: activeDetections.length > 0,
      quality: average(activeDetections.map((detection) => Number(detection.confidence))),
      classKeys: activeDetections.map((detection) => detection.class_name).filter(Boolean)
    };
  }

  if (Array.isArray(json.segments)) {
    const activeSegments = json.segments.filter((segment) => Number(segment.pixel_count) > 0);
    const classKeys = activeSegments
      .map((segment) => `${segment.label_index}:${segment.class_name}`)
      .filter(Boolean);
    const confidenceValues = activeSegments
      .flatMap((segment) => [segment.confidence, segment.score, segment.probability])
      .map((value) => Number(value));
    const confidenceQuality = average(confidenceValues);

    if (confidenceQuality > 0) {
      return {
        active: activeSegments.length > 0,
        quality: confidenceQuality,
        classKeys
      };
    }

    const labeledPixels = activeSegments.reduce((sum, segment) => sum + Number(segment.pixel_count), 0);
    const totalPixels = Number(json.width) * Number(json.height);
    return {
      active: activeSegments.length > 0,
      quality: Number.isFinite(totalPixels) && totalPixels > 0 ? labeledPixels / totalPixels : labeledPixels,
      classKeys
    };
  }

  return {
    active: false,
    quality: 0,
    classKeys: []
  };
}

function modelDirLooksValid(datasetRoot, childName) {
  if (IGNORED_DIRS.has(childName)) return false;
  const childDir = path.join(datasetRoot, childName);
  return isDirectory(path.join(childDir, "samples_gt_with_json"))
    && isDirectory(path.join(childDir, "visualised_samples_with_json"))
    && isDirectory(path.join(childDir, "ground_truth_images"));
}

function datasetLooksLikeDFire(datasetRoot) {
  return existsFile(path.join(datasetRoot, "GROUND-TRUTH", "gt.json"));
}

function dfireModelDirLooksValid(datasetRoot, childName) {
  if (IGNORED_DIRS.has(childName) || childName === "GROUND-TRUTH") return false;
  const childDir = path.join(datasetRoot, childName);
  return existsFile(path.join(childDir, "predictions.json"))
    || existsFile(path.join(childDir, "inference_results.json"));
}

function collectDatasetDirs() {
  return listDirectories(demoRoot)
    .filter((name) => !IGNORED_DIRS.has(name))
    .filter((name) => {
      const datasetRoot = path.join(demoRoot, name);
      if (datasetLooksLikeDFire(datasetRoot)) return true;
      return listDirectories(datasetRoot).some((child) => modelDirLooksValid(datasetRoot, child));
    })
    .sort((a, b) => preferredDatasetOrder(a) - preferredDatasetOrder(b) || a.localeCompare(b));
}

function imageDimensions(imagePath) {
  const output = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", imagePath], { encoding: "utf8" });
  const width = Number(output.match(/pixelWidth:\s*(\d+)/)?.[1]);
  const height = Number(output.match(/pixelHeight:\s*(\d+)/)?.[1]);
  if (!Number.isFinite(width) || !Number.isFinite(height)) {
    throw new Error(`Could not read dimensions for ${imagePath}`);
  }
  return { width, height };
}

function ensureModel(modelMap, modelId, taskType) {
  if (!modelMap.has(modelId)) {
    modelMap.set(modelId, {
      id: modelId,
      name: humanizeModelName(modelId),
      shortName: humanizeModelName(modelId),
      color: MODEL_COLOR_OVERRIDES[modelId] || MODEL_COLORS[modelMap.size % MODEL_COLORS.length],
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

function dfireLabelName(label, classMap) {
  if (typeof label === "number") return classMap[String(label)] || String(label);
  if (typeof label === "string") return classMap[label] || label;
  return String(label);
}

function normalizeDFireBbox(bbox) {
  const [x1, y1, x2, y2] = (bbox || []).map((value) => Number(value));
  if (![x1, y1, x2, y2].every(Number.isFinite)) return [0, 0, 0, 0];
  return [
    round(x1, 2),
    round(y1, 2),
    round(Math.max(0, x2 - x1), 2),
    round(Math.max(0, y2 - y1), 2)
  ];
}

function buildDFirePredictionIndex(modelRoot, classMap) {
  const standardPredictionPath = path.join(modelRoot, "predictions.json");
  if (existsFile(standardPredictionPath)) {
    const prediction = readJson(standardPredictionPath);
    const predictionEntries = prediction.predictions || {};
    return new Map(
      Object.entries(predictionEntries).map(([fileName, detections]) => [
        fileName,
        (detections || []).map((detection) => ({
          className: dfireLabelName(detection.label, classMap),
          confidence: detection.confidence == null ? null : round(Number(detection.confidence), 4),
          bbox: normalizeDFireBbox(detection.bbox)
        }))
      ])
    );
  }

  const inferencePath = path.join(modelRoot, "inference_results.json");
  if (existsFile(inferencePath)) {
    const inference = readJson(inferencePath);
    const threshold = Number(inference.confidence_threshold ?? 0.5);
    return new Map(
      (inference.results || []).map((result) => {
        const boxes = result.boxes || [];
        const scores = result.scores || [];
        const labels = result.labels || [];
        const detections = [];
        const count = Math.min(boxes.length, scores.length, labels.length);
        for (let index = 0; index < count; index += 1) {
          const confidence = Number(scores[index]);
          if (!Number.isFinite(confidence) || confidence < threshold) continue;
          detections.push({
            className: dfireLabelName(labels[index], classMap),
            confidence: round(confidence, 4),
            bbox: normalizeDFireBbox(boxes[index])
          });
        }
        return [result.file_name, detections];
      })
    );
  }

  return new Map();
}

function collectDFireSceneFiles(groundTruthAnnotations, modelPredictionIndexes) {
  const orderedGtFiles = Object.keys(groundTruthAnnotations || {});
  return orderedGtFiles.filter((fileName) => {
    for (const predictionIndex of modelPredictionIndexes.values()) {
      if (predictionIndex.has(fileName)) return true;
    }
    return false;
  });
}

function hasFireAndSmoke(annotations) {
  const classes = new Set((annotations || []).map((annotation) => annotation.class_name));
  return classes.has("fire") && classes.has("smoke");
}

function hasFireOrSmoke(annotations) {
  const classes = new Set((annotations || []).map((annotation) => annotation.class_name));
  return classes.has("fire") || classes.has("smoke");
}

function filterDFireGroundTruthAnnotations(groundTruthAnnotations) {
  const entries = Object.entries(groundTruthAnnotations || {});
  const both = entries.filter(([, annotations]) => hasFireAndSmoke(annotations));
  const singles = entries.filter(([, annotations]) => hasFireOrSmoke(annotations) && !hasFireAndSmoke(annotations));
  const selected = [...both, ...singles].slice(0, 50);
  return Object.fromEntries(selected);
}

function indexDFireOriginalImages(gtAnnotations, datasetRoot) {
  const originalDir = path.join(datasetRoot, "ORIGINAL_IMAGES");
  if (!isDirectory(originalDir)) return new Map();

  const gtFiles = Object.keys(gtAnnotations || {});
  const originalFiles = new Set(
    fs.readdirSync(originalDir).filter((name) => /\.(jpg|jpeg|png)$/i.test(name))
  );

  return new Map(
    gtFiles
      .filter((fileName) => originalFiles.has(fileName))
      .map((fileName) => [fileName, path.join(originalDir, fileName)])
  );
}

function buildDFireScene({
  datasetName,
  fileName,
  sceneOrder,
  gtAnnotations,
  modelDirs,
  modelMap,
  detectionClassSet,
  modelPredictionIndexes,
  originalImageIndex
}) {
  const fallbackImagePath = path.join(demoRoot, datasetName, "GROUND-TRUTH", fileName);
  const rawImagePath = originalImageIndex.get(fileName) || fallbackImagePath;
  if (!existsFile(rawImagePath)) return null;

  const { width, height } = imageDimensions(rawImagePath);
  const sceneId = path.basename(fileName, path.extname(fileName));
  const gtBoxes = (gtAnnotations || []).map((annotation) => {
    const className = annotation.class_name;
    detectionClassSet.add(className);
    return {
      className,
      bbox: normalizeDFireBbox(annotation.bbox)
    };
  });

  const generatedViewer = path.join(demoRoot, "viewer", datasetName, path.basename(rawImagePath));
  const generatedThumb = path.join(demoRoot, "thumbnails", datasetName, path.basename(rawImagePath));
  const predictions = {};
  const sceneModelStats = {};

  for (const modelId of modelDirs) {
    const predictionIndex = modelPredictionIndexes.get(modelId) || new Map();
    if (!predictionIndex.has(fileName)) continue;

    const detections = predictionIndex.get(fileName) || [];
    detections.forEach((detection) => detectionClassSet.add(detection.className));
    predictions[modelId] = detections;

    const confidences = detections
      .map((detection) => detection.confidence)
      .filter((confidence) => typeof confidence === "number");

    sceneModelStats[modelId] = {
      count: detections.length,
      maxConfidence: confidences.length ? round(Math.max(...confidences), 3) : null,
      avgConfidence: confidences.length ? round(confidences.reduce((sum, value) => sum + value, 0) / confidences.length, 3) : null
    };

    const modelRoot = path.join(demoRoot, datasetName, modelId);
    const modelImagePath = path.join(modelRoot, fileName);
    if (existsFile(modelImagePath)) {
      const model = modelMap.get(modelId);
      model.sceneCount += 1;
      model.datasets.add(datasetName);
    }
  }

  return {
    id: `${slugify(datasetName)}-${slugify(sceneId)}`,
    dataset: datasetName,
    taskType: "object-detection",
    imageId: sceneId,
    sceneOrder,
    title: `Image ${sceneId}`,
    location: `${datasetName} benchmark sample`,
    baseImage: existsFile(generatedViewer)
      ? toPosix(path.relative(demoRoot, generatedViewer))
      : toPosix(path.relative(demoRoot, rawImagePath)),
    sourceImage: toPosix(path.relative(demoRoot, rawImagePath)),
    thumbnailImage: existsFile(generatedThumb)
      ? toPosix(path.relative(demoRoot, generatedThumb))
      : toPosix(path.relative(demoRoot, rawImagePath)),
    rawImageAvailable: true,
    width,
    height,
    dimensions: `${width} x ${height}`,
    groundTruth: gtBoxes,
    predictions,
    predictionImages: {},
    sceneModelStats,
    classNames: [...new Set(gtBoxes.map((box) => box.className))],
    classLegend: [],
    summary: `${gtBoxes.length} ground-truth box${gtBoxes.length === 1 ? "" : "es"} with ${Object.keys(predictions).length} model output${Object.keys(predictions).length === 1 ? "" : "s"} loaded.`
  };
}

function buildSegmentationScene({ datasetName, sceneId, sceneOrder = null, sceneRoots, modelDirs, modelMap }) {
  const datasetRoot = path.dirname(sceneRoots[0]);
  const sharedGtRoot = existsFile(path.join(datasetRoot, "shared_samples_gt_with_json", `${sceneId}.json`))
    ? datasetRoot
    : null;
  const sourceRoot = sharedGtRoot || sceneRoots[0];
  const gtPath = sharedGtRoot
    ? path.join(sourceRoot, "shared_samples_gt_with_json", `${sceneId}.json`)
    : path.join(sourceRoot, "samples_gt_with_json", `${sceneId}.json`);
  const groundTruth = readJson(gtPath);
  const width = groundTruth.width;
  const height = groundTruth.height;
  const gtSegments = (groundTruth.segments || []).map((segment) => ({
    labelIndex: Number(segment.label_index),
    className: segment.class_name,
    pixelCount: Number(segment.pixel_count)
  })).sort((a, b) => a.labelIndex - b.labelIndex);

  const rawImageDir = sharedGtRoot ? "shared_ground_truth_images" : "ground_truth_images";
  const gtImageDir = sharedGtRoot ? "shared_samples_gt_with_json" : "samples_gt_with_json";

  const rawImagePath = existsFile(path.join(sourceRoot, rawImageDir, groundTruth.file_name))
    ? toPosix(path.relative(demoRoot, path.join(sourceRoot, rawImageDir, groundTruth.file_name)))
    : "";

  const generatedViewer = path.join(demoRoot, "viewer", datasetName, groundTruth.file_name);
  const generatedThumb = path.join(demoRoot, "thumbnails", datasetName, groundTruth.file_name);
  const gtImagePath = path.join(sourceRoot, gtImageDir, groundTruth.file_name);
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
  const mergedSceneLegend = mergeSegmentationLegendEntries(datasetName, [
    gtSegments,
    ...Object.values(predictions)
  ]);

  return {
    id: `${slugify(datasetName)}-${sceneId}`,
    dataset: datasetName,
    taskType: "semantic-segmentation",
    imageId: sceneId,
    sceneOrder,
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
    classNames: mergedSceneLegend.map((segment) => segment.name),
    classLegend: mergedSceneLegend,
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
    if (datasetLooksLikeDFire(datasetRoot)) {
      const taskType = "object-detection";
      const modelDirs = listDirectories(datasetRoot)
        .filter((name) => dfireModelDirLooksValid(datasetRoot, name))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

      if (!modelDirs.length) continue;

      const groundTruth = readJson(path.join(datasetRoot, "GROUND-TRUTH", "gt.json"));
      const filteredGroundTruthAnnotations = filterDFireGroundTruthAnnotations(groundTruth.annotations || {});
      const classMap = Object.fromEntries(
        Object.entries(groundTruth.class_map || {}).map(([key, value]) => [String(key), value])
      );
      const modelPredictionIndexes = new Map(
        modelDirs.map((modelId) => [
          modelId,
          buildDFirePredictionIndex(path.join(datasetRoot, modelId), classMap)
        ])
      );
      const originalImageIndex = indexDFireOriginalImages(filteredGroundTruthAnnotations, datasetRoot);

      const sceneFiles = collectDFireSceneFiles(filteredGroundTruthAnnotations, modelPredictionIndexes)
        .filter((fileName) => existsFile(path.join(datasetRoot, "GROUND-TRUTH", fileName)))
        .filter((fileName) => originalImageIndex.has(fileName));

      if (!sceneFiles.length) {
        console.warn(`Skipping ${datasetName}: no overlap between ground truth and model prediction scenes.`);
        continue;
      }

      modelDirs.forEach((modelId) => {
        const model = ensureModel(modelMap, modelId, taskType);
        model.datasets.add(datasetName);
      });

      sceneFiles.forEach((fileName, sceneOrder) => {
        const scene = buildDFireScene({
          datasetName,
          fileName,
          sceneOrder,
          gtAnnotations: filteredGroundTruthAnnotations[fileName],
          modelDirs,
          modelMap,
          detectionClassSet,
          modelPredictionIndexes,
          originalImageIndex
        });
        if (scene) scenes.push(scene);
      });

      datasets.push({
        id: datasetName,
        name: datasetName,
        taskType,
        sceneCount: sceneFiles.length,
        modelIds: modelDirs
      });

      continue;
    }

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
    const sceneCandidates = sortSceneCandidates(
      [...sceneIdSet].map((sceneId) => {
        const sceneRoots = modelDirs
          .map((modelId) => path.join(datasetRoot, modelId))
          .filter((root) => existsFile(path.join(root, "samples_gt_with_json", `${sceneId}.json`)));
        const groundTruthClassKeys = sceneRoots
          .map((root) => path.join(root, "samples_gt_with_json", `${sceneId}.json`))
          .filter((gtPath) => existsFile(gtPath))
          .flatMap((gtPath) => predictionAnnotationScore(readJson(gtPath)).classKeys || []);
        const annotationScores = modelDirs
          .map((modelId) => path.join(datasetRoot, modelId, "visualised_samples_with_json", `${sceneId}.json`))
          .filter((predictionPath) => existsFile(predictionPath))
          .map((predictionPath) => predictionAnnotationScore(readJson(predictionPath)));
        const activeAnnotationScores = annotationScores.filter((score) => score.active);
        const classDiversity = new Set([
          ...groundTruthClassKeys,
          ...activeAnnotationScores.flatMap((score) => score.classKeys || [])
        ]).size;
        return {
          sceneId,
          sceneRoots,
          modelCount: sceneRoots.length,
          activeModelCount: activeAnnotationScores.length,
          classDiversity,
          qualityScore: average(activeAnnotationScores.map((score) => score.quality))
        };
      })
    );
    const sceneLimit = DATASET_SCENE_LIMITS[datasetName] || null;
    const selectedSceneCandidates = sceneLimit
      ? sceneCandidates.slice(0, sceneLimit)
      : sceneCandidates;

    selectedSceneCandidates.forEach(({ sceneId, sceneRoots }, sceneOrder) => {
      if (!sceneRoots.length) return;

      const scene = taskType === "semantic-segmentation"
        ? buildSegmentationScene({ datasetName, sceneId, sceneOrder, sceneRoots, modelDirs, modelMap })
        : buildDetectionScene({ datasetName, sceneId, sceneRoots, modelDirs, modelMap, detectionClassSet });

      scenes.push(scene);
    });

    datasets.push({
      id: datasetName,
      name: datasetName,
      taskType,
      sceneCount: selectedSceneCandidates.length,
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
    if (typeof a.sceneOrder === "number" && typeof b.sceneOrder === "number") {
      return a.sceneOrder - b.sceneOrder;
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
    title: "Visual Perception Engine",
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
