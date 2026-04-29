#!/bin/zsh

set -euo pipefail
setopt local_options no_nomatch

ROOT="/Users/peter/Scripts/Triffid/aerial-segmentation-demo"
OUT_ROOT="/tmp/aerial-atlas-release-assets-v2"
CORE_DIR="$OUT_ROOT/core"
SEG_GT_DIR="$OUT_ROOT/seg-gt"
SEG_PRED_DIR="$OUT_ROOT/seg-pred"

rm -rf "$OUT_ROOT"
mkdir -p "$CORE_DIR" "$SEG_GT_DIR" "$SEG_PRED_DIR"

for datasetDir in "$ROOT"/viewer/*; do
  [[ -d "$datasetDir" ]] || continue
  dataset=${datasetDir:t}
  for file in "$datasetDir"/*; do
    [[ -f "$file" ]] || continue
    cp "$file" "$CORE_DIR/viewer-$dataset-${file:t}"
  done
done

for datasetDir in "$ROOT"/thumbnails/*; do
  [[ -d "$datasetDir" ]] || continue
  dataset=${datasetDir:t}
  for file in "$datasetDir"/*; do
    [[ -f "$file" ]] || continue
    cp "$file" "$CORE_DIR/thumbnail-$dataset-${file:t}"
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
      cp "$file" "$SEG_GT_DIR/segment-gt-$dataset-$model-${file:t}"
    done

    for file in "$modelDir"/visualised_samples_with_json/*.jpg; do
      [[ -f "$file" ]] || continue
      cp "$file" "$SEG_PRED_DIR/segment-pred-$dataset-$model-${file:t}"
    done
  done
done

printf "core=%s\n" "$(find "$CORE_DIR" -type f | wc -l | tr -d ' ')"
printf "seg-gt=%s\n" "$(find "$SEG_GT_DIR" -type f | wc -l | tr -d ' ')"
printf "seg-pred=%s\n" "$(find "$SEG_PRED_DIR" -type f | wc -l | tr -d ' ')"
