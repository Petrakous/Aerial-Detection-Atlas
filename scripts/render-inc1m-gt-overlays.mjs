import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const demoRoot = path.resolve(__dirname, "..");

const datasetRoot = path.join(demoRoot, "Inc1M");
const rawDir = path.join(datasetRoot, "shared_ground_truth_images");
const gtDir = path.join(datasetRoot, "shared_samples_gt_with_json");
const sourceGtJson = path.join(demoRoot, "Datasets", "annotations_gt.json");
const gtBackupDir = path.join(datasetRoot, "shared_samples_gt_with_json_source_export");

const overlayAlpha = 0.42;
const INC1M_CLASS_COLORS = {
  "aerial vehicle": "#F08080",
  "army vehicle": "#F08080",
  bag: "#FFE4B6",
  barrier: "#8B008B",
  bicycle: "#FFA503",
  boat: "#1FB3AB",
  boot: "#FF8C03",
  building: "#BDB76B",
  "burnt grass": "#8B0000",
  "burnt plant": "#A52B2A",
  "burnt tree": "#800000",
  chainsaw: "#FF6AB4",
  citizen: "#9371DC",
  "civilian vehicle": "#DAA521",
  cone: "#7DFC01",
  debris: "#DA70D6",
  "destroyed building": "#CD5C5D",
  "destroyed vehicle": "#E9967A",
  "dirt road": "#DEB988",
  door: "#B0C5DE",
  "dry grass": "#D2B48C",
  "dry plant": "#808000",
  "dry tree": "#A0522D",
  excavator: "#BB55D3",
  extinguisher: "#8B0000",
  fence: "#696969",
  "fire hose": "#708191",
  "fire truck": "#ADD8E6",
  "first responder": "#FF6447",
  flame: "#D3691E",
  furniture: "#F0F0D9",
  glove: "#6B5ACD",
  "green grass": "#9ACD33",
  "green plant": "#02FF7F",
  "green tree": "#238B23",
  helmet: "#008080",
  "hole in the ground": "#40E0D0",
  ladder: "#3BB371",
  mask: "#4682B4",
  "military personnel": "#02FFFF",
  mud: "#CD853F",
  pavement: "#808080",
  pole: "#6B8E24",
  "police vehicle": "#2090FF",
  "protective glasses": "#EE83EE",
  road: "#FF1393",
  scba: "#038B8B",
  shovel: "#DDA1DE",
  smoke: "#B22322",
  stairs: "#F5A560",
  tank: "#5F9FA0",
  tower: "#483E8C",
  wall: "#FA8172",
  water: "#87CEFA",
  window: "#4169E2"
};
const fallbackPalette = [
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

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function hashColor(name) {
  const explicit = INC1M_CLASS_COLORS[String(name || "").trim().toLowerCase()];
  if (explicit) {
    return [
      Number.parseInt(explicit.slice(1, 3), 16),
      Number.parseInt(explicit.slice(3, 5), 16),
      Number.parseInt(explicit.slice(5, 7), 16)
    ];
  }

  let hash = 0;
  for (const char of String(name || "").toLowerCase()) {
    hash = ((hash * 31) + char.charCodeAt(0)) >>> 0;
  }
  return fallbackPalette[hash % fallbackPalette.length];
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

function renderOverlay({ imagePath, width, height, annotations, categories, outputPath }) {
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

  for (const annotation of annotations) {
    const category = categories.get(Number(annotation.category_id));
    if (!category) continue;

    const [red, green, blue] = hashColor(category.name);
    const counts = decodeCompressedRle(annotation.segmentation?.counts || "");
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
  if (!exists(sourceGtJson)) {
    throw new Error("Missing extracted Inc1M GT annotations. Run the import script first.");
  }

  const gt = readJson(sourceGtJson);
  const categories = new Map((gt.categories || []).map((category) => [Number(category.id), category]));
  const images = new Map((gt.images || []).map((image) => [Number(image.id), image]));
  const byImageId = new Map();

  for (const annotation of gt.annotations || []) {
    const imageId = Number(annotation.image_id);
    if (!byImageId.has(imageId)) byImageId.set(imageId, []);
    byImageId.get(imageId).push(annotation);
  }

  if (!exists(gtBackupDir)) {
    fs.cpSync(gtDir, gtBackupDir, { recursive: true });
  }

  for (const [imageId, annotations] of byImageId.entries()) {
    const image = images.get(imageId);
    if (!image) continue;

    renderOverlay({
      imagePath: path.join(rawDir, image.file_name),
      width: Number(image.width),
      height: Number(image.height),
      annotations,
      categories,
      outputPath: path.join(gtDir, image.file_name)
    });
  }

  console.log(`Rendered ${byImageId.size} Inc1M ground-truth overlays`);
}

main();
