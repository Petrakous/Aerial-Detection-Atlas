#!/bin/zsh

set -euo pipefail
setopt local_options no_nomatch

ROOT="/Users/peter/Scripts/Triffid/aerial-segmentation-demo"
OUT_DIR="/tmp/aerial-atlas-release-assets-v4"

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

for datasetDir in "$ROOT"/viewer/*; do
  [[ -d "$datasetDir" ]] || continue
  dataset=${datasetDir:t}
  for file in "$datasetDir"/*; do
    [[ -f "$file" ]] || continue
    cp "$file" "$OUT_DIR/viewer-$dataset-${file:t}"
  done
done

for datasetDir in "$ROOT"/thumbnails/*; do
  [[ -d "$datasetDir" ]] || continue
  dataset=${datasetDir:t}
  for file in "$datasetDir"/*; do
    [[ -f "$file" ]] || continue
    cp "$file" "$OUT_DIR/thumbnail-$dataset-${file:t}"
  done
done

for datasetRoot in "$ROOT"/FloodNetPlus "$ROOT"/RescueNet; do
  [[ -d "$datasetRoot" ]] || continue
  dataset=${datasetRoot:t}
  for modelDir in "$datasetRoot"/*; do
    [[ -d "$modelDir" ]] || continue
    model=${modelDir:t}

    for file in "$modelDir"/samples_gt_with_json/*.jpg; do
      [[ -f "$file" ]] || continue
      cp "$file" "$OUT_DIR/segment-gt-$dataset-$model-${file:t}"
    done

    for file in "$modelDir"/visualised_samples_with_json/*.jpg; do
      [[ -f "$file" ]] || continue
      cp "$file" "$OUT_DIR/segment-pred-$dataset-$model-${file:t}"
    done
  done
done

find "$OUT_DIR" -type f | wc -l | tr -d ' \n'
