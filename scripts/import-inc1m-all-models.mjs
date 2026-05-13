import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const demoRoot = path.resolve(__dirname, "..");

const DATASET_NAME = "Inc1M";
const DATASET_ROOT = path.join(demoRoot, DATASET_NAME);
const SHARED_RAW_DIR = path.join(DATASET_ROOT, "shared_ground_truth_images");
const SHARED_GT_DIR = path.join(DATASET_ROOT, "shared_samples_gt_with_json");
const DATASETS_DIR = path.join(demoRoot, "Datasets");
const EXTRACT_ROOT = path.join(demoRoot, ".tmp", "inc1m-import-all");
const OUTER_EXTRACT_DIR = path.join(EXTRACT_ROOT, "outer");
const INNER_EXTRACT_DIR = path.join(EXTRACT_ROOT, "inner");
const MODEL_RENDER_ALPHA = 0.42;
const FILTER_CONFIG = {
  iouThreshold: 0.72,
  containThreshold: 0.88,
  nestedCenterThreshold: 0.96,
  minScore: 0.30
};

const MODEL_SPECS = [
  {
    id: "sam3",
    kind: "coco-rle-inner-zip",
    zipName: "sam3_inc1m.zip",
    extractDir: "sam3",
    predictionJson: path.join("vis", "annotations_pred.json"),
    imageFolder: path.join("vis", "pred")
  },
  {
    id: "mask2former",
    kind: "coco-rle-outer",
    folderName: "Mask2Former",
    predictionJson: "predictions_segm_mask2former.json"
  },
  {
    id: "cascade-mask-rcnn",
    kind: "coco-rle-outer",
    folderName: "Cascade_Mask_R-CNN",
    predictionJson: "predictions_segm_casc_mask_rcnn.json"
  },
  {
    id: "yolo11l-seg",
    kind: "polygon-inner-zip",
    zipName: "yolo11l-seg.zip",
    extractDir: "yolo11l-seg",
    predictionJson: path.join("visualizations_yolo11", "predictions.json"),
    imageFolder: path.join("visualizations_yolo11", "predictions")
  },
  {
    id: "yolo26l-seg",
    kind: "polygon-inner-zip",
    zipName: "yolo26l-seg.zip",
    extractDir: "yolo26l-seg",
    predictionJson: path.join("visualizations_yolo26", "predictions.json"),
    imageFolder: path.join("visualizations_yolo26", "predictions")
  }
];

const palette = [
  [0, 255, 209],
  [255, 23, 68],
  [138, 0, 255],
  [255, 179, 0],
  [57, 255, 20],
  [0, 71, 255],
  [255, 0, 212],
  [75, 0, 130],
  [255, 214, 0],
  [255, 109, 0],
  [0, 230, 118],
  [182, 255, 0]
];

function ensureDir(targetPath) {
  fs.mkdirSync(targetPath, { recursive: true });
}

function resetDir(targetPath) {
  fs.rmSync(targetPath, { recursive: true, force: true });
  fs.mkdirSync(targetPath, { recursive: true });
}

function exists(targetPath) {
  return fs.existsSync(targetPath);
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function copyFile(sourcePath, targetPath) {
  ensureDir(path.dirname(targetPath));
  fs.copyFileSync(sourcePath, targetPath);
}

function findLatestInc1mArchive() {
  const candidates = fs.readdirSync(DATASETS_DIR)
    .filter((name) => /^Inc1M-seg-May-15k-images-.*\.zip$/i.test(name))
    .sort();

  if (!candidates.length) {
    throw new Error(`No Inc1M archive found in ${DATASETS_DIR}`);
  }

  return path.join(DATASETS_DIR, candidates[candidates.length - 1]);
}

function unzipArchive(zipPath, outputDir) {
  ensureDir(outputDir);
  execFileSync("unzip", ["-oq", zipPath, "-d", outputDir], { stdio: "inherit" });
}

function extractInnerZip(zipPath, outputDir) {
  unzipArchive(zipPath, outputDir);
}

function hashColor(name) {
  let hash = 0;
  for (const char of String(name || "").toLowerCase()) {
    hash = ((hash * 31) + char.charCodeAt(0)) >>> 0;
  }
  return palette[hash % palette.length];
}

function decodeCompressedRle(countsText) {
  const counts = [];
  let pointer = 0;

  while (pointer < countsText.length) {
    let shift = 0;
    let value = 0;
    let current = 0;

    do {
      current = countsText.charCodeAt(pointer) - 48;
      value |= (current & 0x1f) << (5 * shift);
      pointer += 1;
      shift += 1;
    } while (current & 0x20);

    if (current & 0x10) {
      value |= (-1 << (5 * shift));
    }

    if (counts.length > 2) {
      value += counts[counts.length - 2];
    }

    counts.push(value);
  }

  return counts;
}

function bboxArea(bbox) {
  return Math.max(0, Number(bbox?.[2]) || 0) * Math.max(0, Number(bbox?.[3]) || 0);
}

function intersectionArea(a, b) {
  const left = Math.max(a[0], b[0]);
  const top = Math.max(a[1], b[1]);
  const right = Math.min(a[0] + a[2], b[0] + b[2]);
  const bottom = Math.min(a[1] + a[3], b[1] + b[3]);
  return Math.max(0, right - left) * Math.max(0, bottom - top);
}

function bboxIou(a, b) {
  const intersection = intersectionArea(a, b);
  if (!intersection) return 0;
  const union = bboxArea(a) + bboxArea(b) - intersection;
  return union > 0 ? intersection / union : 0;
}

function containmentRatio(a, b) {
  const intersection = intersectionArea(a, b);
  const minArea = Math.min(bboxArea(a), bboxArea(b));
  return minArea > 0 ? intersection / minArea : 0;
}

function centerInside(inner, outer) {
  const centerX = inner[0] + (inner[2] / 2);
  const centerY = inner[1] + (inner[3] / 2);
  return centerX >= outer[0]
    && centerX <= outer[0] + outer[2]
    && centerY >= outer[1]
    && centerY <= outer[1] + outer[3];
}

function shouldSuppress(candidate, kept) {
  if (bboxIou(candidate.bbox, kept.bbox) >= FILTER_CONFIG.iouThreshold) return true;
  if (containmentRatio(candidate.bbox, kept.bbox) >= FILTER_CONFIG.containThreshold) return true;

  const smaller = Math.min(bboxArea(candidate.bbox), bboxArea(kept.bbox));
  const larger = Math.max(bboxArea(candidate.bbox), bboxArea(kept.bbox));
  const areaRatio = larger > 0 ? smaller / larger : 0;

  return areaRatio >= FILTER_CONFIG.nestedCenterThreshold
    && (centerInside(candidate.bbox, kept.bbox) || centerInside(kept.bbox, candidate.bbox));
}

function filterPredictions(items) {
  const ordered = [...items]
    .filter((item) => Number(item.score) >= FILTER_CONFIG.minScore)
    .sort((a, b) => Number(b.score) - Number(a.score));

  const kept = [];
  for (const candidate of ordered) {
    if (kept.some((existing) => shouldSuppress(candidate, existing))) continue;
    kept.push(candidate);
  }
  return kept;
}

function polygonBbox(points) {
  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;

  for (const [x, y] of points || []) {
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  }

  if (!Number.isFinite(minX) || !Number.isFinite(minY) || !Number.isFinite(maxX) || !Number.isFinite(maxY)) {
    return [0, 0, 0, 0];
  }

  return [minX, minY, Math.max(0, maxX - minX), Math.max(0, maxY - minY)];
}

function polygonArea(points) {
  if (!Array.isArray(points) || points.length < 3) return 0;
  let area = 0;
  for (let index = 0; index < points.length; index += 1) {
    const [x1, y1] = points[index];
    const [x2, y2] = points[(index + 1) % points.length];
    area += (x1 * y2) - (x2 * y1);
  }
  return Math.abs(area) / 2;
}

function summarizeSegments(items) {
  const grouped = new Map();

  for (const item of items) {
    const key = `${item.classId}:${item.className}`;
    if (!grouped.has(key)) {
      grouped.set(key, {
        label_index: item.classId,
        class_name: item.className,
        pixel_count: 0,
        _scores: []
      });
    }

    const entry = grouped.get(key);
    entry.pixel_count += Math.round(Number(item.area) || 0);
    if (item.score != null) entry._scores.push(Number(item.score));
  }

  return [...grouped.values()]
    .map((entry) => {
      const normalized = {
        label_index: entry.label_index,
        class_name: entry.class_name,
        pixel_count: entry.pixel_count
      };

      const numericScores = entry._scores.filter((value) => Number.isFinite(value));
      if (numericScores.length) {
        normalized.score = Number((numericScores.reduce((sum, value) => sum + value, 0) / numericScores.length).toFixed(4));
      }

      return normalized;
    })
    .sort((a, b) => a.label_index - b.label_index || a.class_name.localeCompare(b.class_name));
}

function fillPolygonIntoBuffer(output, width, height, points, color) {
  if (!Array.isArray(points) || points.length < 3) return;

  const ys = points.map(([, y]) => y);
  const minY = Math.max(0, Math.floor(Math.min(...ys)));
  const maxY = Math.min(height - 1, Math.ceil(Math.max(...ys)));
  const [red, green, blue] = color;

  for (let y = minY; y <= maxY; y += 1) {
    const scanY = y + 0.5;
    const intersections = [];

    for (let index = 0; index < points.length; index += 1) {
      const [x1, y1] = points[index];
      const [x2, y2] = points[(index + 1) % points.length];

      if ((y1 <= scanY && y2 > scanY) || (y2 <= scanY && y1 > scanY)) {
        const x = x1 + ((scanY - y1) * (x2 - x1)) / (y2 - y1);
        intersections.push(x);
      }
    }

    intersections.sort((a, b) => a - b);

    for (let index = 0; index < intersections.length; index += 2) {
      const startX = Math.max(0, Math.ceil(intersections[index]));
      const endX = Math.min(width - 1, Math.floor(intersections[index + 1] ?? intersections[index]));

      for (let x = startX; x <= endX; x += 1) {
        const offset = ((y * width) + x) * 3;
        output[offset] = Math.round((output[offset] * (1 - MODEL_RENDER_ALPHA)) + (red * MODEL_RENDER_ALPHA));
        output[offset + 1] = Math.round((output[offset + 1] * (1 - MODEL_RENDER_ALPHA)) + (green * MODEL_RENDER_ALPHA));
        output[offset + 2] = Math.round((output[offset + 2] * (1 - MODEL_RENDER_ALPHA)) + (blue * MODEL_RENDER_ALPHA));
      }
    }
  }
}

function fillRleIntoBuffer(output, width, height, segmentation, color) {
  const counts = decodeCompressedRle(segmentation?.counts || "");
  const [red, green, blue] = color;
  let cursor = 0;
  let on = false;

  for (const runLength of counts) {
    const nextCursor = cursor + runLength;
    if (on) {
      for (let index = cursor; index < nextCursor; index += 1) {
        const row = index % height;
        const column = Math.floor(index / height);
        if (column < 0 || column >= width || row < 0 || row >= height) continue;

        const offset = ((row * width) + column) * 3;
        output[offset] = Math.round((output[offset] * (1 - MODEL_RENDER_ALPHA)) + (red * MODEL_RENDER_ALPHA));
        output[offset + 1] = Math.round((output[offset + 1] * (1 - MODEL_RENDER_ALPHA)) + (green * MODEL_RENDER_ALPHA));
        output[offset + 2] = Math.round((output[offset + 2] * (1 - MODEL_RENDER_ALPHA)) + (blue * MODEL_RENDER_ALPHA));
      }
    }
    cursor = nextCursor;
    on = !on;
  }
}

function renderOverlay({ imagePath, width, height, items, outputPath }) {
  const rawBuffer = execFileSync(
    "ffmpeg",
    ["-loglevel", "error", "-i", imagePath, "-f", "rawvideo", "-pix_fmt", "rgb24", "-vframes", "1", "pipe:1"],
    { encoding: null, maxBuffer: Math.max(width * height * 8, 1024 * 1024 * 64) }
  );

  if (rawBuffer.length !== width * height * 3) {
    throw new Error(`Unexpected decoded buffer size for ${imagePath}: ${rawBuffer.length}`);
  }

  const output = Buffer.from(rawBuffer);
  for (const item of items) {
    const color = hashColor(item.className);
    if (item.type === "polygon") {
      fillPolygonIntoBuffer(output, width, height, item.polygon, color);
    } else if (item.type === "rle") {
      fillRleIntoBuffer(output, width, height, item.segmentation, color);
    }
  }

  const ppmPath = `${outputPath}.ppm`;
  const ppmHeader = Buffer.from(`P6\n${width} ${height}\n255\n`);
  fs.writeFileSync(ppmPath, Buffer.concat([ppmHeader, output]));
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", ppmPath, outputPath], { stdio: "inherit" });
  fs.rmSync(ppmPath, { force: true });
}

function normalizeGtAnnotation(annotation) {
  const polygon = (annotation.polygon || []).map(([x, y]) => [Number(x), Number(y)]);
  return {
    type: "polygon",
    classId: Number(annotation.class_id),
    className: annotation.class_name,
    polygon,
    bbox: polygonBbox(polygon),
    area: polygonArea(polygon),
    score: null
  };
}

function normalizeCocoPrediction(annotation, imageIdToFileName, categoryMap) {
  const fileName = imageIdToFileName.get(Number(annotation.image_id));
  const category = categoryMap.get(Number(annotation.category_id));
  return {
    fileName,
    type: "rle",
    classId: category?.id ?? Number(annotation.category_id),
    className: category?.name ?? String(annotation.category_id),
    segmentation: annotation.segmentation,
    bbox: (annotation.bbox || []).map((value) => Number(value)),
    area: Number(annotation.area) || 0,
    score: Number(annotation.score) || 0
  };
}

function normalizePolygonPrediction(fileName, prediction) {
  const polygon = (prediction.polygon || []).map(([x, y]) => [Number(x), Number(y)]);
  return {
    fileName,
    type: "polygon",
    classId: Number(prediction.class_id),
    className: prediction.class_name,
    polygon,
    bbox: polygonBbox(polygon),
    area: polygonArea(polygon),
    score: Number(prediction.confidence) || 0
  };
}

function buildSharedGroundTruth(bundleRoot) {
  const groundTruth = readJson(path.join(bundleRoot, "ground_truth.json"));
  const sampledImages = fs.readFileSync(path.join(bundleRoot, "sampled_images.txt"), "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const rawDir = path.join(bundleRoot, "original");

  const sceneMap = new Map();
  const categoryMap = new Map();
  for (const image of groundTruth.images || []) {
    const annotations = (image.annotations || []).map(normalizeGtAnnotation);
    annotations.forEach((annotation) => {
      if (!categoryMap.has(annotation.classId)) {
        categoryMap.set(annotation.classId, { id: annotation.classId, name: annotation.className });
      }
    });

    sceneMap.set(image.filename, {
      fileName: image.filename,
      width: Number(image.width),
      height: Number(image.height),
      rawImagePath: path.join(rawDir, image.filename),
      groundTruthItems: annotations
    });
  }

  return {
    sampledImages,
    sceneMap,
    categoryMap
  };
}

function buildSam3Maps(innerRoot) {
  const gt = readJson(path.join(innerRoot, "vis", "annotations_gt.json"));
  return {
    imageIdToFileName: new Map((gt.images || []).map((image) => [Number(image.id), image.file_name])),
    categoryMap: new Map((gt.categories || []).map((category) => [Number(category.id), { id: Number(category.id), name: category.name }]))
  };
}

function buildCocoPredictionLookup(predictions, imageIdToFileName, categoryMap) {
  const byFile = new Map();
  for (const annotation of predictions) {
    const normalized = normalizeCocoPrediction(annotation, imageIdToFileName, categoryMap);
    if (!normalized.fileName) continue;
    if (!byFile.has(normalized.fileName)) byFile.set(normalized.fileName, []);
    byFile.get(normalized.fileName).push(normalized);
  }
  return byFile;
}

function buildPolygonPredictionLookup(predictionJson) {
  const byFile = new Map();
  for (const image of predictionJson.images || []) {
    const items = (image.predictions || []).map((prediction) => normalizePolygonPrediction(image.filename, prediction));
    byFile.set(image.filename, items);
  }
  return byFile;
}

function modelPaths(modelId) {
  const root = path.join(DATASET_ROOT, modelId);
  return {
    root,
    rawDir: path.join(root, "ground_truth_images"),
    gtDir: path.join(root, "samples_gt_with_json"),
    predDir: path.join(root, "visualised_samples_with_json")
  };
}

function main() {
  const archivePath = findLatestInc1mArchive();
  resetDir(EXTRACT_ROOT);
  resetDir(DATASET_ROOT);
  ensureDir(SHARED_RAW_DIR);
  ensureDir(SHARED_GT_DIR);
  unzipArchive(archivePath, OUTER_EXTRACT_DIR);

  const bundleRoot = path.join(OUTER_EXTRACT_DIR, "Inc1M-seg-May-15k-images");
  const shared = buildSharedGroundTruth(bundleRoot);

  const sam3Zip = path.join(bundleRoot, "sam3_inc1m.zip");
  const sam3ExtractRoot = path.join(INNER_EXTRACT_DIR, "sam3");
  extractInnerZip(sam3Zip, sam3ExtractRoot);
  const sam3Maps = buildSam3Maps(path.join(sam3ExtractRoot, "vis") ? sam3ExtractRoot : sam3ExtractRoot);
  const mergedCategoryMap = new Map([...shared.categoryMap.entries(), ...sam3Maps.categoryMap.entries()]);

  const lookups = new Map();

  for (const spec of MODEL_SPECS) {
    if (spec.kind === "coco-rle-inner-zip") {
      const extractRoot = path.join(INNER_EXTRACT_DIR, spec.extractDir);
      if (!exists(extractRoot)) extractInnerZip(path.join(bundleRoot, spec.zipName), extractRoot);
      const predictions = readJson(path.join(extractRoot, spec.predictionJson));
      lookups.set(spec.id, buildCocoPredictionLookup(predictions, sam3Maps.imageIdToFileName, mergedCategoryMap));
      continue;
    }

    if (spec.kind === "coco-rle-outer") {
      const predictions = readJson(path.join(bundleRoot, spec.folderName, spec.predictionJson));
      lookups.set(spec.id, buildCocoPredictionLookup(predictions, sam3Maps.imageIdToFileName, mergedCategoryMap));
      continue;
    }

    if (spec.kind === "polygon-inner-zip") {
      const extractRoot = path.join(INNER_EXTRACT_DIR, spec.extractDir);
      extractInnerZip(path.join(bundleRoot, spec.zipName), extractRoot);
      const predictionJson = readJson(path.join(extractRoot, spec.predictionJson));
      lookups.set(spec.id, buildPolygonPredictionLookup(predictionJson));
    }
  }

  const filterReports = {};

  for (const spec of MODEL_SPECS) {
    const paths = modelPaths(spec.id);
    ensureDir(paths.rawDir);
    ensureDir(paths.gtDir);
    ensureDir(paths.predDir);

    let originalPredictionTotal = 0;
    let keptPredictionTotal = 0;
    const sceneReport = [];

    for (const fileName of shared.sampledImages) {
      const scene = shared.sceneMap.get(fileName);
      if (!scene) {
        throw new Error(`Missing ground-truth scene for ${fileName}`);
      }

      const sceneId = path.basename(fileName, path.extname(fileName));
      const gtItems = scene.groundTruthItems;
      const gtSummary = {
        image_id: sceneId,
        file_name: fileName,
        width: scene.width,
        height: scene.height,
        segments: summarizeSegments(gtItems)
      };

      copyFile(scene.rawImagePath, path.join(SHARED_RAW_DIR, fileName));
      renderOverlay({
        imagePath: scene.rawImagePath,
        width: scene.width,
        height: scene.height,
        items: gtItems,
        outputPath: path.join(SHARED_GT_DIR, fileName)
      });
      writeJson(path.join(SHARED_GT_DIR, `${sceneId}.json`), gtSummary);

      copyFile(scene.rawImagePath, path.join(paths.rawDir, fileName));
      writeJson(path.join(paths.gtDir, `${sceneId}.json`), gtSummary);

      const rawPredictions = lookups.get(spec.id)?.get(fileName) || [];
      const filteredPredictions = filterPredictions(rawPredictions);
      originalPredictionTotal += rawPredictions.length;
      keptPredictionTotal += filteredPredictions.length;

      renderOverlay({
        imagePath: scene.rawImagePath,
        width: scene.width,
        height: scene.height,
        items: [...filteredPredictions].sort((a, b) => Number(a.score) - Number(b.score)),
        outputPath: path.join(paths.predDir, fileName)
      });

      writeJson(path.join(paths.predDir, `${sceneId}.json`), {
        image_id: sceneId,
        file_name: fileName,
        width: scene.width,
        height: scene.height,
        segments: summarizeSegments(filteredPredictions)
      });

      sceneReport.push({
        file_name: fileName,
        original_predictions: rawPredictions.length,
        kept_predictions: filteredPredictions.length
      });
    }

    filterReports[spec.id] = {
      model: spec.id,
      config: FILTER_CONFIG,
      original_predictions: originalPredictionTotal,
      kept_predictions: keptPredictionTotal,
      removed_predictions: originalPredictionTotal - keptPredictionTotal,
      scenes: sceneReport
    };

    writeJson(path.join(paths.root, "filter_report.json"), filterReports[spec.id]);
  }

  copyFile(path.join(bundleRoot, "sampled_images.txt"), path.join(DATASET_ROOT, "sampled_images.txt"));
  writeJson(path.join(DATASET_ROOT, "import_summary.json"), {
    archive: path.basename(archivePath),
    dataset: DATASET_NAME,
    sampled_images: shared.sampledImages.length,
    models: MODEL_SPECS.map((spec) => spec.id),
    filter_reports: Object.fromEntries(
      Object.entries(filterReports).map(([modelId, report]) => [
        modelId,
        {
          original_predictions: report.original_predictions,
          kept_predictions: report.kept_predictions,
          removed_predictions: report.removed_predictions
        }
      ])
    )
  });

  console.log(`Imported ${shared.sampledImages.length} Inc1M scenes across ${MODEL_SPECS.length} models from ${path.basename(archivePath)}`);
}

main();
