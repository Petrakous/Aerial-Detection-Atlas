import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const demoRoot = path.resolve(__dirname, "..");

const OUTER_ZIP = path.join(demoRoot, "Datasets", "HAZMAT13-20260519T151619Z-3-001.zip");
const TEMP_ROOT = path.join(demoRoot, ".tmp", "hazmat-import-script");
const EXTRACT_ROOT = path.join(TEMP_ROOT, "HAZMAT13");
const DATASET_NAME = "HAZMAT";
const DATASET_ROOT = path.join(demoRoot, DATASET_NAME);

const MODEL_CONFIGS = [
  { archiveName: "yolo11.zip", extractedDir: "yolo11", outputModelId: "yolo11" },
  { archiveName: "yolo26.zip", extractedDir: "yolo26", outputModelId: "yolo26" }
];

function ensureDir(targetPath) {
  fs.mkdirSync(targetPath, { recursive: true });
}

function resetDir(targetPath) {
  fs.rmSync(targetPath, { recursive: true, force: true });
  fs.mkdirSync(targetPath, { recursive: true });
}

function runUnzip(zipPath, destination) {
  ensureDir(destination);
  execFileSync("unzip", ["-o", zipPath, "-d", destination], { stdio: "ignore" });
}

function readJson(targetPath) {
  return JSON.parse(fs.readFileSync(targetPath, "utf8"));
}

function writeJson(targetPath, value) {
  fs.writeFileSync(targetPath, `${JSON.stringify(value, null, 2)}\n`);
}

function basenameWithoutExt(fileName) {
  return path.basename(fileName, path.extname(fileName));
}

function relativeDemoPath(targetPath) {
  return path.relative(demoRoot, targetPath) || ".";
}

function groupByImageId(items) {
  const grouped = new Map();
  for (const item of items) {
    const imageId = item.image_id;
    if (!grouped.has(imageId)) grouped.set(imageId, []);
    grouped.get(imageId).push(item);
  }
  return grouped;
}

function convertModel(modelConfig) {
  const sourceRoot = path.join(EXTRACT_ROOT, modelConfig.extractedDir);
  const gtCoco = readJson(path.join(sourceRoot, "gt_coco.json"));
  const predictionCoco = readJson(path.join(sourceRoot, "predictions_coco.json"));
  const categories = new Map(
    (gtCoco.categories || []).map((category) => [Number(category.id), category.name])
  );
  const gtByImageId = groupByImageId(gtCoco.annotations || []);
  const predictionsByImageId = groupByImageId(predictionCoco || []);

  const modelRoot = path.join(DATASET_ROOT, modelConfig.outputModelId);
  const rawDir = path.join(modelRoot, "ground_truth_images");
  const gtDir = path.join(modelRoot, "samples_gt_with_json");
  const predDir = path.join(modelRoot, "visualised_samples_with_json");

  resetDir(modelRoot);
  ensureDir(rawDir);
  ensureDir(gtDir);
  ensureDir(predDir);

  let sceneCount = 0;
  let gtAnnotationCount = 0;
  let predictionCount = 0;

  for (const image of gtCoco.images || []) {
    const imageId = Number(image.id);
    const fileName = image.file_name;
    const sceneId = basenameWithoutExt(fileName);

    const sourceOriginal = path.join(sourceRoot, "original", fileName);
    const sourceGtPreview = path.join(sourceRoot, "ground_truth", fileName);
    const sourcePredictionPreview = path.join(sourceRoot, "predictions", fileName);

    if (!fs.existsSync(sourceOriginal)) {
      throw new Error(`Missing original image for ${modelConfig.outputModelId}: ${sourceOriginal}`);
    }
    if (!fs.existsSync(sourceGtPreview)) {
      throw new Error(`Missing ground-truth preview for ${modelConfig.outputModelId}: ${sourceGtPreview}`);
    }
    if (!fs.existsSync(sourcePredictionPreview)) {
      throw new Error(`Missing prediction preview for ${modelConfig.outputModelId}: ${sourcePredictionPreview}`);
    }

    const groundTruthAnnotations = (gtByImageId.get(imageId) || []).map((annotation) => ({
      bbox: (annotation.bbox || []).map((value) => Number(value)),
      class_name: categories.get(Number(annotation.category_id)) || String(annotation.category_id)
    }));

    const predictionDetections = (predictionsByImageId.get(imageId) || []).map((prediction) => ({
      bbox: (prediction.bbox || []).map((value) => Number(value)),
      class_name: categories.get(Number(prediction.category_id)) || String(prediction.category_id),
      confidence: Number(prediction.score)
    }));

    const gtScene = {
      image_id: sceneId,
      file_name: fileName,
      width: Number(image.width),
      height: Number(image.height),
      annotations: groundTruthAnnotations
    };

    const predictionScene = {
      image_id: sceneId,
      file_name: fileName,
      width: Number(image.width),
      height: Number(image.height),
      detections: predictionDetections
    };

    fs.copyFileSync(sourceOriginal, path.join(rawDir, fileName));
    fs.copyFileSync(sourceGtPreview, path.join(gtDir, fileName));
    fs.copyFileSync(sourcePredictionPreview, path.join(predDir, fileName));
    writeJson(path.join(gtDir, `${sceneId}.json`), gtScene);
    writeJson(path.join(predDir, `${sceneId}.json`), predictionScene);

    sceneCount += 1;
    gtAnnotationCount += groundTruthAnnotations.length;
    predictionCount += predictionDetections.length;
  }

  return {
    modelId: modelConfig.outputModelId,
    sceneCount,
    gtAnnotationCount,
    predictionCount
  };
}

function main() {
  if (!fs.existsSync(OUTER_ZIP)) {
    throw new Error(`Missing HAZMAT archive at ${relativeDemoPath(OUTER_ZIP)}`);
  }

  resetDir(TEMP_ROOT);
  runUnzip(OUTER_ZIP, TEMP_ROOT);

  for (const model of MODEL_CONFIGS) {
    const nestedZip = path.join(EXTRACT_ROOT, model.archiveName);
    if (!fs.existsSync(nestedZip)) {
      throw new Error(`Missing nested archive ${model.archiveName} in ${relativeDemoPath(EXTRACT_ROOT)}`);
    }
    runUnzip(nestedZip, EXTRACT_ROOT);
  }

  resetDir(DATASET_ROOT);
  const reports = MODEL_CONFIGS.map(convertModel);

  console.log(`Imported ${DATASET_NAME} into ${relativeDemoPath(DATASET_ROOT)}`);
  reports.forEach((report) => {
    console.log(
      `${report.modelId}: ${report.sceneCount} scenes, ${report.gtAnnotationCount} GT boxes, ${report.predictionCount} predictions`
    );
  });
}

main();
