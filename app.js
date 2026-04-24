const data = window.DETECTION_ATLAS_DATA || window.TRIFFID_DEMO_DATA || window.TRIFID_DEMO_DATA;

const availableModelIds = new Set(data.models.map((model) => model.id));

const state = {
  sceneIndex: 0,
  mode: "overlay",
  theme: "light",
  selected: new Set(),
  hoveredModel: null,
  showGroundTruth: false,
  overlayOpacity: 0.5,
  split: 50,
  splitA: data.models[0]?.id || "",
  splitB: "all-other-models",
  zoom: 1,
  panX: 0,
  panY: 0,
  dragging: false,
  splitDragging: false,
  dragStart: { x: 0, y: 0, panX: 0, panY: 0 },
  activeDetection: null
};

const els = {
  sceneTitle: document.querySelector("#sceneTitle"),
  sceneMeta: document.querySelector("#sceneMeta"),
  sceneCount: document.querySelector("#sceneCount"),
  sceneList: document.querySelector("#sceneList"),
  modelList: document.querySelector("#modelList"),
  viewerFrame: document.querySelector("#viewerFrame"),
  viewerContent: document.querySelector("#viewerContent"),
  overlayStack: document.querySelector("#overlayStack"),
  splitLeft: document.querySelector("#splitLeft"),
  splitRight: document.querySelector("#splitRight"),
  splitDivider: document.querySelector("#splitDivider"),
  splitLeftBadge: document.querySelector("#splitLeftBadge"),
  splitRightBadge: document.querySelector("#splitRightBadge"),
  focusLens: document.querySelector("#focusLens"),
  focusLensContent: document.querySelector("#focusLensContent"),
  themeToggle: document.querySelector("#themeToggle"),
  modeButtons: [...document.querySelectorAll(".mode-button")],
  splitSelectors: document.querySelector("#splitSelectors"),
  splitA: document.querySelector("#splitA"),
  splitB: document.querySelector("#splitB"),
  opacityRange: document.querySelector("#opacityRange"),
  toggleGroundTruth: document.querySelector("#toggleGroundTruth"),
  groundTruthText: document.querySelector("#groundTruthText"),
  hoverHint: document.querySelector("#hoverHint"),
  taskLabel: document.querySelector("#taskLabel"),
  classLegend: document.querySelector("#classLegend"),
  actionsRow: document.querySelector(".actions-row"),
  selectAll: document.querySelector("#selectAll"),
  clearAll: document.querySelector("#clearAll"),
  activeModelLabel: document.querySelector("#activeModelLabel"),
  activeModelCount: document.querySelector("#activeModelCount"),
  bestIouLabel: document.querySelector("#bestIouLabel"),
  bestIou: document.querySelector("#bestIou"),
  predictionCountLabel: document.querySelector("#predictionCountLabel"),
  predictionCount: document.querySelector("#predictionCount"),
  zoomReadout: document.querySelector("#zoomReadout"),
  detectionModal: document.querySelector("#detectionModal"),
  detectionModalBackdrop: document.querySelector("#detectionModalBackdrop"),
  detectionModalClose: document.querySelector("#detectionModalClose"),
  detectionModalTitle: document.querySelector("#detectionModalTitle"),
  detectionModalMeta: document.querySelector("#detectionModalMeta"),
  detectionOverlayTitle: document.querySelector("#detectionOverlayTitle"),
  detectionCropPlain: document.querySelector("#detectionCropPlain"),
  detectionCropOverlay: document.querySelector("#detectionCropOverlay")
};

const themeStorageKey = "detection-atlas-theme";
const groundTruthColor = "#ff5d5d";
const viewerFadeMs = 180;
let lastViewerSignature = "";
let scenesInitialized = false;
let viewerRefreshTimer = 0;

function resolveInitialTheme() {
  const stored = window.localStorage.getItem(themeStorageKey);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  els.themeToggle.classList.toggle("is-dark", theme === "dark");
  els.themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  els.themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  els.themeToggle.title = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
}

function currentScene() {
  return data.scenes[state.sceneIndex];
}

function sceneBaseImage(scene) {
  return scene.baseImage || scene.sourceImage || scene.thumbnailImage;
}

function readyModels(scene = currentScene()) {
  return data.models.filter((model) => Array.isArray(scene.predictions?.[model.id]));
}

function visibleSelectedModels(scene = currentScene()) {
  const sceneModelIds = new Set(readyModels(scene).map((model) => model.id));
  return data.models.filter((model) => sceneModelIds.has(model.id) && state.selected.has(model.id));
}

function displayedModels(scene = currentScene()) {
  const selectedModels = visibleSelectedModels(scene);
  if (selectedModels.length) return selectedModels;
  if (state.hoveredModel) {
    return readyModels(scene).filter((model) => model.id === state.hoveredModel);
  }
  return [];
}

function modelStatsForScene(scene, modelId) {
  return scene.sceneModelStats?.[modelId] || {
    count: scene.predictions?.[modelId]?.length || 0,
    maxConfidence: null,
    avgConfidence: null
  };
}

function totalPredictionCount(models, scene = currentScene()) {
  return models.reduce((sum, model) => sum + modelStatsForScene(scene, model.id).count, 0);
}

function splitOptions(scene = currentScene()) {
  const sceneModels = readyModels(scene);
  return {
    groupOptions: [
      { value: "all-other-models", label: "All other models" },
      { value: "all-models", label: "All models" }
    ],
    modelOptions: sceneModels.map((model) => ({
      value: model.id,
      label: model.shortName
    }))
  };
}

function splitOptionLabel(value) {
  const { groupOptions, modelOptions } = splitOptions();
  return [...groupOptions, ...modelOptions].find((option) => option.value === value)?.label || value;
}

function modelsForSplitChoice(value, opposingValue, scene = currentScene()) {
  const sceneModels = readyModels(scene);
  if (value === "all-models") return sceneModels;
  if (value === "all-other-models") {
    const excluded = sceneModels.find((model) => model.id === opposingValue);
    const filtered = excluded ? sceneModels.filter((model) => model.id !== excluded.id) : sceneModels;
    return filtered.length ? filtered : sceneModels;
  }
  return sceneModels.filter((model) => model.id === value);
}

function splitSideForModel(modelId, scene = currentScene()) {
  const left = modelsForSplitChoice(state.splitA, state.splitB, scene).some((model) => model.id === modelId);
  const right = modelsForSplitChoice(state.splitB, state.splitA, scene).some((model) => model.id === modelId);
  if (left && right) return "both sides";
  if (left) return "left side";
  if (right) return "right side";
  return "not in split";
}

function ensureSceneState() {
  const scene = currentScene();
  const sceneModelIds = new Set(readyModels(scene).map((model) => model.id));

  state.selected = new Set([...state.selected].filter((modelId) => sceneModelIds.has(modelId) || !availableModelIds.has(modelId)));

  if (!sceneModelIds.has(state.splitA)) {
    state.splitA = readyModels(scene)[0]?.id || "";
  }

  if (state.splitB !== "all-other-models" && state.splitB !== "all-models" && !sceneModelIds.has(state.splitB)) {
    state.splitB = "all-other-models";
  }

  if (!state.splitA && readyModels(scene)[0]) state.splitA = readyModels(scene)[0].id;
}

function normalizeHoveredModel(scene = currentScene()) {
  const sceneModelIds = new Set(readyModels(scene).map((model) => model.id));
  if (!state.hoveredModel) return;
  if (!sceneModelIds.has(state.hoveredModel) || !state.selected.has(state.hoveredModel) || state.mode === "split") {
    state.hoveredModel = null;
  }
}

function withAlpha(hex, alpha) {
  const normalized = hex.replace("#", "");
  const short = normalized.length === 3
    ? normalized.split("").map((part) => part + part).join("")
    : normalized;
  const channels = short.match(/.{1,2}/g)?.map((part) => parseInt(part, 16)) || [255, 255, 255];
  return `rgba(${channels[0]}, ${channels[1]}, ${channels[2]}, ${alpha})`;
}

function modelStyleIndex(modelId) {
  return Math.max(0, data.models.findIndex((model) => model.id === modelId)) % 4;
}

function compactModelLabel(name = "") {
  if (name.startsWith("RT-DETR")) return "RT-DETR";
  return name.replace(/\s+/g, " ");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function estimateLabelRect(scene, box, modelLabel, detailLabel, kind) {
  const charWidth = 6.6;
  const longest = Math.max(modelLabel.length, detailLabel.length, 10);
  const widthPx = kind === "ground-truth" ? Math.max(84, detailLabel.length * 7.2) : Math.max(110, longest * charWidth + 18);
  const heightPx = kind === "ground-truth" ? 28 : 38;
  return {
    width: (widthPx / scene.width) * 100,
    height: (heightPx / scene.height) * 100,
    boxLeft: (box.bbox[0] / scene.width) * 100,
    boxTop: (box.bbox[1] / scene.height) * 100,
    boxWidth: (box.bbox[2] / scene.width) * 100,
    boxHeight: (box.bbox[3] / scene.height) * 100
  };
}

function chooseLabelPosition(scene, box, kind, modelLabel, detailLabel, occupiedLabels) {
  const rect = estimateLabelRect(scene, box, modelLabel, detailLabel, kind);
  const marginY = 0.45;
  const stackIndex = occupiedLabels.length;
  const verticalStep = rect.height + 0.25;
  const selected = {
    left: clamp(rect.boxLeft, 0, 100 - rect.width),
    top: clamp(rect.boxTop - rect.height - marginY + (stackIndex * verticalStep), 0, 100 - rect.height),
    width: rect.width,
    height: rect.height
  };
  occupiedLabels.push(selected);
  return selected;
}

function createImageLayer(src, className) {
  const img = document.createElement("img");
  img.className = className;
  img.src = src;
  img.alt = "";
  img.draggable = false;
  img.decoding = "async";
  img.loading = "eager";
  img.fetchPriority = "high";
  return img;
}

function createBaseImageLayer(scene) {
  const primary = sceneBaseImage(scene);
  const fallback = scene.sourceImage || scene.thumbnailImage || scene.baseImage;
  const img = createImageLayer(primary, "base-layer");
  if (fallback && fallback !== primary) {
    img.addEventListener("error", () => {
      if (img.dataset.fallbackApplied === "true") return;
      img.dataset.fallbackApplied = "true";
      img.src = fallback;
    }, { once: true });
  }
  return img;
}

function detectionTitle(detection) {
  return detection.kind === "ground-truth"
    ? "Ground truth"
    : `${detection.model?.name || "Prediction"}`;
}

function detectionMeta(detection) {
  const confidence = typeof detection.box.confidence === "number"
    ? `${Math.round(detection.box.confidence * 100)}% Confidence`
    : "No Confidence Score";
  return detection.kind === "ground-truth"
    ? "Reference Annotation"
    : `${detection.box.className} / ${confidence}`;
}

function computeCropRect(scene, bbox) {
  const [x, y, width, height] = bbox;
  const margin = Math.max(width, height) * 2.6;
  const cropWidth = clamp(width + margin * 2, Math.max(width * 3, 220), scene.width);
  const cropHeight = clamp(height + margin * 2, Math.max(height * 3, 220), scene.height);
  const cropX = clamp(x + (width / 2) - (cropWidth / 2), 0, scene.width - cropWidth);
  const cropY = clamp(y + (height / 2) - (cropHeight / 2), 0, scene.height - cropHeight);
  return { x: cropX, y: cropY, width: cropWidth, height: cropHeight };
}

function createCropStage(scene, crop, options = {}) {
  const stage = document.createElement("div");
  stage.className = "crop-stage-inner";
  stage.style.aspectRatio = `${crop.width} / ${crop.height}`;

  const img = createImageLayer(sceneBaseImage(scene), "crop-image");
  img.loading = "eager";
  img.style.width = `${(scene.width / crop.width) * 100}%`;
  img.style.height = `${(scene.height / crop.height) * 100}%`;
  img.style.left = `${-(crop.x / crop.width) * 100}%`;
  img.style.top = `${-(crop.y / crop.height) * 100}%`;
  stage.append(img);

  if (options.highlightBox) {
    const [x, y, width, height] = options.highlightBox.bbox;
    const highlight = document.createElement("div");
    highlight.className = `crop-highlight${options.kind === "ground-truth" ? " is-ground-truth" : ""}`;
    highlight.style.setProperty("--crop-highlight", options.color || groundTruthColor);
    highlight.style.left = `${((x - crop.x) / crop.width) * 100}%`;
    highlight.style.top = `${((y - crop.y) / crop.height) * 100}%`;
    highlight.style.width = `${(width / crop.width) * 100}%`;
    highlight.style.height = `${(height / crop.height) * 100}%`;
    stage.append(highlight);
  }

  return stage;
}

function closeDetectionModal() {
  state.activeDetection = null;
  els.detectionModal.hidden = true;
  els.detectionModal.setAttribute("aria-hidden", "true");
  els.detectionCropPlain.replaceChildren();
  els.detectionCropOverlay.replaceChildren();
}

function openDetectionModal(detection) {
  state.activeDetection = detection;
  const crop = computeCropRect(detection.scene, detection.box.bbox);
  const highlightColor = detection.kind === "ground-truth" ? groundTruthColor : detection.model?.color || groundTruthColor;
  const overlayLabel = detection.kind === "ground-truth"
    ? "Ground truth"
    : `${detection.model?.shortName || detection.model?.name || "Detection"}`;

  els.detectionModalTitle.textContent = detectionTitle(detection);
  els.detectionModalMeta.textContent = detectionMeta(detection);
  els.detectionOverlayTitle.textContent = overlayLabel;
  els.detectionCropPlain.replaceChildren(createCropStage(detection.scene, crop));
  els.detectionCropOverlay.replaceChildren(createCropStage(detection.scene, crop, {
    highlightBox: detection.box,
    color: highlightColor,
    kind: detection.kind
  }));
  els.detectionModal.hidden = false;
  els.detectionModal.setAttribute("aria-hidden", "false");
}

function createBoxesLayer(scene, boxes, options = {}) {
  const layer = document.createElement("div");
  layer.className = `box-layer${options.kind === "ground-truth" ? " is-ground-truth" : ""}`;
  layer.dataset.kind = options.kind || "prediction";
  if (options.model?.id) layer.dataset.modelId = options.model.id;
  layer.style.opacity = String(options.opacity ?? 1);
  const occupiedLabels = options.occupiedLabels || [];

  boxes.forEach((box) => {
    const [x, y, width, height] = box.bbox;
    const modelColor = options.model?.color || groundTruthColor;
    const confidence = typeof box.confidence === "number" ? `${Math.round(box.confidence * 100)}%` : "";
    const labelText = options.kind === "ground-truth"
      ? `GT ${box.className}`
      : confidence
        ? `${box.className} ${confidence}`
        : box.className;

    const boxEl = document.createElement("div");
    boxEl.className = `detection-box${options.kind === "ground-truth" ? " is-ground-truth" : ""}${options.isDimmed ? " is-dimmed" : ""}${options.isEmphasized ? " is-emphasized" : ""}`;
    if (options.model?.id) {
      boxEl.dataset.styleIndex = String(modelStyleIndex(options.model.id));
    }
    boxEl.style.left = `${(x / scene.width) * 100}%`;
    boxEl.style.top = `${(y / scene.height) * 100}%`;
    boxEl.style.width = `${(width / scene.width) * 100}%`;
    boxEl.style.height = `${(height / scene.height) * 100}%`;
    boxEl.style.setProperty("--box-color", modelColor);
    boxEl.style.setProperty("--box-fill", withAlpha(modelColor, options.kind === "ground-truth" ? 0.08 : 0.14));
    boxEl.style.zIndex = String(options.zIndex || 2);
    boxEl.tabIndex = 0;
    boxEl.role = "button";
    boxEl.setAttribute("aria-label", `${detectionTitle({ scene, box, kind: options.kind, model: options.model })}. Open detail view.`);
    boxEl.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
    });
    boxEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openDetectionModal({ scene, box, kind: options.kind, model: options.model || null });
    });
    boxEl.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      event.stopPropagation();
      openDetectionModal({ scene, box, kind: options.kind, model: options.model || null });
    });

    if (options.showLabels !== false) {
      const label = document.createElement("span");
      label.className = "box-label";
      label.style.setProperty("--box-color", modelColor);
      label.style.setProperty("--box-fill", withAlpha(modelColor, options.kind === "ground-truth" ? 0.9 : 0.84));
      const modelLabelText = options.kind === "ground-truth" ? "GT" : compactModelLabel(options.model?.shortName || options.model?.name || "Model");
      const chosenPosition = chooseLabelPosition(scene, box, options.kind, modelLabelText, labelText, occupiedLabels);
      label.style.left = `${chosenPosition.left}%`;
      label.style.top = `${chosenPosition.top}%`;
      if (options.kind === "ground-truth") {
        label.textContent = labelText;
      } else {
        const modelLine = document.createElement("span");
        modelLine.className = "box-label-model";
        modelLine.textContent = modelLabelText;

        const detailLine = document.createElement("span");
        detailLine.className = "box-label-detail";
        detailLine.textContent = labelText;

        label.append(modelLine, detailLine);
      }
      boxEl.append(label);
    }
    layer.append(boxEl);
  });

  return layer;
}

function renderStack(container, scene, models, options = {}) {
  const baseImage = sceneBaseImage(scene);
  const existingBase = container.querySelector(".base-layer");
  const shouldPreserveBase = options.preserveBaseImage && existingBase;

  if (shouldPreserveBase && existingBase.getAttribute("src") === baseImage) {
    container.querySelectorAll(".box-layer").forEach((layer) => layer.remove());
  } else {
    container.replaceChildren();
    if (baseImage) container.append(createBaseImageLayer(scene));
  }

  const occupiedLabels = [];

  if (state.showGroundTruth && scene.groundTruth?.length) {
    container.append(createBoxesLayer(scene, scene.groundTruth, {
      kind: "ground-truth",
      opacity: state.overlayOpacity,
      zIndex: 12,
      occupiedLabels
    }));
  }

  models.forEach((model, index) => {
    const boxes = scene.predictions?.[model.id];
    if (!boxes?.length) return;

    const isHovered = Boolean(state.hoveredModel && state.hoveredModel === model.id);
    const isDimmed = Boolean(state.hoveredModel && state.hoveredModel !== model.id);
    const opacity = isDimmed ? 0.05 : isHovered ? Math.min(state.overlayOpacity + 0.24, 0.98) : state.overlayOpacity;

    container.append(createBoxesLayer(scene, boxes, {
      kind: "prediction",
      model,
      opacity,
      isDimmed,
      isEmphasized: isHovered,
      zIndex: 4 + index,
      occupiedLabels,
      showLabels: !state.hoveredModel || isHovered
    }));
  });
}

function renderFocusLens() {
  if (state.mode !== "focus") {
    els.focusLensContent.replaceChildren();
    return;
  }

  const clone = els.overlayStack.cloneNode(true);
  clone.removeAttribute("id");
  clone.className = "image-stack overlay-stack focus-lens-stack";
  els.focusLensContent.replaceChildren(clone);
  updateFocusLensPosition();
}

function updateFocusLensPosition(x = 50, y = 50) {
  const magnification = 2.45;
  const sourceWidth = els.viewerContent.offsetWidth;
  const sourceHeight = els.viewerContent.offsetHeight;
  const lensSize = els.focusLens.offsetWidth || 240;
  const sourceX = (x / 100) * sourceWidth;
  const sourceY = (y / 100) * sourceHeight;

  els.focusLens.style.left = `${x}%`;
  els.focusLens.style.top = `${y}%`;
  els.focusLensContent.style.width = `${sourceWidth}px`;
  els.focusLensContent.style.height = `${sourceHeight}px`;
  els.focusLensContent.style.transformOrigin = "0 0";
  els.focusLensContent.style.transform = `translate(${(lensSize / 2) - (sourceX * magnification)}px, ${(lensSize / 2) - (sourceY * magnification)}px) scale(${magnification})`;
}

function viewerSignature(scene = currentScene()) {
  return JSON.stringify({
    scene: scene.id,
    mode: state.mode,
    showGroundTruth: state.showGroundTruth,
    selected: [...visibleSelectedModels(scene)].map((model) => model.id),
    displayed: [...displayedModels(scene)].map((model) => model.id),
    hoveredModel: state.hoveredModel,
    splitA: state.splitA,
    splitB: state.splitB
  });
}

function boxLayerOpacity(layer) {
  const kind = layer.dataset.kind;
  const modelId = layer.dataset.modelId;
  if (kind === "ground-truth") return state.overlayOpacity;
  if (kind === "prediction" && modelId) {
    const isHovered = Boolean(state.hoveredModel && state.hoveredModel === modelId);
    const isDimmed = Boolean(state.hoveredModel && state.hoveredModel !== modelId);
    if (isDimmed) return 0.05;
    if (isHovered) return Math.min(state.overlayOpacity + 0.24, 0.98);
  }
  return state.overlayOpacity;
}

function updateExistingLayerOpacity() {
  document.querySelectorAll(".box-layer").forEach((layer) => {
    layer.style.opacity = String(boxLayerOpacity(layer));
  });
}

function updateViewerFrame() {
  const scene = currentScene();
  document.body.dataset.mode = state.mode;
  els.viewerContent.style.setProperty("--split", `${state.split}%`);
  els.viewerContent.style.aspectRatio = `${scene.width} / ${scene.height}`;
  els.viewerContent.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
  els.splitDivider.setAttribute("aria-valuenow", String(Math.round(state.split)));
  els.splitLeftBadge.textContent = splitOptionLabel(state.splitA);
  els.splitRightBadge.textContent = splitOptionLabel(state.splitB);
  els.zoomReadout.textContent = `${Math.round(state.zoom * 100)}%`;
}

function rebuildViewerLayers(options = {}) {
  const scene = currentScene();
  const selectedModels = displayedModels(scene);
  const leftModels = modelsForSplitChoice(state.splitA, state.splitB, scene);
  const rightModels = modelsForSplitChoice(state.splitB, state.splitA, scene);

  if (state.mode === "split") {
    els.overlayStack.replaceChildren();
    renderStack(els.splitLeft, scene, leftModels, options);
    renderStack(els.splitRight, scene, rightModels, options);
  } else {
    renderStack(els.overlayStack, scene, selectedModels, options);
    els.splitLeft.replaceChildren();
    els.splitRight.replaceChildren();
  }
  renderFocusLens();
}

function viewerStacks() {
  return [els.overlayStack, els.splitLeft, els.splitRight];
}

function animateViewerLayerRefresh() {
  const targets = viewerStacks()
    .flatMap((target) => [...target.querySelectorAll(".box-layer")]);
  window.clearTimeout(viewerRefreshTimer);
  targets.forEach((target) => {
    target.classList.remove("is-fading-in");
    target.classList.add("is-fading-out");
  });

  viewerRefreshTimer = window.setTimeout(() => {
    rebuildViewerLayers({ preserveBaseImage: true });
    const nextTargets = viewerStacks()
      .flatMap((target) => [...target.querySelectorAll(".box-layer")]);
    nextTargets.forEach((target) => {
      target.classList.remove("is-fading-out");
      target.classList.add("is-fading-in");
    });

    window.setTimeout(() => {
      nextTargets.forEach((target) => target.classList.remove("is-fading-in"));
    }, viewerFadeMs);
  }, Math.round(viewerFadeMs * 0.45));
}

function renderViewer(force = false) {
  const signature = viewerSignature();
  if (force || signature !== lastViewerSignature) {
    const shouldAnimate = !force && lastViewerSignature;
    if (shouldAnimate) {
      animateViewerLayerRefresh();
    } else {
      rebuildViewerLayers();
    }
    lastViewerSignature = signature;
  }
  updateViewerFrame();
}

function renderScenes() {
  if (scenesInitialized) {
    els.sceneList.querySelectorAll(".scene-card").forEach((card) => {
      card.classList.toggle("is-active", Number(card.dataset.sceneIndex) === state.sceneIndex);
    });
    const activeCard = els.sceneList.querySelector(`[data-scene-index="${state.sceneIndex}"]`);
    if (activeCard && window.matchMedia("(max-width: 760px)").matches) {
      activeCard.scrollIntoView({ inline: "center", block: "nearest", behavior: "auto" });
    }
    return;
  }

  els.sceneCount.textContent = `${data.scenes.length} samples`;
  const fragment = document.createDocumentFragment();

  data.scenes.forEach((scene, index) => {
    const button = document.createElement("button");
    button.className = `scene-card${index === state.sceneIndex ? " is-active" : ""}`;
    button.type = "button";
    button.dataset.sceneIndex = String(index);
    button.addEventListener("click", () => {
      state.sceneIndex = index;
      state.hoveredModel = null;
      resetView();
      ensureSceneState();
      render();
    });

    const image = document.createElement("img");
    image.src = scene.thumbnailImage || scene.baseImage;
    image.alt = "";
    image.draggable = false;
    image.loading = index < 6 ? "eager" : "lazy";
    image.decoding = "async";

    const copy = document.createElement("span");
    copy.innerHTML = `<strong>${scene.title}</strong><small>${scene.dataset} · ${scene.groundTruth.length} GT</small>`;

    button.append(image, copy);
    fragment.append(button);
  });

  els.sceneList.replaceChildren(fragment);

  const activeCard = els.sceneList.querySelector(`[data-scene-index="${state.sceneIndex}"]`);
  if (activeCard && window.matchMedia("(max-width: 760px)").matches) {
    activeCard.scrollIntoView({ inline: "center", block: "nearest", behavior: "auto" });
  }
  scenesInitialized = true;
}

function renderModels() {
  const scene = currentScene();
  const fragment = document.createDocumentFragment();
  const splitMode = state.mode === "split";
  const sceneModels = readyModels(scene);
  normalizeHoveredModel(scene);

  data.models.forEach((model) => {
    const sceneStats = modelStatsForScene(scene, model.id);
    const hasSceneOutput = sceneModels.some((item) => item.id === model.id);
    const row = document.createElement("button");
    row.type = "button";
    row.className = `model-row${state.selected.has(model.id) ? " is-selected" : ""}${state.hoveredModel === model.id ? " is-hovered" : ""}${splitMode ? " is-readonly" : ""}${hasSceneOutput ? "" : " is-pending"}`;
    row.style.setProperty("--model-color", model.color);
    row.disabled = !hasSceneOutput && !splitMode;

    row.addEventListener("pointerenter", () => {
      if (!hasSceneOutput || splitMode) return;
      state.hoveredModel = model.id;
      renderViewer();
    });

    row.addEventListener("pointerleave", () => {
      if (!hasSceneOutput || splitMode) return;
      state.hoveredModel = null;
      renderViewer();
    });

    if (!splitMode) {
      row.addEventListener("click", () => {
        if (!hasSceneOutput) return;
        state.hoveredModel = null;
        if (state.selected.has(model.id)) state.selected.delete(model.id);
        else state.selected.add(model.id);
        render();
      });
    }

    const meta = splitMode
      ? splitSideForModel(model.id, scene)
      : hasSceneOutput
        ? `${sceneStats.count} detections${sceneStats.maxConfidence != null ? ` / max ${sceneStats.maxConfidence.toFixed(2)}` : ""}`
        : "not available in this scene";

    const pill = hasSceneOutput && sceneStats.avgConfidence != null
      ? `${Math.round(sceneStats.avgConfidence * 100)}%`
      : hasSceneOutput
        ? String(sceneStats.count)
        : "--";

    row.innerHTML = `
      <span class="model-swatch" aria-hidden="true"></span>
      <span class="model-copy">
        <span class="model-title">${model.name}</span>
        <span class="model-meta">${meta}</span>
      </span>
      <span class="metric-pill">${pill}</span>
    `;

    fragment.append(row);
  });

  els.modelList.replaceChildren(fragment);
}

function renderLegend() {
  const fragment = document.createDocumentFragment();
  data.classes.forEach((item) => {
    const row = document.createElement("div");
    row.className = "class-row";
    row.innerHTML = `
      <span class="class-swatch" style="background:${item.color}"></span>
      <span>${item.name}</span>
    `;
    fragment.append(row);
  });
  els.classLegend.replaceChildren(fragment);
}

function renderSplitSelectors() {
  const { groupOptions, modelOptions } = splitOptions();
  const options = `
    <optgroup label="Groups">
      ${groupOptions.map((option) => `<option value="${option.value}">${option.label}</option>`).join("")}
    </optgroup>
    <optgroup label="Single models">
      ${modelOptions.map((option) => `<option value="${option.value}">${option.label}</option>`).join("")}
    </optgroup>
  `;
  els.splitA.innerHTML = options;
  els.splitB.innerHTML = options;
  els.splitA.value = state.splitA;
  els.splitB.value = state.splitB;
}

function renderSummary() {
  const scene = currentScene();
  const visibleModels = displayedModels(scene);
  const leftModels = modelsForSplitChoice(state.splitA, state.splitB, scene);
  const rightModels = modelsForSplitChoice(state.splitB, state.splitA, scene);
  const splitCounts = `${totalPredictionCount(leftModels, scene)} / ${totalPredictionCount(rightModels, scene)}`;
  const fallbackTag = scene.rawImageAvailable ? "optimized aerial image" : "GT preview fallback";

  els.sceneTitle.textContent = scene.title;
  els.sceneMeta.textContent = `${scene.dataset} / ${scene.dimensions} / ${fallbackTag}`;
  els.activeModelLabel.textContent = state.mode === "split" ? "Split models" : "Visible models";
  els.activeModelCount.textContent = state.mode === "split" ? `${leftModels.length} / ${rightModels.length}` : String(visibleModels.length);
  els.bestIouLabel.textContent = "GT boxes";
  els.bestIou.textContent = String(scene.groundTruth.length);
  els.predictionCountLabel.textContent = state.mode === "split" ? "Pred boxes L/R" : "Pred boxes";
  els.predictionCount.textContent = state.mode === "split" ? splitCounts : String(totalPredictionCount(visibleModels, scene));
}

function renderMode() {
  const scene = currentScene();
  const sceneModels = readyModels(scene);
  const allReadySelected = sceneModels.length > 0 && sceneModels.every((model) => state.selected.has(model.id));

  document.body.dataset.mode = state.mode;
  els.modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
  els.splitSelectors.classList.toggle("is-visible", state.mode === "split");
  els.actionsRow.classList.toggle("is-hidden", state.mode === "split");
  els.hoverHint.textContent = sceneModels.length
    ? state.mode === "split"
      ? "Split comparison"
      : "Hover to isolate"
    : "No outputs";
  els.selectAll.textContent = allReadySelected ? "Deselect all" : "Select all";
  els.selectAll.disabled = sceneModels.length === 0;
  els.clearAll.disabled = sceneModels.length === 0;
  els.taskLabel.textContent = "Object detection";
  els.toggleGroundTruth.classList.toggle("is-active", state.showGroundTruth);
  els.toggleGroundTruth.setAttribute("aria-pressed", String(state.showGroundTruth));
  els.groundTruthText.textContent = "Ground Truth";
}

function render() {
  ensureSceneState();
  if (state.activeDetection && state.activeDetection.scene.id !== currentScene().id) {
    closeDetectionModal();
  }
  renderScenes();
  renderLegend();
  renderModels();
  renderSplitSelectors();
  renderSummary();
  renderMode();
  renderViewer(true);
}

function resetView() {
  state.zoom = 1;
  state.panX = 0;
  state.panY = 0;
  state.dragging = false;
  state.splitDragging = false;
}

function setZoom(nextZoom) {
  state.zoom = Math.min(2.4, Math.max(0.65, nextZoom));
  if (state.zoom === 1) {
    state.panX = 0;
    state.panY = 0;
  }
  updateViewerFrame();
}

document.querySelector("#prevScene").addEventListener("click", () => {
  state.sceneIndex = (state.sceneIndex - 1 + data.scenes.length) % data.scenes.length;
  state.hoveredModel = null;
  resetView();
  ensureSceneState();
  render();
});

document.querySelector("#nextScene").addEventListener("click", () => {
  state.sceneIndex = (state.sceneIndex + 1) % data.scenes.length;
  state.hoveredModel = null;
  resetView();
  ensureSceneState();
  render();
});

document.querySelector("#zoomOut").addEventListener("click", () => setZoom(state.zoom - 0.12));
document.querySelector("#zoomIn").addEventListener("click", () => setZoom(state.zoom + 0.12));
document.querySelector("#fitView").addEventListener("click", () => {
  resetView();
  renderViewer();
});

els.modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    state.hoveredModel = null;
    resetView();
    render();
  });
});

els.opacityRange.addEventListener("input", () => {
  state.overlayOpacity = Number(els.opacityRange.value) / 100;
  updateExistingLayerOpacity();
});

els.splitA.addEventListener("change", () => {
  state.splitA = els.splitA.value;
  if (state.splitA === state.splitB && readyModels().length > 1) state.splitB = "all-other-models";
  render();
});

els.splitB.addEventListener("change", () => {
  state.splitB = els.splitB.value;
  render();
});

els.toggleGroundTruth.addEventListener("click", () => {
  state.showGroundTruth = !state.showGroundTruth;
  render();
});

els.selectAll.addEventListener("click", () => {
  const sceneModels = readyModels(currentScene());
  const allReadySelected = sceneModels.length > 0 && sceneModels.every((model) => state.selected.has(model.id));
  state.hoveredModel = null;
  if (allReadySelected) {
    sceneModels.forEach((model) => state.selected.delete(model.id));
  } else {
    sceneModels.forEach((model) => state.selected.add(model.id));
  }
  render();
});

els.clearAll.addEventListener("click", () => {
  state.hoveredModel = null;
  state.selected.clear();
  render();
});

els.detectionModalClose.addEventListener("click", closeDetectionModal);
els.detectionModalBackdrop.addEventListener("click", closeDetectionModal);
els.detectionModal.addEventListener("click", (event) => {
  if (event.target === els.detectionModal) closeDetectionModal();
});

function setSplitFromPointer(event) {
  const bounds = els.viewerContent.getBoundingClientRect();
  const nextSplit = ((event.clientX - bounds.left) / bounds.width) * 100;
  state.split = Math.min(100, Math.max(0, nextSplit));
  updateViewerFrame();
}

function startSplitDrag(event) {
  if (state.mode !== "split") return;
  state.splitDragging = true;
  setSplitFromPointer(event);
  els.viewerContent.setPointerCapture(event.pointerId);
  event.preventDefault();
  event.stopPropagation();
}

els.viewerContent.addEventListener("pointerdown", startSplitDrag);

els.viewerContent.addEventListener("pointermove", (event) => {
  if (!state.splitDragging) return;
  setSplitFromPointer(event);
});

els.viewerContent.addEventListener("pointerup", (event) => {
  if (!state.splitDragging) return;
  state.splitDragging = false;
  if (els.viewerContent.hasPointerCapture(event.pointerId)) {
    els.viewerContent.releasePointerCapture(event.pointerId);
  }
});

els.viewerContent.addEventListener("pointercancel", (event) => {
  if (!state.splitDragging) return;
  state.splitDragging = false;
  if (els.viewerContent.hasPointerCapture(event.pointerId)) {
    els.viewerContent.releasePointerCapture(event.pointerId);
  }
});

els.splitDivider.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  event.stopPropagation();
  state.split = Math.min(100, Math.max(0, state.split + (event.key === "ArrowRight" ? 4 : -4)));
  updateViewerFrame();
});

els.viewerFrame.addEventListener("pointerdown", (event) => {
  if (state.mode === "split") return;
  state.dragging = true;
  state.dragStart = { x: event.clientX, y: event.clientY, panX: state.panX, panY: state.panY };
  els.viewerFrame.setPointerCapture(event.pointerId);
});

els.viewerFrame.addEventListener("pointermove", (event) => {
  const bounds = els.viewerContent.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width) * 100;
  const y = ((event.clientY - bounds.top) / bounds.height) * 100;
  updateFocusLensPosition(Math.min(100, Math.max(0, x)), Math.min(100, Math.max(0, y)));

  if (state.mode === "split") return;
  if (!state.dragging || state.zoom <= 1) return;
  state.panX = state.dragStart.panX + event.clientX - state.dragStart.x;
  state.panY = state.dragStart.panY + event.clientY - state.dragStart.y;
  updateViewerFrame();
});

els.viewerFrame.addEventListener("pointerup", (event) => {
  state.dragging = false;
  if (els.viewerFrame.hasPointerCapture(event.pointerId)) {
    els.viewerFrame.releasePointerCapture(event.pointerId);
  }
});

els.viewerFrame.addEventListener("wheel", (event) => {
  if (!event.ctrlKey && Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
  event.preventDefault();
  setZoom(state.zoom + (event.deltaY > 0 ? -0.08 : 0.08));
}, { passive: false });

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !els.detectionModal.hidden) {
    closeDetectionModal();
    return;
  }
  if (["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(event.target.tagName)) return;
  if (event.key === "ArrowRight") document.querySelector("#nextScene").click();
  if (event.key === "ArrowLeft") document.querySelector("#prevScene").click();
  if (event.key.toLowerCase() === "g") els.toggleGroundTruth.click();
});

applyTheme(resolveInitialTheme());
ensureSceneState();
render();

els.themeToggle.addEventListener("click", () => {
  const nextTheme = state.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  window.localStorage.setItem(themeStorageKey, nextTheme);
});
