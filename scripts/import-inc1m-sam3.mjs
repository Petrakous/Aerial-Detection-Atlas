import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const demoRoot = path.resolve(__dirname, "..");

const OUTER_ZIP = path.join(demoRoot, "Datasets", "Inc1M-seg-May-15k-images-20260512T183840Z-3-001.zip");
const EXTRACT_ROOT = path.join(demoRoot, ".tmp", "inc1m-import");
const OUTER_EXTRACT_DIR = path.join(EXTRACT_ROOT, "outer");
const INNER_ZIP = path.join(OUTER_EXTRACT_DIR, "Inc1M-seg-May-15k-images", "sam3_inc1m.zip");
const INNER_EXTRACT_DIR = path.join(EXTRACT_ROOT, "inner");
const VIS_ROOT = path.join(INNER_EXTRACT_DIR, "vis");

const DATASET_NAME = "Inc1M";
const MODEL_NAME = "sam3";
const DATASET_ROOT = path.join(demoRoot, DATASET_NAME);
const MODEL_ROOT = path.join(DATASET_ROOT, MODEL_NAME);
const RAW_DIR = path.join(MODEL_ROOT, "ground_truth_images");
const GT_DIR = path.join(MODEL_ROOT, "samples_gt_with_json");
const PRED_DIR = path.join(MODEL_ROOT, "visualised_samples_with_json");

function ensureDir(targetPath) {
  fs.mkdirSync(targetPath, { recursive: true });
}

function resetDir(targetPath) {
  fs.rmSync(targetPath, { recursive: true, force: true });
  fs.mkdirSync(targetPath, { recursive: true });
}

function unzipArchive(zipPath, outputDir) {
  ensureDir(outputDir);
  execFileSync("unzip", ["-o", zipPath, "-d", outputDir], { stdio: "inherit" });
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function copyFile(sourcePath, targetPath) {
  ensureDir(path.dirname(targetPath));
  fs.copyFileSync(sourcePath, targetPath);
}

function normalizeSceneId(fileName) {
  return path.basename(fileName, path.extname(fileName));
}

function buildCategoryMap(categories) {
  return new Map(
    (categories || []).map((category) => [
      Number(category.id),
      {
        id: Number(category.id),
        name: category.name
      }
    ])
  );
}

function buildGroupedAnnotations(annotations) {
  const grouped = new Map();
  for (const annotation of annotations || []) {
    const imageId = Number(annotation.image_id);
    if (!grouped.has(imageId)) grouped.set(imageId, []);
    grouped.get(imageId).push(annotation);
  }
  return grouped;
}

function summarizeSegments(annotations, categoryMap, { includeScore = false } = {}) {
  const groupedByCategory = new Map();

  for (const annotation of annotations || []) {
    const categoryId = Number(annotation.category_id);
    const category = categoryMap.get(categoryId);
    if (!category) continue;

    if (!groupedByCategory.has(categoryId)) {
      groupedByCategory.set(categoryId, {
        label_index: category.id,
        class_name: category.name,
        pixel_count: 0,
        _scores: []
      });
    }

    const segment = groupedByCategory.get(categoryId);
    const area = Number(annotation.area ?? 0);
    if (Number.isFinite(area) && area > 0) {
      segment.pixel_count += area;
    }

    if (includeScore) {
      const score = Number(annotation.score);
      if (Number.isFinite(score)) segment._scores.push(score);
    }
  }

  return [...groupedByCategory.values()]
    .map((segment) => {
      const normalized = {
        label_index: segment.label_index,
        class_name: segment.class_name,
        pixel_count: Math.round(segment.pixel_count)
      };

      if (includeScore && segment._scores.length) {
        const avgScore = segment._scores.reduce((sum, value) => sum + value, 0) / segment._scores.length;
        normalized.score = Number(avgScore.toFixed(4));
      }

      return normalized;
    })
    .sort((a, b) => a.label_index - b.label_index || a.class_name.localeCompare(b.class_name));
}

function main() {
  if (!fs.existsSync(OUTER_ZIP)) {
    throw new Error(`Missing archive: ${OUTER_ZIP}`);
  }

  resetDir(EXTRACT_ROOT);
  unzipArchive(OUTER_ZIP, OUTER_EXTRACT_DIR);

  if (!fs.existsSync(INNER_ZIP)) {
    throw new Error(`Missing inner archive after extraction: ${INNER_ZIP}`);
  }

  unzipArchive(INNER_ZIP, INNER_EXTRACT_DIR);

  const gtJsonPath = path.join(VIS_ROOT, "annotations_gt.json");
  const predJsonPath = path.join(VIS_ROOT, "annotations_pred.json");
  const originalDir = path.join(VIS_ROOT, "original");
  const gtImageDir = path.join(VIS_ROOT, "gt");
  const predImageDir = path.join(VIS_ROOT, "pred");
  const sampledImagesPath = path.join(VIS_ROOT, "sampled_images.txt");

  const groundTruth = readJson(gtJsonPath);
  const predictions = readJson(predJsonPath);
  const sampledImages = fs.readFileSync(sampledImagesPath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const images = groundTruth.images || [];
  const imageByName = new Map(images.map((image) => [image.file_name, image]));
  const categoryMap = buildCategoryMap(groundTruth.categories || []);
  const gtByImageId = buildGroupedAnnotations(groundTruth.annotations || []);
  const predByImageId = buildGroupedAnnotations(predictions || []);

  resetDir(DATASET_ROOT);
  ensureDir(RAW_DIR);
  ensureDir(GT_DIR);
  ensureDir(PRED_DIR);

  for (const fileName of sampledImages) {
    const image = imageByName.get(fileName);
    if (!image) {
      throw new Error(`Sampled image missing from annotations_gt.json: ${fileName}`);
    }

    const sceneId = normalizeSceneId(fileName);
    const width = Number(image.width);
    const height = Number(image.height);
    const gtSegments = summarizeSegments(gtByImageId.get(Number(image.id)) || [], categoryMap);
    const predSegments = summarizeSegments(predByImageId.get(Number(image.id)) || [], categoryMap, { includeScore: true });

    const gtScene = {
      image_id: String(sceneId),
      file_name: fileName,
      width,
      height,
      segments: gtSegments
    };

    const predScene = {
      image_id: String(sceneId),
      file_name: fileName,
      width,
      height,
      segments: predSegments
    };

    copyFile(path.join(originalDir, fileName), path.join(RAW_DIR, fileName));
    copyFile(path.join(gtImageDir, fileName), path.join(GT_DIR, fileName));
    copyFile(path.join(predImageDir, fileName), path.join(PRED_DIR, fileName));
    fs.writeFileSync(path.join(GT_DIR, `${sceneId}.json`), `${JSON.stringify(gtScene, null, 2)}\n`);
    fs.writeFileSync(path.join(PRED_DIR, `${sceneId}.json`), `${JSON.stringify(predScene, null, 2)}\n`);
  }

  copyFile(sampledImagesPath, path.join(DATASET_ROOT, "sampled_images.txt"));

  console.log(`Imported ${sampledImages.length} scenes into ${DATASET_ROOT}`);
}

main();
