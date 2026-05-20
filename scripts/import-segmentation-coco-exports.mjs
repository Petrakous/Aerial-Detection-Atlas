#!/usr/bin/env node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const datasetsRoot = path.join(repoRoot, "Datasets");
const MODEL_IDS = ["ccnet", "deeplabv3plus", "pspnet", "segformer"];
const DATASET_SPECS = [
  { datasetName: "FloodNetPlus", exportPrefix: "floodnetplus" },
  { datasetName: "RescueNet", exportPrefix: "rescuenet" }
];

function latestArchive() {
  const matches = fs.readdirSync(datasetsRoot)
    .filter((name) => /^export_jsons-.*\.zip$/i.test(name))
    .sort()
    .reverse();
  if (!matches.length) {
    throw new Error(`No export_jsons archive found in ${datasetsRoot}`);
  }
  return path.join(datasetsRoot, matches[0]);
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function round(value, digits = 4) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 0;
  return Number(numeric.toFixed(digits));
}

function sceneIdFromFileName(fileName = "") {
  return path.basename(fileName, path.extname(fileName));
}

function pointsFromFlat(values = []) {
  const points = [];
  for (let index = 0; index + 1 < values.length; index += 2) {
    points.push([Number(values[index]), Number(values[index + 1])]);
  }
  return points.filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y));
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

function normalizeSegmentation(segmentation) {
  if (Array.isArray(segmentation)) {
    const polygons = segmentation
      .map((entry) => Array.isArray(entry) ? pointsFromFlat(entry) : [])
      .filter((points) => points.length >= 3);

    if (!polygons.length) return {};

    const primaryPolygon = [...polygons].sort((a, b) => polygonArea(b) - polygonArea(a))[0];
    return {
      type: "polygon",
      polygon: primaryPolygon,
      polygons
    };
  }

  if (segmentation && typeof segmentation === "object" && segmentation.counts) {
    return {
      type: "rle",
      segmentation: {
        size: Array.isArray(segmentation.size) ? segmentation.size.map((value) => Number(value)) : null,
        counts: String(segmentation.counts)
      }
    };
  }

  return {};
}

function summarizeInstances(instances) {
  const grouped = new Map();

  for (const instance of instances) {
    const key = `${instance.label_index}:${instance.class_name}`;
    if (!grouped.has(key)) {
      grouped.set(key, {
        label_index: instance.label_index,
        class_name: instance.class_name,
        pixel_count: 0,
        _scores: []
      });
    }

    const entry = grouped.get(key);
    entry.pixel_count += Math.round(Number(instance.area) || 0);
    if (typeof instance.score === "number" && Number.isFinite(instance.score)) {
      entry._scores.push(instance.score);
    }
  }

  return [...grouped.values()]
    .map((entry) => {
      const normalized = {
        label_index: entry.label_index,
        class_name: entry.class_name,
        pixel_count: entry.pixel_count
      };

      if (entry._scores.length) {
        normalized.score = round(
          entry._scores.reduce((sum, value) => sum + value, 0) / entry._scores.length,
          4
        );
      }

      return normalized;
    })
    .sort((a, b) => a.label_index - b.label_index || a.class_name.localeCompare(b.class_name));
}

function buildSceneJson(image, annotations, categoriesById, { includeScores = false } = {}) {
  const width = Number(image?.width) || 0;
  const height = Number(image?.height) || 0;
  const sceneId = sceneIdFromFileName(image?.file_name || String(image?.id || ""));

  const instances = (annotations || [])
    .map((annotation, index) => {
      const className = categoriesById.get(Number(annotation.category_id)) || String(annotation.category_id);
      const labelIndex = Math.max(0, Number(annotation.category_id) - 1);
      const bbox = Array.isArray(annotation.bbox) && annotation.bbox.length === 4
        ? annotation.bbox.map((value) => round(value, 2))
        : [0, 0, 0, 0];
      const [x, y, boxWidth, boxHeight] = bbox;
      const anchorX = x + (boxWidth / 2);
      const anchorY = y + (boxHeight / 2);
      const score = includeScores ? Number(annotation.score) : null;
      const normalizedSegmentation = normalizeSegmentation(annotation.segmentation);

      return {
        id: `${labelIndex}:${className}:${index}`,
        label_index: labelIndex,
        class_name: className,
        bbox,
        area: Math.round(Number(annotation.area) || 0),
        iscrowd: Number(annotation.iscrowd) || 0,
        anchor: [round(anchorX, 2), round(anchorY, 2)],
        anchor_normalized: width > 0 && height > 0
          ? [round(anchorX / width, 6), round(anchorY / height, 6)]
          : null,
        ...(Number.isFinite(score) ? { score: round(score, 4) } : {}),
        ...normalizedSegmentation
      };
    })
    .sort((a, b) => (b.area || 0) - (a.area || 0));

  return {
    image_id: sceneId,
    file_name: image?.file_name || `${sceneId}.jpg`,
    width,
    height,
    segments: summarizeInstances(instances),
    instances
  };
}

function groupBySceneId(entries, imageById) {
  const grouped = new Map();
  for (const entry of entries || []) {
    const image = imageById.get(Number(entry.image_id));
    if (!image) continue;
    const sceneId = sceneIdFromFileName(image.file_name);
    if (!grouped.has(sceneId)) grouped.set(sceneId, []);
    grouped.get(sceneId).push(entry);
  }
  return grouped;
}

function existingSceneIds(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath)
    .filter((name) => name.endsWith(".json"))
    .map((name) => path.basename(name, ".json"))
    .sort();
}

function findExportRoot(extractRoot) {
  const direct = path.join(extractRoot, "export_jsons");
  if (fs.existsSync(direct)) return direct;

  const nested = fs.readdirSync(extractRoot)
    .map((name) => path.join(extractRoot, name, "export_jsons"))
    .find((candidate) => fs.existsSync(candidate));

  if (nested) return nested;
  throw new Error(`Could not find export_jsons directory under ${extractRoot}`);
}

function main() {
  const archivePath = process.argv[2] ? path.resolve(process.argv[2]) : latestArchive();
  const extractRoot = fs.mkdtempSync(path.join(os.tmpdir(), "segmentation-coco-exports-"));
  execFileSync("unzip", ["-oq", archivePath, "-d", extractRoot], { stdio: "inherit" });
  const exportRoot = findExportRoot(extractRoot);

  try {
    for (const spec of DATASET_SPECS) {
      const gtPath = path.join(exportRoot, `${spec.exportPrefix}_${MODEL_IDS[0]}_gt.json`);
      const gtData = readJson(gtPath);
      const imageById = new Map((gtData.images || []).map((image) => [Number(image.id), image]));
      const categoriesById = new Map((gtData.categories || []).map((category) => [Number(category.id), String(category.name)]));
      const gtBySceneId = groupBySceneId(gtData.annotations || [], imageById);

      for (const modelId of MODEL_IDS) {
        const predPath = path.join(exportRoot, `${spec.exportPrefix}_${modelId}_predictions.json`);
        const predictionData = readJson(predPath);
        const predictionsBySceneId = groupBySceneId(predictionData, imageById);
        const gtDir = path.join(repoRoot, spec.datasetName, modelId, "samples_gt_with_json");
        const predDir = path.join(repoRoot, spec.datasetName, modelId, "visualised_samples_with_json");

        for (const sceneId of existingSceneIds(gtDir)) {
          const image = [...imageById.values()].find((entry) => sceneIdFromFileName(entry.file_name) === sceneId);
          if (!image) continue;
          writeJson(
            path.join(gtDir, `${sceneId}.json`),
            buildSceneJson(image, gtBySceneId.get(sceneId) || [], categoriesById)
          );
        }

        for (const sceneId of existingSceneIds(predDir)) {
          const image = [...imageById.values()].find((entry) => sceneIdFromFileName(entry.file_name) === sceneId);
          if (!image) continue;
          writeJson(
            path.join(predDir, `${sceneId}.json`),
            buildSceneJson(image, predictionsBySceneId.get(sceneId) || [], categoriesById, { includeScores: true })
          );
        }
      }
    }
  } finally {
    fs.rmSync(extractRoot, { recursive: true, force: true });
  }
}

main();
