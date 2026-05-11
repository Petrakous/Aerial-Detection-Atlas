#!/bin/zsh

set -euo pipefail
setopt local_options no_nomatch

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <DatasetName> [viewerMaxWidth] [thumbWidth]" >&2
  exit 1
fi

ROOT="/Users/peter/Scripts/Triffid/aerial-segmentation-demo"
DATASET="$1"
VIEWER_MAX_WIDTH="${2:-2200}"
THUMB_WIDTH="${3:-800}"
THUMB_JPEG_QUALITY="${THUMB_JPEG_QUALITY:-6}"
DATASET_ROOT="$ROOT/$DATASET"
VIEWER_DIR="$ROOT/viewer/$DATASET"
THUMB_DIR="$ROOT/thumbnails/$DATASET"

mkdir -p "$VIEWER_DIR" "$THUMB_DIR"

typeset -A seen
count=0

collect_and_render() {
  local pattern="$1"
  local src base ext
  for src in $(find "$DATASET_ROOT" -path "$pattern" | sort); do
    [[ -f "$src" ]] || continue
    base=${src:t}
    ext=${base:e:l}
    [[ "$ext" == "jpg" || "$ext" == "jpeg" || "$ext" == "png" ]] || continue
    if [[ -n ${seen[$base]-} ]]; then
      continue
    fi
    seen[$base]=1

    ffmpeg -y -loglevel error -i "$src" -vf "scale='min($VIEWER_MAX_WIDTH,iw)':-2" "$VIEWER_DIR/$base" >/dev/null 2>&1
    ffmpeg -y -loglevel error -i "$src" -vf "scale='min($THUMB_WIDTH,iw)':-2" -q:v "$THUMB_JPEG_QUALITY" "$THUMB_DIR/$base" >/dev/null 2>&1
    count=$((count + 1))
  done
}

# Prefer raw/original images when multiple folders contain the same basename.
collect_and_render '*/ORIGINAL_IMAGES/*.*'
collect_and_render '*/ground_truth_images/*.*'
collect_and_render '*/GROUND-TRUTH/*.*'

echo "$count"
