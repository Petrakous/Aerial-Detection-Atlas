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

const CLASS_COLORS = [
  "#ffe66d",
  "#5eead4",
  "#fca5a5",
  "#93c5fd",
  "#c4b5fd",
  "#f9a8d4",
  "#86efac",
  "#fdba74"
];

const IGNORED_DIRS = new Set([
  ".git",
  "assets",
  "data",
  "scripts",
  "node_modules"
]);

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

function buildDatasets() {
  const datasetDirs = listDirectories(demoRoot)
    .filter((name) => !IGNORED_DIRS.has(name))
    .filter((name) => {
      const target = path.join(demoRoot, name);
      return listDirectories(target).some((child) => {
        const childDir = path.join(target, child);
        return isDirectory(path.join(childDir, "samples_gt_with_json")) && isDirectory(path.join(childDir, "visualised_samples_with_json"));
      });
    })
    .sort();

  const modelMap = new Map();
  const classSet = new Set();
  const scenes = [];

  for (const datasetName of datasetDirs) {
    const datasetRoot = path.join(demoRoot, datasetName);
    const modelDirs = listDirectories(datasetRoot)
      .filter((name) => {
        const modelRoot = path.join(datasetRoot, name);
        return isDirectory(path.join(modelRoot, "samples_gt_with_json")) && isDirectory(path.join(modelRoot, "visualised_samples_with_json"));
      })
      .sort();

    if (!modelDirs.length) continue;

    modelDirs.forEach((modelId) => {
      if (!modelMap.has(modelId)) {
        modelMap.set(modelId, {
          id: modelId,
          name: humanizeModelName(modelId),
          shortName: humanizeModelName(modelId),
          color: MODEL_COLORS[modelMap.size % MODEL_COLORS.length],
          sceneCount: 0,
          totalDetections: 0,
          confidenceSum: 0,
          confidenceCount: 0,
          maxConfidence: 0
        });
      }
    });

    const sceneIds = [...listJsonIds(path.join(datasetRoot, modelDirs[0], "samples_gt_with_json"))].sort(safeNumericSort);

    for (const sceneId of sceneIds) {
      const gtPath = path.join(datasetRoot, modelDirs[0], "samples_gt_with_json", `${sceneId}.json`);
      const groundTruth = readJson(gtPath);
      const width = groundTruth.width;
      const height = groundTruth.height;
      const gtBoxes = (groundTruth.annotations || []).map((annotation) => {
        classSet.add(annotation.class_name);
        return {
          className: annotation.class_name,
          bbox: annotation.bbox.map((value) => round(Number(value), 2))
        };
      });

      let rawImagePath = "";
      let viewerImagePath = "";
      let rawImageAvailable = false;
      const generatedViewer = path.join(demoRoot, "viewer", datasetName, groundTruth.file_name);
      const generatedThumb = path.join(demoRoot, "thumbnails", datasetName, groundTruth.file_name);
      let thumbnailImagePath = existsFile(generatedThumb)
        ? toPosix(path.relative(demoRoot, generatedThumb))
        : toPosix(path.relative(demoRoot, path.join(datasetRoot, modelDirs[0], "samples_gt_with_json", groundTruth.file_name)));
      if (existsFile(generatedViewer)) viewerImagePath = toPosix(path.relative(demoRoot, generatedViewer));

      for (const modelId of modelDirs) {
        const candidate = path.join(datasetRoot, modelId, "ground_truth_images", groundTruth.file_name);
        if (existsFile(candidate)) {
          rawImagePath = toPosix(path.relative(demoRoot, candidate));
          rawImageAvailable = true;
          break;
        }
      }

      if (!rawImagePath) {
        const fallback = path.join(datasetRoot, modelDirs[0], "samples_gt_with_json", groundTruth.file_name);
        if (existsFile(fallback)) rawImagePath = toPosix(path.relative(demoRoot, fallback));
      }

      const predictions = {};
      const sceneModelStats = {};

      for (const modelId of modelDirs) {
        const predictionPath = path.join(datasetRoot, modelId, "visualised_samples_with_json", `${sceneId}.json`);
        if (!existsFile(predictionPath)) continue;

        const prediction = readJson(predictionPath);
        const detections = (prediction.detections || []).map((detection) => {
          classSet.add(detection.class_name);
          const confidence = detection.confidence == null ? null : round(Number(detection.confidence), 4);
          return {
            className: detection.class_name,
            confidence,
            bbox: detection.bbox.map((value) => round(Number(value), 2))
          };
        });

        predictions[modelId] = detections;

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
        model.totalDetections += detections.length;
        model.maxConfidence = Math.max(model.maxConfidence, ...confidences, 0);
        confidences.forEach((confidence) => {
          model.confidenceSum += confidence;
          model.confidenceCount += 1;
        });
      }

      scenes.push({
        id: `${datasetName.toLowerCase()}-${sceneId}`,
        dataset: datasetName,
        taskType: "object-detection",
        imageId: sceneId,
        title: `Image ${sceneId}`,
        location: `${datasetName} benchmark sample`,
        baseImage: viewerImagePath || rawImagePath,
        sourceImage: rawImagePath,
        thumbnailImage: thumbnailImagePath,
        rawImageAvailable,
        width,
        height,
        dimensions: `${width} x ${height}`,
        groundTruth: gtBoxes,
        predictions,
        sceneModelStats,
        classNames: [...new Set(gtBoxes.map((box) => box.className))],
        summary: rawImageAvailable
          ? `${gtBoxes.length} ground-truth box${gtBoxes.length === 1 ? "" : "es"} with ${Object.keys(predictions).length} model output${Object.keys(predictions).length === 1 ? "" : "s"} loaded.`
          : `${gtBoxes.length} ground-truth box${gtBoxes.length === 1 ? "" : "es"} loaded. Raw image was missing, so this scene uses the GT preview image as fallback.`
      });
    }
  }

  const classes = [...classSet].sort().map((name, index) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    name,
    color: CLASS_COLORS[index % CLASS_COLORS.length]
  }));

  const models = [...modelMap.values()].map((model) => ({
    id: model.id,
    name: model.name,
    shortName: model.shortName,
    color: model.color,
    stats: {
      scenes: model.sceneCount,
      avgDetections: model.sceneCount ? round(model.totalDetections / model.sceneCount, 2) : 0,
      avgConfidence: model.confidenceCount ? round(model.confidenceSum / model.confidenceCount, 3) : null,
      maxConfidence: model.confidenceCount ? round(clamp(model.maxConfidence, 0, 1), 3) : null
    }
  }));

  scenes.sort((a, b) => {
    if (a.dataset === b.dataset) return safeNumericSort(a.imageId, b.imageId);
    return a.dataset.localeCompare(b.dataset);
  });

  return {
    title: "Aerial Detection Atlas",
    subtitle: "Benchmark evaluation viewer",
    taskTypes: [{ id: "object-detection", name: "Object Detection" }],
    classes,
    models,
    scenes
  };
}

const output = `window.DETECTION_ATLAS_DATA = ${JSON.stringify(buildDatasets(), null, 2)};\n`;
fs.writeFileSync(outputFile, output);
console.log(`Wrote ${outputFile}`);
