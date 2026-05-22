(() => {
  if (typeof computeSegmentationInteriorAnchor !== "function") return;

  const exactScanLimit = 12000;
  const defaultSampleLimit = 640;
  const rleSampleLimit = 64;
  const originalCreateSegmentationLayer = typeof createSegmentationLayer === "function"
    ? createSegmentationLayer
    : null;
  const floodNetMaskCanvases = new Map();
  const floodNetClassColors = {
    background: "#000000",
    "building-flooded": "#00FFD1",
    "building-non-flooded": "#FF1744",
    grass: "#39FF14",
    pool: "#4B0082",
    "road-flooded": "#8A00FF",
    "road-non-flooded": "#FFB300",
    tree: "#006400",
    vehicle: "#FF00D4",
    water: "#0047FF"
  };

  const clampValue = (value, min, max) => Math.min(max, Math.max(min, value));

  const safePointInsideSegmentationInstance = (entry, sceneX, sceneY, scene) => {
    try {
      return pointInsideSegmentationInstance(entry, sceneX, sceneY, scene);
    } catch {
      return false;
    }
  };

  // Avoid full-pixel scans for large FloodNet/RescueNet masks; those can freeze the UI.
  computeSegmentationInteriorAnchor = function boundedSegmentationInteriorAnchor(entry, scene) {
    if (!entry || !scene || !Array.isArray(entry.bbox) || entry.bbox.length !== 4) return null;

    const [rawX, rawY, rawWidth, rawHeight] = entry.bbox.map((value) => Number(value));
    if (![rawX, rawY, rawWidth, rawHeight, scene.width, scene.height].every(Number.isFinite)) return null;
    if (rawWidth <= 0 || rawHeight <= 0 || scene.width <= 0 || scene.height <= 0) return null;

    const minX = clampValue(Math.floor(rawX), 0, Math.max(0, scene.width - 1));
    const minY = clampValue(Math.floor(rawY), 0, Math.max(0, scene.height - 1));
    const maxX = clampValue(Math.ceil(rawX + rawWidth), minX + 1, scene.width);
    const maxY = clampValue(Math.ceil(rawY + rawHeight), minY + 1, scene.height);
    const width = Math.max(1, maxX - minX);
    const height = Math.max(1, maxY - minY);
    const pixelArea = width * height;
    const isRleMask = entry.type === "rle" && entry.segmentation?.counts;

    const preferredCandidates = [
      [rawX + (rawWidth / 2), rawY + (rawHeight / 2)],
      [entry.xNormalized * scene.width, entry.yNormalized * scene.height]
    ].filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y));

    for (const [candidateX, candidateY] of preferredCandidates) {
      if (safePointInsideSegmentationInstance(entry, candidateX, candidateY, scene)) {
        return {
          xNormalized: clampValue(candidateX / scene.width, 0.005, 0.995),
          yNormalized: clampValue(candidateY / scene.height, 0.005, 0.995)
        };
      }
    }

    const filled = [];
    let sumX = 0;
    let sumY = 0;
    const sampleLimit = isRleMask ? rleSampleLimit : defaultSampleLimit;
    const useExactScan = pixelArea <= exactScanLimit;
    const stepX = useExactScan ? 1 : Math.max(1, width / Math.ceil(Math.sqrt(sampleLimit * (width / height))));
    const stepY = useExactScan ? 1 : Math.max(1, height / Math.ceil(Math.sqrt(sampleLimit * (height / width))));

    for (let y = minY; y < maxY; y += stepY) {
      for (let x = minX; x < maxX; x += stepX) {
        const sampleX = Math.min(maxX - 0.5, x + (stepX / 2));
        const sampleY = Math.min(maxY - 0.5, y + (stepY / 2));
        if (!safePointInsideSegmentationInstance(entry, sampleX, sampleY, scene)) continue;
        filled.push({ x: sampleX, y: sampleY });
        sumX += sampleX;
        sumY += sampleY;
      }
    }

    if (!filled.length) return null;

    const centroidX = sumX / filled.length;
    const centroidY = sumY / filled.length;
    let best = filled[0];
    let bestDistance = Number.POSITIVE_INFINITY;

    filled.forEach((point) => {
      const distance = ((point.x - centroidX) ** 2) + ((point.y - centroidY) ** 2);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = point;
      }
    });

    return {
      xNormalized: clampValue(best.x / scene.width, 0.005, 0.995),
      yNormalized: clampValue(best.y / scene.height, 0.005, 0.995)
    };
  };

  const normalizeClassKey = (value = "") => String(value)
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");

  const hexToRgb = (hex) => {
    const normalized = String(hex || "").replace("#", "");
    if (!/^[0-9a-f]{6}$/i.test(normalized)) return [255, 255, 255];
    return [
      Number.parseInt(normalized.slice(0, 2), 16),
      Number.parseInt(normalized.slice(2, 4), 16),
      Number.parseInt(normalized.slice(4, 6), 16)
    ];
  };

  const floodNetJsonPath = (imagePath) => String(imagePath || "").replace(/\.(jpg|jpeg|png)$/i, ".json");

  const isFloodNetVisualizedMask = (scene, imagePath) => (
    scene?.dataset === "FloodNetPlus"
    && /^FloodNetPlus\/[^/]+\/(samples_gt_with_json|visualised_samples_with_json)\//.test(String(imagePath || ""))
  );

  function drawPolygonMask(ctx, points, scaleX, scaleY) {
    if (!Array.isArray(points) || points.length < 3) return;
    ctx.beginPath();
    points.forEach((point, index) => {
      const x = Number(point?.[0]) * scaleX;
      const y = Number(point?.[1]) * scaleY;
      if (!Number.isFinite(x) || !Number.isFinite(y)) return;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();
  }

  function drawRleMask(ctx, segmentation, sourceWidth, sourceHeight, scaleX, scaleY) {
    if (!segmentation?.counts || !sourceWidth || !sourceHeight) return;
    const counts = segmentation._decodedCounts || (segmentation._decodedCounts = decodeCompressedRle(segmentation.counts));
    let cursor = 0;
    let on = false;

    counts.forEach((runLength) => {
      const nextCursor = cursor + runLength;
      if (on && runLength > 0) {
        let position = cursor;
        while (position < nextCursor) {
          const column = Math.floor(position / sourceHeight);
          const row = position % sourceHeight;
          const columnEnd = Math.min(nextCursor, ((column + 1) * sourceHeight));
          const runHeight = columnEnd - position;
          ctx.fillRect(
            Math.floor(column * scaleX),
            Math.floor(row * scaleY),
            Math.max(1, Math.ceil(scaleX)),
            Math.max(1, Math.ceil(runHeight * scaleY))
          );
          position = columnEnd;
        }
      }
      cursor = nextCursor;
      on = !on;
    });
  }

  async function createFloodNetMaskCanvas(scene, imagePath, kind) {
    const jsonPath = floodNetJsonPath(imagePath);
    const cacheKey = `${scene.id}:${kind}:${jsonPath}`;
    if (floodNetMaskCanvases.has(cacheKey)) return floodNetMaskCanvases.get(cacheKey);

    const renderPromise = fetchJsonWithFallback(jsonPath).then((annotation) => {
      const sourceWidth = Number(annotation.width || scene.width);
      const sourceHeight = Number(annotation.height || scene.height);
      if (!Number.isFinite(sourceWidth) || !Number.isFinite(sourceHeight) || sourceWidth <= 0 || sourceHeight <= 0) {
        throw new Error(`Invalid FloodNet annotation size for ${jsonPath}`);
      }

      const canvas = document.createElement("canvas");
      canvas.width = Math.min(2200, sourceWidth);
      canvas.height = Math.round(canvas.width * (sourceHeight / sourceWidth));
      canvas.className = "segmentation-visual is-ready";
      canvas.style.position = "absolute";
      canvas.style.inset = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.borderRadius = "inherit";
      canvas.style.pointerEvents = "none";

      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not create FloodNet mask canvas");

      const scaleX = canvas.width / sourceWidth;
      const scaleY = canvas.height / sourceHeight;
      const entries = Array.isArray(annotation.instances) ? annotation.instances : [];

      ctx.globalAlpha = kind === "ground-truth" ? 0.62 : 0.68;
      entries
        .filter((entry) => normalizeClassKey(entry.class_name) !== "background")
        .sort((a, b) => (Number(b.area) || 0) - (Number(a.area) || 0))
        .forEach((entry) => {
          const [red, green, blue] = hexToRgb(floodNetClassColors[normalizeClassKey(entry.class_name)]);
          ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;

          if (entry.type === "rle" && entry.segmentation?.counts) {
            drawRleMask(ctx, entry.segmentation, sourceWidth, sourceHeight, scaleX, scaleY);
            return;
          }

          if (Array.isArray(entry.polygons)) {
            entry.polygons.forEach((polygon) => drawPolygonMask(ctx, polygon, scaleX, scaleY));
          } else if (Array.isArray(entry.polygon)) {
            drawPolygonMask(ctx, entry.polygon, scaleX, scaleY);
          }
        });

      ctx.globalAlpha = 1;
      return canvas;
    }).catch((error) => {
      floodNetMaskCanvases.delete(cacheKey);
      throw error;
    });

    floodNetMaskCanvases.set(cacheKey, renderPromise);
    return renderPromise;
  }

  function cloneMaskCanvas(source) {
    const canvas = document.createElement("canvas");
    canvas.width = source.width;
    canvas.height = source.height;
    canvas.className = source.className;
    canvas.style.cssText = source.style.cssText;
    canvas.getContext("2d")?.drawImage(source, 0, 0);
    return canvas;
  }

  if (originalCreateSegmentationLayer) {
    createSegmentationLayer = function stableSegmentationLayer(scene, imagePath, options = {}) {
      const layer = originalCreateSegmentationLayer(scene, imagePath, options);
      if (!isFloodNetVisualizedMask(scene, imagePath)) return layer;

      const originalImage = layer.querySelector(".segmentation-visual");
      if (!originalImage) return layer;

      originalImage.style.visibility = "hidden";
      layer.dataset.waitForImage = "true";
      layer.style.opacity = "0";

      createFloodNetMaskCanvas(scene, imagePath, options.kind || "prediction")
        .then((canvas) => {
          originalImage.replaceWith(cloneMaskCanvas(canvas));
          layer.dataset.waitForImage = "false";
          window.requestAnimationFrame(() => {
            layer.style.opacity = layer.dataset.pendingOpacity || layer.dataset.targetOpacity || String(options.opacity ?? 1);
            delete layer.dataset.pendingOpacity;
            if (typeof queueFocusLensRefresh === "function") queueFocusLensRefresh();
          });
        })
        .catch(() => {
          originalImage.style.visibility = "";
          layer.dataset.waitForImage = "false";
          layer.style.opacity = layer.dataset.pendingOpacity || layer.dataset.targetOpacity || String(options.opacity ?? 1);
          delete layer.dataset.pendingOpacity;
        });

      return layer;
    };
  }
})();
