#!/bin/zsh

set -euo pipefail
setopt local_options no_nomatch

ROOT="/Users/peter/Scripts/Triffid/aerial-segmentation-demo"
DATASET_ROOT="$ROOT/FloodNetPlus"
VIEWER_DIR="$ROOT/viewer/FloodNetPlus"
THUMB_DIR="$ROOT/thumbnails/FloodNetPlus"

mkdir -p "$VIEWER_DIR" "$THUMB_DIR"

typeset -A seen
count=0

for src in $(find "$DATASET_ROOT" -path '*/ground_truth_images/*.jpg' | sort); do
  base=${src:t}
  if [[ -n ${seen[$base]-} ]]; then
    continue
  fi
  seen[$base]=1

  ffmpeg -y -loglevel error -i "$src" -vf "scale='min(2200,iw)':-2" "$VIEWER_DIR/$base" >/dev/null 2>&1
  ffmpeg -y -loglevel error -i "$src" -vf "scale=360:-2" "$THUMB_DIR/$base" >/dev/null 2>&1
  count=$((count + 1))
done

echo "$count"
