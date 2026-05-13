import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const demoRoot = path.resolve(__dirname, "..");

const datasetRoot = path.join(demoRoot, "Inc1M", "sam3");
const rawDir = path.join(datasetRoot, "ground_truth_images");
const predDir = path.join(datasetRoot, "visualised_samples_with_json");
const predBackupDir = path.join(datasetRoot, "visualised_samples_with_json_unfiltered");
const sourceRoot = path.join(demoRoot, ".tmp", "inc1m-import", "inner", "vis");
const sourcePredJson = path.join(sourceRoot, "annotations_pred.json");
const sourceGtJson = path.join(sourceRoot, "annotations_gt.json");

const overlayAlpha = 0.42;
const nmsConfig = {
  iouThreshold: 0.72,
  containThreshold: 0.88,
  nestedCenterThreshold: 0.96,
  minScore: 0.30
};

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

function exists(targetPath) {
  return fs.existsSync(targetPath);
}

function ensureDir(targetPath) {
  fs.mkdirSync(targetPath, { recursive: true });
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
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
  return Math.max(0, bbox[2]) * Math.max(0, bbox[3]);
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
  const areaA = bboxArea(a);
  const areaB = bboxArea(b);
  const minArea = Math.min(areaA, areaB);
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
  const iou = bboxIou(candidate.bbox, kept.bbox);
  if (iou >= nmsConfig.iouThreshold) return true;

  const contain = containmentRatio(candidate.bbox, kept.bbox);
  if (contain >= nmsConfig.containThreshold) return true;

  const candidateArea = bboxArea(candidate.bbox);
  const keptArea = bboxArea(kept.bbox);
  const smaller = Math.min(candidateArea, keptArea);
  const larger = Math.max(candidateArea, keptArea);
  const areaRatio = larger > 0 ? smaller / larger : 0;

  return areaRatio >= nmsConfig.nestedCenterThreshold
    && (centerInside(candidate.bbox, kept.bbox) || centerInside(kept.bbox, candidate.bbox));
}

function filterPredictions(items) {
  const ordered = [...items]
    .filter((item) => Number(item.score) >= nmsConfig.minScore)
    .sort((a, b) => Number(b.score) - Number(a.score));

  const kept = [];
  for (const candidate of ordered) {
    if (kept.some((item) => shouldSuppress(candidate, item))) continue;
    kept.push(candidate);
  }
  return kept;
}

function summarizeSegments(predictions, categories) {
  const grouped = new Map();

  for (const item of predictions) {
    const category = categories.get(Number(item.category_id));
    if (!category) continue;

    if (!grouped.has(category.id)) {
      grouped.set(category.id, {
        label_index: category.id,
        class_name: category.name,
        pixel_count: 0,
        _scores: []
      });
    }

    const entry = grouped.get(category.id);
    entry.pixel_count += Math.round(Number(item.area) || 0);
    entry._scores.push(Number(item.score) || 0);
  }

  return [...grouped.values()]
    .map((entry) => ({
      label_index: entry.label_index,
      class_name: entry.class_name,
      pixel_count: entry.pixel_count,
      score: Number((entry._scores.reduce((sum, value) => sum + value, 0) / entry._scores.length).toFixed(4))
    }))
    .sort((a, b) => a.label_index - b.label_index || a.class_name.localeCompare(b.class_name));
}

function renderOverlay({ imagePath, width, height, predictions, categories, outputPath }) {
  const rawBuffer = execFileSync(
    "ffmpeg",
    ["-loglevel", "error", "-i", imagePath, "-f", "rawvideo", "-pix_fmt", "rgb24", "-vframes", "1", "pipe:1"],
    { encoding: null, maxBuffer: Math.max(width * height * 8, 1024 * 1024 * 64) }
  );

  if (rawBuffer.length !== width * height * 3) {
    throw new Error(`Unexpected decoded buffer size for ${imagePath}: ${rawBuffer.length}`);
  }

  const output = Buffer.from(rawBuffer);
  const visited = new Uint32Array(width * height);
  let nextLabel = 1;

  for (const prediction of predictions) {
    const category = categories.get(Number(prediction.category_id));
    if (!category) continue;
    const [red, green, blue] = hashColor(category.name);
    const counts = decodeCompressedRle(prediction.segmentation?.counts || "");
    let cursor = 0;
    let on = false;

    for (const runLength of counts) {
      const nextCursor = cursor + runLength;
      if (on) {
        for (let index = cursor; index < nextCursor; index += 1) {
          const row = index % height;
          const column = Math.floor(index / height);
          if (column < 0 || column >= width || row < 0 || row >= height) continue;

          const pixelIndex = row * width + column;
          if (visited[pixelIndex] === nextLabel) continue;
          visited[pixelIndex] = nextLabel;

          const offset = pixelIndex * 3;
          output[offset] = Math.round((output[offset] * (1 - overlayAlpha)) + (red * overlayAlpha));
          output[offset + 1] = Math.round((output[offset + 1] * (1 - overlayAlpha)) + (green * overlayAlpha));
          output[offset + 2] = Math.round((output[offset + 2] * (1 - overlayAlpha)) + (blue * overlayAlpha));
        }
      }
      cursor = nextCursor;
      on = !on;
    }

    nextLabel += 1;
  }

  const ppmPath = `${outputPath}.ppm`;
  const ppmHeader = Buffer.from(`P6\n${width} ${height}\n255\n`);
  fs.writeFileSync(ppmPath, Buffer.concat([ppmHeader, output]));
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", ppmPath, outputPath], { stdio: "inherit" });
  fs.rmSync(ppmPath, { force: true });
}

function main() {
  if (!exists(sourcePredJson) || !exists(sourceGtJson)) {
    throw new Error("Missing extracted Inc1M source annotations. Run the import script first.");
  }

  const gt = readJson(sourceGtJson);
  const pred = readJson(sourcePredJson);
  const categories = new Map((gt.categories || []).map((category) => [Number(category.id), category]));
  const images = new Map((gt.images || []).map((image) => [Number(image.id), image]));
  const byImageId = new Map();

  for (const item of pred) {
    const imageId = Number(item.image_id);
    if (!byImageId.has(imageId)) byImageId.set(imageId, []);
    byImageId.get(imageId).push(item);
  }

  if (!exists(predBackupDir)) {
    fs.cpSync(predDir, predBackupDir, { recursive: true });
  }

  const metadata = [];
  let originalTotal = 0;
  let filteredTotal = 0;

  for (const [imageId, items] of byImageId.entries()) {
    const image = images.get(imageId);
    if (!image) continue;

    const kept = filterPredictions(items);
    originalTotal += items.length;
    filteredTotal += kept.length;

    const sceneId = path.basename(image.file_name, path.extname(image.file_name));
    const predJsonPath = path.join(predDir, `${sceneId}.json`);
    const predImagePath = path.join(predDir, image.file_name);
    const rawImagePath = path.join(rawDir, image.file_name);

    const summary = {
      image_id: sceneId,
      file_name: image.file_name,
      width: Number(image.width),
      height: Number(image.height),
      segments: summarizeSegments(kept, categories)
    };

    writeJson(predJsonPath, summary);
    renderOverlay({
      imagePath: rawImagePath,
      width: Number(image.width),
      height: Number(image.height),
      predictions: kept,
      categories,
      outputPath: predImagePath
    });

    metadata.push({
      file_name: image.file_name,
      original_predictions: items.length,
      kept_predictions: kept.length
    });
  }

  writeJson(path.join(datasetRoot, "sam3_filter_report.json"), {
    method: "bbox_overlap_highest_confidence",
    config: nmsConfig,
    original_predictions: originalTotal,
    kept_predictions: filteredTotal,
    removed_predictions: originalTotal - filteredTotal,
    scenes: metadata
  });

  console.log(`Filtered Inc1M SAM3 predictions: kept ${filteredTotal}/${originalTotal}`);
}

main();
