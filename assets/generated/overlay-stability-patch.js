(() => {
  if (typeof computeSegmentationInteriorAnchor !== "function") return;

  const exactScanLimit = 12000;
  const defaultSampleLimit = 640;
  const rleSampleLimit = 64;

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
})();
