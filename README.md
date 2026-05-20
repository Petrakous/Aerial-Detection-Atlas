# Aerial Detection Atlas

Static GitHub Pages viewer for aerial object-detection benchmarks. It reads dataset folders like `LADD/` and turns their JSON annotations into an interactive comparison UI with:

- raw aerial image background when available
- ground-truth boxes
- per-model prediction boxes
- overlay, split, and focus modes
- dark mode

## Run locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

The checked-in site code is intentionally light. Runtime images, thumbnails, and dataset artifacts are expected to come from GitHub Releases, with the demo falling back to local files only when they exist.

## Current dataset layout

The generator expects dataset folders like this:

```text
DATASET_NAME/
  rtdetrv2_l/
    ground_truth_images/
    samples_gt_with_json/
    visualised_samples_with_json/
  yolo11l/
    ground_truth_images/
    samples_gt_with_json/
    visualised_samples_with_json/
```

Notes:

- `samples_gt_with_json/*.json` is used for ground-truth boxes.
- `visualised_samples_with_json/*.json` is used for model detections.
- `ground_truth_images/*.jpg` is used as the raw aerial image when present.
- If a raw image is missing, the generator falls back to the GT preview JPG from `samples_gt_with_json/`.

## Rebuild data after adding a dataset

When you add more dataset folders with the same structure, run:

```bash
node scripts/generate-demo-data.mjs
```

That regenerates:

```text
data/sample-data.js
```

The app will automatically pick up all dataset folders it finds at the top level of this demo directory.

If you are only serving the finished demo, you do not need to keep those dataset folders in git. They are only needed when rebuilding `data/sample-data.js` or publishing fresh release assets.

## Publish on GitHub Pages

This is a static site with no build step. Commit the folder to a repo and publish from the repo root or from `docs/`.
