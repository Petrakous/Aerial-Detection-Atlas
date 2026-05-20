import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const repoRoot = "/Users/peter/Scripts/Triffid/aerial-segmentation-demo";
const outputRoot = process.env.OUT_DIR || "/tmp/aerial-atlas-hazmat-assets-v1";
const releaseDir = path.join(outputRoot, "assets-hazmat-v1");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyIfPresent(sourcePath, targetPath) {
  if (!fs.existsSync(sourcePath)) return false;
  ensureDir(path.dirname(targetPath));
  fs.copyFileSync(sourcePath, targetPath);
  return true;
}

const sampleDataSource = fs.readFileSync(path.join(repoRoot, "data/sample-data.js"), "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(sampleDataSource, context);
const data = context.window.DETECTION_ATLAS_DATA;

fs.rmSync(outputRoot, { recursive: true, force: true });
ensureDir(releaseDir);

const hazmatScenes = data.scenes.filter((scene) => scene.dataset === "HAZMAT");
const seenViewer = new Set();
const seenThumb = new Set();
const seenPredictions = new Set();

for (const scene of hazmatScenes) {
  if (scene.baseImage && !seenViewer.has(scene.baseImage)) {
    seenViewer.add(scene.baseImage);
    const filename = path.basename(scene.baseImage);
    copyIfPresent(
      path.join(repoRoot, scene.baseImage),
      path.join(releaseDir, `viewer-HAZMAT-${filename}`)
    );
  }

  if (scene.thumbnailImage && !seenThumb.has(scene.thumbnailImage)) {
    seenThumb.add(scene.thumbnailImage);
    const filename = path.basename(scene.thumbnailImage);
    copyIfPresent(
      path.join(repoRoot, scene.thumbnailImage),
      path.join(releaseDir, `thumbnail-HAZMAT-${filename}`)
    );
  }

  for (const [modelId, assetPath] of Object.entries(scene.predictionImages || {})) {
    const key = `${modelId}:${assetPath}`;
    if (seenPredictions.has(key)) continue;
    seenPredictions.add(key);
    const filename = path.basename(assetPath);
    copyIfPresent(
      path.join(repoRoot, assetPath),
      path.join(releaseDir, `prediction-HAZMAT-${modelId}-${filename}`)
    );
  }
}

console.log(`release_dir=${releaseDir}`);
console.log(`viewer_assets=${seenViewer.size}`);
console.log(`thumbnail_assets=${seenThumb.size}`);
console.log(`prediction_assets=${seenPredictions.size}`);
