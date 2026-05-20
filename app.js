const data = window.DETECTION_ATLAS_DATA || window.TRIFFID_DEMO_DATA || window.TRIFID_DEMO_DATA;
const releaseBases = {
  core: "https://github.com/Petrakous/Aerial-Detection-Atlas/releases/download/assets-core-v2/",
  coreOverflow: "https://github.com/Petrakous/Aerial-Detection-Atlas/releases/download/assets-core-v3/",
  coreDFire: "https://github.com/Petrakous/Aerial-Detection-Atlas/releases/download/assets-core-dfire-v1/",
  coreHazmat: "https://github.com/Petrakous/Aerial-Detection-Atlas/releases/download/assets-hazmat-v1/",
  coreInc1M: "https://github.com/Petrakous/Aerial-Detection-Atlas/releases/download/assets-core-inc1m-v1/",
  hazmat: "https://github.com/Petrakous/Aerial-Detection-Atlas/releases/download/assets-hazmat-v1/",
  thumbnails: "https://github.com/Petrakous/Aerial-Detection-Atlas/releases/download/assets-thumbnails-v3/",
  segmentationGt: "https://github.com/Petrakous/Aerial-Detection-Atlas/releases/download/assets-seg-gt-v2/",
  segmentationGtInc1M: "https://github.com/Petrakous/Aerial-Detection-Atlas/releases/download/assets-seg-gt-inc1m-v2/",
  segmentationGtJson: "https://github.com/Petrakous/Aerial-Detection-Atlas/releases/download/assets-seg-gt-json-v1/",
  segmentationPred: "https://github.com/Petrakous/Aerial-Detection-Atlas/releases/download/assets-seg-pred-v2/",
  segmentationPredInc1M: "https://github.com/Petrakous/Aerial-Detection-Atlas/releases/download/assets-seg-pred-inc1m-v1/",
  segmentationPredJson: "https://github.com/Petrakous/Aerial-Detection-Atlas/releases/download/assets-seg-pred-json-v1/"
};

// GitHub caps each release at 1000 assets, so these viewer images live in the
// overflow release and should resolve there directly instead of waiting on a 404.
const viewerCoreOverflowAssets = {
  FloodNetPlus: new Set([
    "6389.jpg",
    "6717.jpg",
    "6744.jpg",
    "6778.jpg",
    "6831.jpg",
    "6856.jpg",
    "6896.jpg",
    "6979.jpg",
    "7105.jpg",
    "7141.jpg",
    "7253.jpg",
    "7308.jpg",
    "7323.jpg",
    "7577.jpg",
    "7605.jpg",
    "7652.jpg",
    "8401.jpg",
    "8478.jpg",
    "8778.jpg",
    "8930.jpg",
    "8993.jpg",
    "9012.jpg",
    "9035.jpg",
    "9055.jpg"
  ]),
  RescueNet: new Set([
    "10807.jpg",
    "10849.jpg",
    "10957.jpg",
    "11084.jpg",
    "11151.jpg",
    "11236.jpg",
    "11238.jpg",
    "11401.jpg",
    "11627.jpg",
    "11918.jpg",
    "12095.jpg",
    "12172.jpg",
    "12433.jpg",
    "13021.jpg",
    "13342.jpg",
    "13506.jpg",
    "13640.jpg",
    "13762.jpg",
    "13876.jpg",
    "13976.jpg",
    "14059.jpg",
    "14207.jpg",
    "14317.jpg",
    "14800.jpg",
    "14882.jpg",
    "14898.jpg",
    "14939.jpg",
    "15031.jpg",
    "15221.jpg",
    "15226.jpg",
    "15279.jpg",
    "15778.jpg",
    "15799.jpg",
    "15831.jpg",
    "16005.jpg",
    "16067.jpg",
    "16073.jpg",
    "16076.jpg"
  ])
};

const sameOriginSegmentationJsonDatasets = new Set(["FloodNetPlus", "RescueNet"]);

const minZoom = 0.25;
const maxZoom = 2.4;
const fitViewPadding = 0.98;

const availableModelIds = new Set(data.models.map((model) => model.id));
const availableDatasets = (data.datasets?.map((dataset) => dataset.id) || [...new Set(data.scenes.map((scene) => scene.dataset))]);

const state = {
  route: "home",
  menuOpen: false,
  viewerOpen: false,
  galleryView: "dense",
  sceneIndex: 0,
  datasetId: availableDatasets[0] || "",
  mode: "overlay",
  theme: "light",
  selected: new Set(),
  hoveredModel: null,
  hoveredGroundTruth: false,
  suppressGroundTruthHover: false,
  showGroundTruth: false,
  overlayOpacity: 1,
  split: 50,
  splitA: data.models[0]?.id || "",
  splitB: "all-other-models",
  zoom: 1,
  fitToView: true,
  panX: 0,
  panY: 0,
  dragging: false,
  splitDragging: false,
  dragStart: { x: 0, y: 0, panX: 0, panY: 0 },
  pointerX: null,
  pointerY: null,
  activeDetection: null,
  skipNextViewerAnimation: false
};

const els = {
  appMenuOverlay: document.querySelector("#appMenuOverlay"),
  appMenuPanel: document.querySelector("#appMenuPanel"),
  appMenuClose: document.querySelector("#appMenuClose"),
  appMenuNav: document.querySelector("#appMenuNav"),
  menuThemeToggle: document.querySelector("#menuThemeToggle"),
  landingMenuButton: document.querySelector("#landingMenuButton"),
  datasetMenuButton: document.querySelector("#datasetMenuButton"),
  datasetHomeButton: document.querySelector("#datasetHomeButton"),
  landingPage: document.querySelector("#landingPage"),
  datasetPage: document.querySelector("#datasetPage"),
  datasetSourceLink: document.querySelector("#datasetSourceLink"),
  datasetPageMeta: document.querySelector("#datasetPageMeta"),
  datasetPageTask: document.querySelector("#datasetPageTask"),
  datasetPageHeading: document.querySelector("#datasetPageHeading"),
  datasetPageDomain: document.querySelector("#datasetPageDomain"),
  datasetPageSummary: document.querySelector("#datasetPageSummary"),
  datasetInstructionsButton: document.querySelector("#datasetInstructionsButton"),
  datasetInstructionsBody: document.querySelector("#datasetInstructionsBody"),
  galleryGrid: document.querySelector("#galleryGrid"),
  galleryDenseButton: document.querySelector("#galleryDenseButton"),
  galleryLargeButton: document.querySelector("#galleryLargeButton"),
  viewerOverlay: document.querySelector("#viewerOverlay"),
  viewerApp: document.querySelector("#viewerApp"),
  datasetStructure: document.querySelector("#datasetStructure"),
  backButton: document.querySelector("#backButton"),
  workspace: document.querySelector(".workspace"),
  sceneTitle: document.querySelector("#sceneTitle"),
  sceneMeta: document.querySelector("#sceneMeta"),
  sceneCount: document.querySelector("#sceneCount"),
  viewerHomeButton: document.querySelector("#viewerHomeButton"),
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
  modeButtons: [...document.querySelectorAll(".mode-button")],
  splitSelectors: document.querySelector("#splitSelectors"),
  splitA: document.querySelector("#splitA"),
  splitB: document.querySelector("#splitB"),
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
  instructionsModal: document.querySelector("#instructionsModal"),
  instructionsModalBackdrop: document.querySelector("#instructionsModalBackdrop"),
  instructionsModalClose: document.querySelector("#instructionsModalClose"),
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
const viewerFadeMs = 500;
let lastViewerSignature = "";
let lastRenderedSceneId = "";
let scenesInitialized = false;
let viewerRefreshTimer = 0;
let focusLensRefreshFrame = 0;
let resetSceneListScroll = false;
let lastGallerySignature = "";
const preloadedImages = new Map();
const segmentationScoreLoads = new Map();
const segmentationInstanceLoads = new Map();
let preloadSceneTimer = 0;
let appMenuHideTimer = 0;
let preservedPageScrollY = null;
let viewerCloseBackTarget = null;

function restorePageScrollPosition() {
  if (typeof preservedPageScrollY !== "number") return;
  const targetY = preservedPageScrollY;
  const restore = () => window.scrollTo(0, targetY);
  restore();
  window.requestAnimationFrame(() => {
    restore();
    window.requestAnimationFrame(restore);
  });
}

function detectClientFormFactor() {
  const ua = navigator.userAgent || "";
  const platform = navigator.platform || "";
  const touchPoints = navigator.maxTouchPoints || 0;
  const mobileHint = Boolean(navigator.userAgentData?.mobile);
  const phoneHint = /\b(iPhone|iPod|Android.+Mobile|Windows Phone|Mobile)\b/i.test(ua);
  const tabletHint = /\b(iPad|Tablet|PlayBook|Silk)\b/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua));
  const ipadDesktopHint = platform === "MacIntel" && touchPoints > 1;

  if (mobileHint || phoneHint) return "mobile";
  if (tabletHint || ipadDesktopHint) return "tablet";
  return "desktop";
}

function isHandheldClient() {
  return document.body?.dataset.mobileClient === "true";
}

const datasetDescriptions = {
  DFire: {
    title: "DFire",
    task: "Object Detection",
    useCase: "Fire",
    summary: "Large-scale image dataset for fire and smoke object detection, designed for machine-learning detection algorithms with YOLO-format bounding-box annotations.",
    previewImage: "thumbnails/DFire/WEB10489.jpg",
    sourceUrl: "https://github.com/gaia-solutions-on-demand/DFireDataset",
    sourceLabel: "Original dataset"
  },
  LADD: {
    title: "LADD",
    task: "Object Detection",
    useCase: "Human Detection",
    summary: "Drone-based pedestrian detection dataset for search-and-rescue scenarios, containing aerial images with bounding-box annotations for the pedestrian class.",
    previewImage: "thumbnails/LADD/1324.jpg",
    sourceUrl: "https://github.com/lacmus-foundation/ladd-utils",
    sourceLabel: "Original dataset"
  },
  RescueNet: {
    title: "RescueNet",
    task: "Semantic Segmentation",
    useCase: "Earthquake",
    summary: "High-resolution UAV semantic segmentation benchmark for natural disaster damage assessment, providing pixel-level annotations of post-disaster scenes including buildings, roads and damage-aware scene elements.",
    previewImage: "thumbnails/RescueNet/11236.jpg",
    sourceUrl: "https://github.com/BinaLab/RescueNet-A-High-Resolution-Post-Disaster-UAV-Dataset-for-Semantic-Segmentation",
    sourceLabel: "Original dataset"
  },
  FloodNetPlus: {
    title: "FloodNetPlus",
    task: "Semantic Segmentation",
    useCase: "Flood",
    summary: "High-resolution post-disaster aerial imagery benchmark for flood scene understanding, with pixel-level annotations for flooded and non-flooded buildings, roads, water, vegetation, vehicles, pools and background.",
    previewImage: "thumbnails/FloodNetPlus/7577.jpg",
    sourceUrl: "https://github.com/LDS614705356/FloodNet-plus",
    sourceLabel: "Original dataset"
  },
  Inc1M: {
    title: "Incidents1M-Seg",
    task: "Panoptic Segmentation",
    useCase: "Multi-hazard",
    summary: "Curated multi-hazard incident benchmark slice for panoptic segmentation, highlighting responder activity, fire, smoke, destruction, and other incident-relevant scene elements.",
    previewImage: "thumbnails/Inc1M/3d64028c-valley_on_fire_FORWARD_SLASH_2e449d0c30.jpg",
    sourceUrl: "https://roc-hci.github.io/NADBenchmarks/Incidents1M.html",
    sourceLabel: "Original dataset"
  },
  HAZMAT: {
    title: "HAZMAT13",
    task: "Object Detection",
    useCase: "Hazmat Placards",
    summary: "Hazardous-material placard detection benchmark with 13 classes, supporting close-range recognition and comparison of model predictions against annotated reference boxes.",
    sourceUrl: "https://github.com/mrl-amrl/HAZMAT13",
    sourceLabel: "Original dataset"
  }
};

const curatedInc1MImageIds = new Set([
  "3d64028c-valley_on_fire_FORWARD_SLASH_2e449d0c30",
  "04f856fa-drought_in_fire_station_FORWARD_SLASH_00191",
  "e406384b-bus_explosion_in_mausoleum_FORWARD_SLASH_b5de9d9370",
  "c8a7a68d-train_collision_in_fire_station_FORWARD_SLASH_4838b7e46f",
  "63ef9d0e-wild_fire_in_valley_FORWARD_SLASH_00447",
  "a49f19c3-nuclear_explosion_in_river_FORWARD_SLASH_cf2b436483",
  "21e62969-drought_in_fire_station_FORWARD_SLASH_00289",
  "ba7a822d-dam_with_smoke_FORWARD_SLASH_31ed5fc6aa",
  "5e921b5f-bridge_on_fire_FORWARD_SLASH_c744a13775",
  "9bbb72ad-train_accident_in_fire_station_FORWARD_SLASH_00014",
  "d748566f-plane_accident_in_house_FORWARD_SLASH_8920c996cb",
  "5d3ba067-wild_fire_in_snowfield_FORWARD_SLASH_6703bdc8eb",
  "1cf03b16-burned_farm_FORWARD_SLASH_00221",
  "24b0cd93-wild_fire_in_pavilion_FORWARD_SLASH_cf1dceb2fd",
  "06fa91b3-nuclear_explosion_in_city_hall_outdoor_FORWARD_SLASH_e424252479",
  "5c18c849-parking_lot_on_fire_FORWARD_SLASH_00495",
  "8c966860-haboob_in_fire_station_FORWARD_SLASH_00133",
  "7fe137e4-car_explosion_in_alley_FORWARD_SLASH_00001",
  "001dbde0-plane_crash_in_mosque_outdoor_FORWARD_SLASH_00331",
  "7859a819-earthquake_in_diner_outdoor_FORWARD_SLASH_00006",
  "ed6aee85-mountain_on_fire_FORWARD_SLASH_00085",
  "6318df7b-fire_whirl_in_building_facade_FORWARD_SLASH_00249",
  "c41cf413-bicycle_disaster_in_museum_outdoor_FORWARD_SLASH_00303",
  "5e553b55-fire_whirl_in_landfill_FORWARD_SLASH_00017",
  "6a27ade9-car_disaster_in_stadium_FORWARD_SLASH_9408391efc",
  "aeaf667b-earthquake_in_schoolhouse_FORWARD_SLASH_4b86fdfb17",
  "fbe97915-burned_port_FORWARD_SLASH_00008",
  "0261f979-nuclear_power_plant_on_fire_FORWARD_SLASH_00056",
  "1a7bf422-nuclear_explosion_in_fire_station_FORWARD_SLASH_0c7bffd942",
  "5ceb7a2d-wild_fire_in_ocean_FORWARD_SLASH_662bc42d28",
  "d6b28f6e-plane_incident_in_valley_FORWARD_SLASH_00435",
  "8de11bae-collapsed_fire_station_FORWARD_SLASH_00267",
  "c43251f0-earthquake_in_village_FORWARD_SLASH_00111",
  "e8e486d0-wild_fire_in_rope_bridge_FORWARD_SLASH_58a00df8f4",
  "82a2700e-highway_with_smoke_FORWARD_SLASH_c6c44b2190",
  "443b5ad3-typhoon_in_field_road_FORWARD_SLASH_00221",
  "35ed0db1-landslide_in_park_FORWARD_SLASH_7afd811d0d",
  "da53784b-flooded_bazaar_outdoor_FORWARD_SLASH_30b87aecf5",
  "13cc1b15-blizzard_in_landfill_FORWARD_SLASH_02af807155",
  "c48fa562-wild_fire_in_schoolhouse_FORWARD_SLASH_00391",
  "0068049e-ship_accident_in_forest_road_FORWARD_SLASH_00109",
  "b893b49d-demolition_in_river_FORWARD_SLASH_00205",
  "1b3cdbbd-volcano_with_smoke_FORWARD_SLASH_ddb47b1127",
  "3a7366c7-boat_disaster_in_alley_FORWARD_SLASH_00437",
  "4ff47c60-tornado_in_cabin_outdoor_FORWARD_SLASH_00308",
  "777b8154-car_disaster_in_embassy_FORWARD_SLASH_149bbd2961",
  "c2e2ee21-fog_in_hospital_FORWARD_SLASH_ac89240d02",
  "1457db88-river_flood_in_dam_FORWARD_SLASH_00464",
  "23e22453-earthquake_in_landfill_FORWARD_SLASH_00473",
  "84896714-mudflow_in_police_station_FORWARD_SLASH_85d0d716aa"
]);

const landingCollections = [
  {
    id: "ground-level",
    title: "Ground-level",
    summary: "This collection brings together close-range incident benchmarks focused on Multi-hazard scene understanding and hazardous-material recognition.",
    note: "CV group dataset",
    datasetIds: ["Inc1M", "HAZMAT"],
    variant: "featured"
  },
  {
    id: "aerial",
    title: "Aerial",
    summary: "This collection covers UAV and airborne benchmarks for flood, damage, pedestrian, fire, and smoke analysis across detection and segmentation tasks.",
    note: "Current datasets",
    datasetIds: ["FloodNetPlus", "RescueNet", "LADD", "DFire"],
    variant: "grid"
  },
  {
    id: "satellite-eo",
    title: "Satellite / EO",
    summary: "Reserved for future Earth observation and wide-area remote-sensing benchmark collections.",
    note: "Future expansion",
    datasetIds: [],
    variant: "placeholder",
    hidden: true
  }
];

function updatePageScrollLock() {
  const viewerScrollY = typeof preservedPageScrollY === "number"
    ? preservedPageScrollY
    : (window.scrollY || window.pageYOffset || 0);
  const shouldLockPage = Boolean(
    (els.instructionsModal && !els.instructionsModal.hidden)
    || (state.route === "dataset" && state.viewerOpen)
  );

  if (shouldLockPage) {
    document.documentElement.style.overflow = "hidden";
    document.body.classList.add("is-scroll-locked");
    document.body.style.overflow = "hidden";
    if (state.route === "dataset" && state.viewerOpen && els.datasetPage) {
      els.datasetPage.classList.add("is-viewer-locked");
      els.datasetPage.style.top = `-${viewerScrollY}px`;
    }
    return;
  }

  document.documentElement.style.overflow = "";
  document.body.classList.remove("is-scroll-locked");
  document.body.style.overflow = "";
  if (els.datasetPage) {
    els.datasetPage.classList.remove("is-viewer-locked");
    els.datasetPage.style.top = "";
  }
}

function parseRouteHash() {
  const rawHash = window.location.hash.replace(/^#/, "");
  if (!rawHash || rawHash === "/" || rawHash === "home") {
    return { route: "home", datasetId: state.datasetId, sceneId: null };
  }

  if (rawHash.startsWith("dataset/")) {
    const [datasetPart, sceneToken, ...sceneRest] = rawHash.slice("dataset/".length).split("/");
    const datasetId = decodeURIComponent(datasetPart || "");
    const sceneId = sceneToken === "scene" ? decodeURIComponent(sceneRest.join("/")) : null;
    if (availableDatasets.includes(datasetId)) {
      return { route: "dataset", datasetId, sceneId };
    }
  }

  return { route: "home", datasetId: state.datasetId, sceneId: null };
}

function sceneIndexForImageId(datasetId, sceneId) {
  if (!sceneId) return -1;
  return data.scenes
    .filter((scene) => scene.dataset === datasetId)
    .findIndex((scene) => String(scene.imageId) === String(sceneId));
}

function currentSceneId() {
  return currentScene()?.imageId || null;
}

function setRoute(nextRoute, nextDatasetId = state.datasetId, options = {}) {
  const {
    updateHash = true,
    viewerOpen = state.viewerOpen,
    sceneId = currentSceneId(),
    historyMode = "push"
  } = options;
  state.route = nextRoute;
  state.viewerOpen = nextRoute === "dataset" ? Boolean(viewerOpen) : false;
  closeInstructionsModal();
  if (nextDatasetId && availableDatasets.includes(nextDatasetId)) {
    state.datasetId = nextDatasetId;
  }

  if (updateHash) {
    const nextHash = nextRoute === "dataset"
      ? state.viewerOpen && sceneId
        ? `#dataset/${encodeURIComponent(state.datasetId)}/scene/${encodeURIComponent(sceneId)}`
        : `#dataset/${encodeURIComponent(state.datasetId)}`
      : "#home";
    if (window.location.hash !== nextHash) {
      const historyState = { route: nextRoute, datasetId: state.datasetId, sceneId };
      if (historyMode === "replace") {
        window.history.replaceState(historyState, "", nextHash);
      } else {
        window.history.pushState(historyState, "", nextHash);
      }
    }
  }

  render();
}

function routeDataset(datasetId) {
  state.sceneIndex = 0;
  state.hoveredModel = null;
  state.hoveredGroundTruth = false;
  state.suppressGroundTruthHover = false;
  state.selected.clear();
  preservedPageScrollY = null;
  resetView();
  lastViewerSignature = "";
  lastRenderedSceneId = "";
  setRoute("dataset", datasetId, { viewerOpen: false, sceneId: null });
  window.scrollTo(0, 0);
  window.requestAnimationFrame(() => window.scrollTo(0, 0));
}

function openViewerForScene(sceneIndex, { updateHash = true } = {}) {
  const scenes = visibleScenes();
  if (!scenes[sceneIndex]) return;
  preservedPageScrollY = window.scrollY || window.pageYOffset || 0;
  viewerCloseBackTarget = updateHash
    ? { route: "dataset", datasetId: state.datasetId }
    : null;
  state.sceneIndex = sceneIndex;
  state.viewerOpen = true;
  state.hoveredModel = null;
  state.hoveredGroundTruth = false;
  state.suppressGroundTruthHover = false;
  closeDetectionModal();
  resetView();
  ensureSceneState();
  lastViewerSignature = "";
  lastRenderedSceneId = "";
  setRoute("dataset", state.datasetId, {
    updateHash,
    viewerOpen: true,
    sceneId: scenes[sceneIndex].imageId
  });
  restorePageScrollPosition();
}

function closeViewerOverlay({ updateHash = true } = {}) {
  const currentRoute = parseRouteHash();
  const shouldPopViewerHistory = updateHash
    && currentRoute.route === "dataset"
    && currentRoute.datasetId === state.datasetId
    && Boolean(currentRoute.sceneId)
    && viewerCloseBackTarget?.route === "dataset"
    && viewerCloseBackTarget.datasetId === state.datasetId;

  viewerCloseBackTarget = null;

  if (shouldPopViewerHistory) {
    window.history.back();
    return;
  }

  state.viewerOpen = false;
  state.hoveredModel = null;
  state.hoveredGroundTruth = false;
  state.suppressGroundTruthHover = false;
  closeDetectionModal();
  setRoute("dataset", state.datasetId, {
    updateHash,
    viewerOpen: false,
    sceneId: null,
    historyMode: currentRoute.route === "dataset" && Boolean(currentRoute.sceneId) ? "replace" : "push"
  });
  restorePageScrollPosition();
  preservedPageScrollY = null;
}

function openInstructionsModal() {
  if (!els.instructionsModal) return;
  els.instructionsModal.hidden = false;
  els.instructionsModal.setAttribute("aria-hidden", "false");
  updatePageScrollLock();
}

function closeInstructionsModal() {
  if (!els.instructionsModal) return;
  els.instructionsModal.hidden = true;
  els.instructionsModal.setAttribute("aria-hidden", "true");
  updatePageScrollLock();
}

function syncRouteFromLocation() {
  const wasViewerOpen = state.route === "dataset" && state.viewerOpen;
  const route = parseRouteHash();
  state.route = route.route;
  state.viewerOpen = route.route === "dataset" && Boolean(route.sceneId);
  if (route.datasetId && availableDatasets.includes(route.datasetId)) {
    state.datasetId = route.datasetId;
  }
  if (route.route === "dataset" && route.sceneId) {
    const nextIndex = sceneIndexForImageId(state.datasetId, route.sceneId);
    if (nextIndex >= 0) {
      state.sceneIndex = nextIndex;
    } else {
      state.viewerOpen = false;
    }
  }
  if (!(route.route === "dataset" && route.sceneId)) {
    viewerCloseBackTarget = null;
  }
  render();
  if (wasViewerOpen && !(state.route === "dataset" && state.viewerOpen)) {
    restorePageScrollPosition();
    preservedPageScrollY = null;
  }
}

function updateScenePanelWidth(sceneList = visibleScenes()) {
  if (!els.workspace) return;
  if (isHandheldClient() && window.matchMedia("(max-width: 1100px)").matches) {
    els.workspace.style.removeProperty("--scene-panel-width");
    return;
  }

  const canvas = updateScenePanelWidth.canvas || (updateScenePanelWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  if (!context) return;

  let maxTextWidth = 0;
  sceneList.forEach((scene) => {
    const gtSummary = isSegmentationScene(scene)
      ? `${scene.groundTruthStats?.classCount || scene.groundTruth.length} classes`
      : `${scene.groundTruth.length} GT`;
    const title = formatSceneTitle(scene.title || "");
    const meta = `${scene.dataset} · ${gtSummary}`;

    context.font = '780 13px Aptos, "IBM Plex Sans", "Source Sans 3", "Segoe UI", Helvetica, Arial, sans-serif';
    const titleWidth = context.measureText(title).width;
    context.font = '650 12px Aptos, "IBM Plex Sans", "Source Sans 3", "Segoe UI", Helvetica, Arial, sans-serif';
    const metaWidth = context.measureText(meta).width;

    maxTextWidth = Math.max(maxTextWidth, titleWidth, metaWidth);
  });

  const panelWidth = clamp(Math.ceil(maxTextWidth + 72 + 12 + 24 + 26), 252, 380);
  els.workspace.style.setProperty("--scene-panel-width", `${panelWidth}px`);
}

function resolveInitialTheme() {
  window.localStorage.removeItem(themeStorageKey);
  return "light";
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  if (els.menuThemeToggle) {
    els.menuThemeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    els.menuThemeToggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  }
}

function openAppMenu() {
  state.menuOpen = true;
  window.clearTimeout(appMenuHideTimer);
  els.appMenuOverlay.hidden = false;
  els.appMenuOverlay.setAttribute("aria-hidden", "false");
  window.requestAnimationFrame(() => {
    els.appMenuOverlay.classList.add("is-open");
  });
}

function closeAppMenu() {
  state.menuOpen = false;
  els.appMenuOverlay.classList.remove("is-open");
  els.appMenuOverlay.setAttribute("aria-hidden", "true");
  window.clearTimeout(appMenuHideTimer);
  appMenuHideTimer = window.setTimeout(() => {
    if (state.menuOpen) return;
    els.appMenuOverlay.hidden = true;
  }, 240);
}

function appMenuItems() {
  return [
    {
      id: "home",
      label: "Home",
      meta: "Landing page",
      active: state.route === "home",
      action: () => setRoute("home")
    },
    ...datasetOptions().map((dataset) => ({
      id: dataset.id,
      label: dataset.label || dataset.id,
      meta: `${dataset.count} scenes · ${displayTaskLabelForDataset(dataset.id, dataset.taskType)}`,
      active: state.route === "dataset" && state.datasetId === dataset.id,
      action: () => {
        closeViewerOverlay({ updateHash: false });
        routeDataset(dataset.id);
      }
    })),
    {
      id: "project",
      label: "Visit Project",
      meta: "",
      active: false,
      href: "https://triffid-project.eu/",
      external: true
    }
  ];
}

function renderAppMenu() {
  if (!els.appMenuNav) return;
  const fragment = document.createDocumentFragment();
  const footerFragment = document.createDocumentFragment();
  appMenuItems().forEach((item) => {
    const entry = document.createElement(item.href ? "a" : "button");
    entry.className = `app-menu-link${item.active ? " is-active" : ""}`;
    entry.innerHTML = item.external
      ? `<strong>${item.label}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"></path></svg></strong>${item.meta ? `<span>${item.meta}</span>` : ""}`
      : `<strong>${item.label}</strong>${item.meta ? `<span>${item.meta}</span>` : ""}`;
    if (item.href) {
      entry.href = item.href;
      entry.target = "_blank";
      entry.rel = "noreferrer";
    } else {
      entry.type = "button";
      entry.addEventListener("click", () => {
        closeAppMenu();
        item.action();
      });
    }
    if (item.external) {
      footerFragment.append(entry);
    } else {
      fragment.append(entry);
    }
  });
  els.appMenuNav.replaceChildren(fragment);
  const footerEntries = [...footerFragment.childNodes];
  const themeButton = els.menuThemeToggle;
  if (themeButton?.parentElement) {
    themeButton.parentElement.replaceChildren(...footerEntries, themeButton);
  }
}

function currentScene() {
  return visibleScenes()[state.sceneIndex];
}

function currentDataset() {
  return data.datasets?.find((dataset) => dataset.id === state.datasetId) || null;
}

function resolveViewerReleaseBase(datasetId, fileName) {
  if (datasetId === "DFire") return releaseBases.coreDFire;
  if (datasetId === "HAZMAT") return releaseBases.coreHazmat;
  if (datasetId === "Inc1M") return releaseBases.coreInc1M;
  return viewerCoreOverflowAssets[datasetId]?.has(fileName)
    ? releaseBases.coreOverflow
    : releaseBases.core;
}

function alternateViewerReleaseBase(primaryBase) {
  if (primaryBase === releaseBases.core) return releaseBases.coreOverflow;
  if (primaryBase === releaseBases.coreOverflow) return releaseBases.core;
  return "";
}

function sameOriginSegmentationPredictionJsonPath(datasetId, modelId, fileName) {
  if (!sameOriginSegmentationJsonDatasets.has(datasetId)) return "";
  return `published-json/${datasetId}/${modelId}/visualised_samples_with_json/${fileName}`;
}

function normalizeAssetUrl(path) {
  if (!path) return "";
  try {
    return new URL(path, window.location.href).href;
  } catch {
    return path;
  }
}

function imageMatchesAssetCandidates(img, candidates = []) {
  if (!img) return false;
  const current = normalizeAssetUrl(img.currentSrc || img.src || img.getAttribute("src") || "");
  if (!current) return false;
  return candidates.some((candidate) => normalizeAssetUrl(candidate) === current);
}

function datasetDisplayName(datasetId = state.datasetId) {
  return datasetDescriptions[datasetId]?.title
    || data.datasets?.find((dataset) => dataset.id === datasetId)?.name
    || datasetId;
}

function currentTaskType(scene = currentScene()) {
  return scene?.taskType || currentDataset()?.taskType || "object-detection";
}

function isSegmentationScene(scene = currentScene()) {
  return currentTaskType(scene) === "semantic-segmentation";
}

function datasetModels(datasetId = state.datasetId) {
  const dataset = data.datasets?.find((item) => item.id === datasetId);
  if (!dataset) return data.models;
  const modelIds = new Set(dataset.modelIds || []);
  return data.models.filter((model) => modelIds.has(model.id));
}

function formatTaskType(taskType) {
  return data.taskTypes?.find((item) => item.id === taskType)?.name || taskType.replace(/-/g, " ");
}

function displayTaskLabelForDataset(datasetId = state.datasetId, fallbackTaskType = currentDataset()?.taskType || "object-detection") {
  return datasetDescriptions[datasetId]?.task || formatTaskType(fallbackTaskType);
}

function formatSceneTitle(title = "") {
  return title.replace(/^(scene|image)\s+/i, "").trim();
}

function round(value, places = 0) {
  const factor = 10 ** places;
  return Math.round(value * factor) / factor;
}

function formatPixels(value) {
  if (!Number.isFinite(value)) return "--";
  if (value >= 1_000_000) return `${round(value / 1_000_000, 1)}M`;
  if (value >= 1_000) return `${round(value / 1_000, 1)}K`;
  return String(Math.round(value));
}

const tooltipClassMetadata = {
  "object-detection": {
    pedestrian: { label: "Pedestrian", color: "#FF69B4", iconName: "tabler:user" },
    corrosive: { label: "Corrosive", color: "#FFD60A", iconName: "tabler:test-pipe-2" },
    dangerous: { label: "Dangerous", color: "#00FFE6", iconName: "tabler:alert-triangle" },
    explosive: { label: "Explosive", color: "#FF1744", iconName: "tabler:alert-octagon" },
    fire: { label: "Fire", color: "#FF5A36", iconName: "tabler:flame" },
    flammable: { label: "Flammable", color: "#39FF14", iconName: "tabler:flame" },
    "flammable-solid": { label: "Flammable Solid", color: "#0047FF", iconName: "tabler:flame" },
    "infectious-substance": { label: "Infectious Substance", color: "#FFB300", iconName: "tabler:biohazard" },
    "inhalation-hazard": { label: "Inhalation Hazard", color: "#FF69B4", iconName: "tabler:mask" },
    "non-flammable-gas": { label: "Non Flammable Gas", color: "#FFD60A", iconName: "tabler:wind" },
    "organic-peroxide": { label: "Organic Peroxide", color: "#00FFE6", iconName: "tabler:flask" },
    oxygen: { label: "Oxygen", color: "#FF1744", iconName: "tabler:wind" },
    poison: { label: "Poison", color: "#8A00FF", iconName: "tabler:skull" },
    radioactive: { label: "Radioactive", color: "#39FF14", iconName: "tabler:radioactive" },
    smoke: { label: "Smoke", color: "#7C3AED", iconName: "tabler:cloud" },
    "spontaneously-combustible": { label: "Spontaneously Combustible", color: "#FFB300", iconName: "tabler:flame" }
  },
  FloodNetPlus: {
    background: { label: "Background", color: "#000000", iconName: "tabler:minus", hidden: true },
    "building-flooded": { label: "Building Flooded", color: "#00FFD1", iconName: "tabler:building" },
    "building-non-flooded": { label: "Building Non-Flooded", color: "#FF1744", iconName: "tabler:building" },
    grass: { label: "Grass", color: "#39FF14", iconName: "tabler:plant-2" },
    pool: { label: "Pool", color: "#4B0082", iconName: "tabler:pool" },
    "road-flooded": { label: "Road Flooded", color: "#8A00FF", iconName: "tabler:road" },
    "road-non-flooded": { label: "Road Non-Flooded", color: "#FFB300", iconName: "tabler:road" },
    tree: { label: "Tree", color: "#006400", iconName: "tabler:tree" },
    vehicle: { label: "Vehicle", color: "#FF00D4", iconName: "tabler:car" },
    water: { label: "Water", color: "#0047FF", iconName: "tabler:droplet" }
  },
  RescueNet: {
    background: { label: "Background", color: "#000000", iconName: "tabler:minus", hidden: true },
    "building-major-damage": { label: "Building Major Damage", color: "#FF6D00", iconName: "tabler:building" },
    "building-minor-damage": { label: "Building Minor Damage", color: "#FFD600", iconName: "tabler:building" },
    "building-no-damage": { label: "Building No Damage", color: "#00E676", iconName: "tabler:building" },
    "building-total-destruction": { label: "Building Destroyed", color: "#FF0000", iconName: "tabler:building" },
    pool: { label: "Pool", color: "#4B0082", iconName: "tabler:pool" },
    "road-blocked": { label: "Road Blocked", color: "#B6FF00", iconName: "tabler:road-block" },
    "road-clear": { label: "Road Clear", color: "#C77DFF", iconName: "tabler:road" },
    tree: { label: "Tree", color: "#006400", iconName: "tabler:tree" },
    vehicle: { label: "Vehicle", color: "#FF00D4", iconName: "tabler:car" },
    water: { label: "Water", color: "#0047FF", iconName: "tabler:droplet" }
  },
  Inc1M: {
    "aerial-vehicle": { label: "Aerial Vehicle", color: "#F08080", iconName: "tabler:plane" },
    "army-vehicle": { label: "Army Vehicle", color: "#F08080", iconName: "tabler:shield" },
    bag: { label: "Bag", color: "#FFE4B6", iconName: "tabler:briefcase" },
    barrier: { label: "Barrier", color: "#8B008B", iconName: "tabler:barrier-block" },
    bicycle: { label: "Bicycle", color: "#FFA503", iconName: "tabler:bike" },
    boat: { label: "Boat", color: "#1FB3AB", iconName: "tabler:ship" },
    boot: { label: "Boot", color: "#FF8C03", iconName: "tabler:boot" },
    building: { label: "Building", color: "#BDB76B", iconName: "tabler:building" },
    "burnt-grass": { label: "Burnt Grass", color: "#8B0000", iconName: "tabler:plant-2" },
    "burnt-plant": { label: "Burnt Plant", color: "#A52B2A", iconName: "tabler:plant-2" },
    "burnt-tree": { label: "Burnt Tree", color: "#800000", iconName: "tabler:tree" },
    chainsaw: { label: "Chainsaw", color: "#FF6AB4", iconName: "tabler:tool" },
    citizen: { label: "Citizen", color: "#9371DC", iconName: "tabler:user" },
    "civilian-vehicle": { label: "Civilian Vehicle", color: "#DAA521", iconName: "tabler:car" },
    cone: { label: "Cone", color: "#7DFC01", iconName: "tabler:cone-2" },
    debris: { label: "Debris", color: "#DA70D6", iconName: "tabler:alert-circle" },
    "destroyed-building": { label: "Destroyed Building", color: "#CD5C5D", iconName: "tabler:building" },
    "destroyed-vehicle": { label: "Destroyed Vehicle", color: "#E9967A", iconName: "tabler:car-crane" },
    "dirt-road": { label: "Dirt Road", color: "#DEB988", iconName: "tabler:road" },
    door: { label: "Door", color: "#B0C5DE", iconName: "tabler:door" },
    "dry-grass": { label: "Dry Grass", color: "#D2B48C", iconName: "tabler:plant-2" },
    "dry-plant": { label: "Dry Plant", color: "#808000", iconName: "tabler:plant-2" },
    "dry-tree": { label: "Dry Tree", color: "#A0522D", iconName: "tabler:tree" },
    excavator: { label: "Excavator", color: "#BB55D3", iconName: "tabler:bulldozer" },
    extinguisher: { label: "Extinguisher", color: "#8B0000", iconName: "tabler:fire-extinguisher" },
    fence: { label: "Fence", color: "#696969", iconName: "tabler:fence" },
    "fire-hose": { label: "Fire Hose", color: "#708191", iconName: "tabler:tool" },
    "fire-truck": { label: "Fire Truck", color: "#ADD8E6", iconName: "tabler:firetruck" },
    "first-responder": { label: "First Responder", color: "#FF6447", iconName: "tabler:users" },
    flame: { label: "Flame", color: "#D3691E", iconName: "tabler:flame" },
    furniture: { label: "Furniture", color: "#F0F0D9", iconName: "tabler:armchair-2" },
    glove: { label: "Glove", color: "#6B5ACD", iconName: "tabler:hand-stop" },
    "green-grass": { label: "Green Grass", color: "#9ACD33", iconName: "tabler:plant-2" },
    "green-plant": { label: "Green Plant", color: "#02FF7F", iconName: "tabler:plant-2" },
    "green-tree": { label: "Green Tree", color: "#238B23", iconName: "tabler:tree" },
    helmet: { label: "Helmet", color: "#008080", iconName: "tabler:helmet" },
    "hole-in-the-ground": { label: "Hole in the Ground", color: "#40E0D0", iconName: "tabler:circle-dashed" },
    ladder: { label: "Ladder", color: "#3BB371", iconName: "tabler:ladder" },
    mask: { label: "Mask", color: "#4682B4", iconName: "tabler:mask" },
    "military-personnel": { label: "Military Personnel", color: "#02FFFF", iconName: "tabler:users" },
    mud: { label: "Mud", color: "#CD853F", iconName: "tabler:mood-empty" },
    pavement: { label: "Pavement", color: "#808080", iconName: "tabler:road" },
    pole: { label: "Pole", color: "#6B8E24", iconName: "tabler:line-dashed" },
    "police-vehicle": { label: "Police Vehicle", color: "#2090FF", iconName: "tabler:car" },
    "protective-glasses": { label: "Protective Glasses", color: "#EE83EE", iconName: "tabler:eyeglass-2" },
    road: { label: "Road", color: "#FF1393", iconName: "tabler:road" },
    scba: { label: "SCBA", color: "#038B8B", iconName: "tabler:shield" },
    shovel: { label: "Shovel", color: "#DDA1DE", iconName: "tabler:shovel" },
    smoke: { label: "Smoke", color: "#B22322", iconName: "tabler:cloud" },
    stairs: { label: "Stairs", color: "#F5A560", iconName: "tabler:stairs" },
    tank: { label: "Tank", color: "#5F9FA0", iconName: "tabler:tank" },
    tower: { label: "Tower", color: "#483E8C", iconName: "tabler:building-lighthouse" },
    wall: { label: "Wall", color: "#FA8172", iconName: "tabler:wall" },
    water: { label: "Water", color: "#87CEFA", iconName: "tabler:droplet" },
    window: { label: "Window", color: "#4169E2", iconName: "tabler:window" }
  }
};

function normalizeClassKey(value = "") {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}

function formatClassLabel(className = "") {
  return String(className)
    .replace(/[_-]+/g, " ")
    .replace(/\bscba\b/gi, "SCBA")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
}

function classTooltipMetadata(className, scene = currentScene()) {
  const normalizedKey = normalizeClassKey(className);
  const datasetMeta = tooltipClassMetadata[scene?.dataset]?.[normalizedKey];
  const genericDetectionMeta = tooltipClassMetadata["object-detection"]?.[normalizedKey];
  const resolvedMeta = datasetMeta || genericDetectionMeta;
  return {
    key: normalizedKey,
    label: resolvedMeta?.label || formatClassLabel(className),
    color: resolvedMeta?.color || null,
    iconName: resolvedMeta?.iconName || "tabler:package",
    hidden: Boolean(resolvedMeta?.hidden)
  };
}

function createTooltipIconElement(iconName, color) {
  const wrapper = document.createElement("span");
  wrapper.className = "segmentation-mask-icon";
  wrapper.style.color = color;
  wrapper.setAttribute("aria-hidden", "true");

  if (typeof window.createIconifyIcon === "function") {
    const iconNode = window.createIconifyIcon(iconName, { width: 16, height: 16, color });
    wrapper.append(iconNode);
    return wrapper;
  }

  const fallback = document.createElement("span");
  fallback.className = "segmentation-mask-icon-fallback";
  fallback.textContent = "•";
  wrapper.append(fallback);
  return wrapper;
}

function readableIconColor(backgroundColor) {
  const hex = String(backgroundColor || "").replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(hex)) return "#ffffff";
  const red = Number.parseInt(hex.slice(0, 2), 16);
  const green = Number.parseInt(hex.slice(2, 4), 16);
  const blue = Number.parseInt(hex.slice(4, 6), 16);
  const luminance = ((0.299 * red) + (0.587 * green) + (0.114 * blue)) / 255;
  return luminance > 0.62 ? "#13202d" : "#ffffff";
}

function createLegendIconElement(iconName, color) {
  const wrapper = document.createElement("span");
  wrapper.className = "class-swatch-icon";
  wrapper.setAttribute("aria-hidden", "true");

  if (typeof window.createIconifyIcon === "function") {
    const iconNode = window.createIconifyIcon(iconName, {
      width: 11,
      height: 11,
      color
    });
    wrapper.append(iconNode);
    return wrapper;
  }

  wrapper.textContent = "•";
  return wrapper;
}

function sceneClassLegend(scene = currentScene()) {
  if (isSegmentationScene(scene)) {
    return scene?.classLegend || data.classes?.["semantic-segmentation"] || [];
  }
  const detectionLegend = data.classes?.["object-detection"] || [];
  if (scene?.classLegend?.length) return scene.classLegend;
  if (scene?.classNames?.length) {
    const sceneClassNames = new Set(scene.classNames);
    return detectionLegend.filter((item) => sceneClassNames.has(item.className || item.name));
  }
  return detectionLegend;
}

function detectionClassColor(className, scene = currentScene()) {
  const tooltipMeta = classTooltipMetadata(className, scene);
  if (tooltipMeta.color) return tooltipMeta.color;
  const legendEntry = sceneClassLegend(scene).find((item) => (item.className || item.name) === className);
  if (legendEntry?.color) return legendEntry.color;
  const fallbackEntry = (data.classes?.["object-detection"] || []).find((item) => (item.className || item.name) === className);
  return fallbackEntry?.color || groundTruthColor;
}

function datasetOptions() {
  if (Array.isArray(data.datasets) && data.datasets.length) {
    return [...data.datasets]
      .sort((a, b) => {
        if (a.id === "Inc1M" && b.id !== "Inc1M") return -1;
        if (b.id === "Inc1M" && a.id !== "Inc1M") return 1;
        return 0;
      })
      .map((dataset) => ({
        id: dataset.id,
        label: dataset.name || dataset.id,
        count: dataset.sceneCount,
        taskType: dataset.taskType,
        taskTypes: [dataset.taskType]
      }));
  }
  return availableDatasets.map((datasetId) => {
    const scenes = data.scenes.filter((scene) => scene.dataset === datasetId);
    const taskTypes = [...new Set(scenes.map((scene) => scene.taskType).filter(Boolean))];
    return {
      id: datasetId,
      label: datasetId,
      count: scenes.length,
      taskType: taskTypes[0] || "object-detection",
      taskTypes
    };
  });
}

function renderRouteChrome() {
  document.body.dataset.route = state.route;
  if (els.landingPage) els.landingPage.hidden = state.route !== "home";
  if (els.datasetPage) els.datasetPage.hidden = state.route !== "dataset";
  if (els.viewerOverlay) {
    els.viewerOverlay.hidden = !(state.route === "dataset" && state.viewerOpen);
    els.viewerOverlay.setAttribute("aria-hidden", String(!(state.route === "dataset" && state.viewerOpen)));
  }
  updatePageScrollLock();
}

function landingDatasetCards() {
  return datasetOptions().map((dataset) => {
    const scenes = data.scenes.filter((scene) => scene.dataset === dataset.id);
    const previewScene = scenes[0];
    const modelCount = datasetModels(dataset.id).length;
    const meta = datasetDescriptions[dataset.id] || {};

    return {
      id: dataset.id,
      title: meta.title || dataset.label || dataset.id,
      task: meta.task || formatTaskType(dataset.taskType),
      useCase: meta.useCase || "",
      summary: meta.summary || `Benchmark workspace for ${dataset.id}.`,
      sourceUrl: meta.sourceUrl || "",
      sourceLabel: meta.sourceLabel || "Dataset page",
      sampleCount: scenes.length,
      modelCount,
      previewImage: meta.previewImage || previewScene?.thumbnailImage || previewScene?.baseImage || "",
      taskType: dataset.taskType
    };
  });
}

function datasetCardMarkup(dataset) {
  return `
      <div class="dataset-card-media">
        <img alt="${dataset.title} preview" loading="lazy" decoding="async">
      </div>
      <div class="dataset-card-copy">
        <div class="dataset-card-copy-top">
          <span class="dataset-task">${dataset.task}</span>
          ${dataset.useCase ? `<span class="dataset-use-case">Application Domain: ${dataset.useCase}</span>` : ""}
          <div>
            <h3>${dataset.title}</h3>
            <p>${dataset.summary}</p>
          </div>
          <div class="dataset-meta">
            <span>${dataset.sampleCount} scenes</span>
            <span>${dataset.modelCount} models</span>
          </div>
        </div>
        <div class="dataset-actions">
          <button class="dataset-open" type="button" data-dataset-id="${dataset.id}">
            Explore demo
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>
          </button>
          <a class="dataset-source" href="${dataset.sourceUrl || "#"}" target="_blank" rel="noreferrer">
            ${dataset.sourceLabel}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M10 14 19 5M19 13v5h-5M5 10V5h5M5 19h5v-5"></path></svg>
          </a>
        </div>
      </div>
    `;
}

function buildLandingDatasetCard(dataset, { compact = false, featured = false } = {}) {
  const card = document.createElement("article");
  card.className = `dataset-card${compact ? " dataset-card-compact" : ""}${featured ? " dataset-card-featured" : ""}`;
  card.innerHTML = datasetCardMarkup(dataset);
  setImageSourceWithFallback(card.querySelector(".dataset-card-media img"), assetCandidates(dataset.previewImage));
  card.querySelector(".dataset-open")?.addEventListener("click", () => routeDataset(dataset.id));
  return card;
}

function buildPlaceholderCard(title, body) {
  const card = document.createElement("article");
  card.className = "dataset-placeholder-card";
  card.innerHTML = `
    <span class="dataset-placeholder-kicker">Planned</span>
    <strong>${title}</strong>
    <p>${body}</p>
  `;
  return card;
}

function renderLanding() {
  if (!els.datasetStructure) return;
  const datasetMap = new Map(landingDatasetCards().map((dataset) => [dataset.id, dataset]));
  const fragment = document.createDocumentFragment();

  landingCollections.forEach((collection) => {
    if (collection.hidden) return;
    const section = document.createElement("section");
    section.className = `landing-collection landing-collection-${collection.variant}`;
    section.innerHTML = `
      <div class="landing-collection-head">
        <div>
          <h3>${collection.title}</h3>
          <p>${collection.summary}</p>
        </div>
      </div>
      <div class="landing-collection-body"></div>
    `;

    const body = section.querySelector(".landing-collection-body");
    const datasets = collection.datasetIds
      .map((datasetId) => datasetMap.get(datasetId))
      .filter(Boolean);

    if (collection.variant === "featured") {
      body.classList.add("landing-collection-featured-body");
      datasets.forEach((dataset) => body.append(buildLandingDatasetCard(dataset, { compact: true })));
    } else if (collection.variant === "grid") {
      body.classList.add("landing-collection-grid-body");
      datasets.forEach((dataset) => body.append(buildLandingDatasetCard(dataset, { compact: true })));
    } else {
      body.classList.add("landing-collection-placeholder-body");
      body.append(
        buildPlaceholderCard("EO disaster mapping", "Space for future satellite segmentation and detection benchmarks."),
        buildPlaceholderCard("Wide-area monitoring", "Will host Earth observation datasets once the next benchmark group is finalized.")
      );
    }

    fragment.append(section);
  });

  els.datasetStructure.replaceChildren(fragment);
}

function datasetPageModelCount(datasetId) {
  return datasetModels(datasetId).length;
}

function datasetInstructionsMarkup({ datasetTitle, taskLabel, sceneCount, modelCount, segmentation }) {
  const viewerModeLabel = segmentation
    ? "compare model overlays, split views, focus inspection, and ground-truth segmentation masks"
    : "compare model detections, split views, focus inspection, and ground-truth bounding boxes";
  const taskSpecific = segmentation
    ? `
      <li><strong>Annotated classes:</strong> Use the classes panel on the right to inspect the incident-relevant categories present in the scene and compare model coverage against the reference annotation.</li>
      <li><strong>Ground Truth:</strong> Toggle the <strong>Ground Truth</strong> control to view the reference mask and check where each model agrees or diverges.</li>
    `
    : `
      <li><strong>Detections:</strong> Use the viewer to inspect predicted bounding boxes, class labels, and confidence values across the available models.</li>
      <li><strong>Ground Truth:</strong> Toggle the <strong>Ground Truth</strong> control to compare the model detections against the expert-annotated boxes.</li>
    `;

  return `
    <ul>
      <li><strong>Dataset overview:</strong> This page presents the curated <strong>${datasetTitle}</strong> benchmark subset with <strong>${sceneCount} scenes</strong> and <strong>${modelCount} model outputs</strong> for <strong>${taskLabel}</strong> comparison.</li>
      <li><strong>Browse scenes:</strong> Use the gallery below to scan the selected samples. The view switch lets you keep a denser grid or move to larger cards.</li>
      <li><strong>Open the viewer:</strong> Click any scene card to open the interactive viewer as an overlay without leaving the dataset page.</li>
      <li><strong>Compare results:</strong> Inside the viewer you can ${viewerModeLabel}.</li>
      ${taskSpecific}
      <li><strong>Navigate scenes:</strong> Move through the dataset with the previous and next controls inside the viewer, or close the overlay and choose another scene from the gallery.</li>
    </ul>
  `;
}

function renderDatasetPageHeader() {
  const dataset = currentDataset();
  const meta = datasetDescriptions[state.datasetId] || {};
  const scenes = visibleScenes();
  const taskLabel = meta.task || displayTaskLabelForDataset(state.datasetId, dataset?.taskType || "object-detection");
  const modelCount = datasetPageModelCount(state.datasetId);
  const datasetTitle = meta.title || dataset?.name || state.datasetId;
  const segmentation = (dataset?.taskType || "").includes("segmentation");
  const applicationDomain = meta.useCase ? `Application Domain: ${meta.useCase}` : "";

  els.datasetPageMeta.textContent = `${scenes.length} scenes · ${modelCount} models`;
  els.datasetPageTask.textContent = taskLabel;
  els.datasetPageHeading.textContent = `${datasetTitle} Gallery`;
  if (els.datasetPageDomain) els.datasetPageDomain.textContent = applicationDomain;
  els.datasetPageSummary.textContent = meta.summary || `Browse the ${state.datasetId} benchmark gallery and open any scene in the interactive comparison viewer.`;
  if (els.datasetInstructionsBody) {
    els.datasetInstructionsBody.innerHTML = datasetInstructionsMarkup({
      datasetTitle,
      taskLabel,
      sceneCount: scenes.length,
      modelCount,
      segmentation
    });
  }
  els.datasetSourceLink.href = meta.sourceUrl || "#";
}

function renderGallery() {
  if (!els.galleryGrid) return;
  const isDenseView = true;
  const scenes = visibleScenes();
  const gallerySignature = [
    state.datasetId,
    state.galleryView,
    scenes.map((scene) => scene.id || scene.imageId).join("|")
  ].join("::");

  state.galleryView = "dense";
  els.galleryGrid.classList.remove("gallery-grid-large");
  els.galleryGrid.classList.add("gallery-grid-dense");

  const syncActiveGalleryCard = () => {
    const cards = els.galleryGrid.querySelectorAll(".gallery-card");
    cards.forEach((card) => {
      const cardIndex = Number(card.dataset.sceneIndex);
      const isActive = state.viewerOpen && cardIndex === state.sceneIndex;
      card.classList.toggle("is-active", isActive);
    });
  };

  if (gallerySignature === lastGallerySignature && els.galleryGrid.childElementCount === scenes.length) {
    syncActiveGalleryCard();
    return;
  }

  const fragment = document.createDocumentFragment();

  scenes.forEach((scene, index) => {
    const card = document.createElement("button");
    const classCount = isSegmentationScene(scene)
      ? (scene.groundTruthStats?.classCount || scene.groundTruth.length)
      : scene.groundTruth.length;
    const modelCount = readyModels(scene).length;
    card.type = "button";
    card.className = `gallery-card${isDenseView ? " is-image-only" : ""}${state.viewerOpen && index === state.sceneIndex ? " is-active" : ""}`;
    card.dataset.sceneIndex = String(index);
    card.setAttribute("aria-label", `${formatSceneTitle(scene.title)}. ${scene.dimensions}. ${classCount} ${isSegmentationScene(scene) ? "classes" : "ground truth"} and ${modelCount} models.`);
    card.innerHTML = isDenseView
      ? `
        <span class="gallery-card-image">
          <img alt="${formatSceneTitle(scene.title)} preview" loading="${index < 8 ? "eager" : "lazy"}" decoding="async">
        </span>
      `
      : `
        <span class="gallery-card-image">
          <img alt="${formatSceneTitle(scene.title)} preview" loading="${index < 8 ? "eager" : "lazy"}" decoding="async">
        </span>
        <span class="gallery-card-copy">
          <strong>${formatSceneTitle(scene.title)}</strong>
          <small>${scene.dimensions}</small>
          <span class="gallery-card-meta">
            <span>${classCount} ${isSegmentationScene(scene) ? "classes" : "GT"}</span>
            <span>${modelCount} models</span>
          </span>
        </span>
      `;
    const previewImage = card.querySelector(".gallery-card-image img");
    if (previewImage) {
      previewImage.draggable = false;
      previewImage.addEventListener("dragstart", (event) => event.preventDefault());
      setImageSourceWithFallback(previewImage, assetCandidates(scene.thumbnailImage || scene.baseImage));
    }
    card.addEventListener("click", () => openViewerForScene(index));
    fragment.append(card);
  });

  els.galleryGrid.replaceChildren(fragment);
  lastGallerySignature = gallerySignature;
  syncActiveGalleryCard();
}

function visibleScenes() {
  const scenes = state.datasetId
    ? data.scenes.filter((scene) => scene.dataset === state.datasetId)
    : data.scenes;

  return scenes.filter((scene) => scene.dataset !== "Inc1M" || curatedInc1MImageIds.has(String(scene.imageId)));
}

function dfireSceneGroup(scene) {
  if (scene?.dataset !== "DFire" || isSegmentationScene(scene)) return null;
  const classes = new Set((scene.groundTruth || []).map((item) => item.className));
  if (classes.has("fire") && classes.has("smoke")) {
    return { id: "fire-smoke", label: "Fire & Smoke" };
  }
  if (classes.has("fire")) {
    return { id: "fire", label: "Fire" };
  }
  if (classes.has("smoke")) {
    return { id: "smoke", label: "Smoke" };
  }
  return { id: "other", label: "Other" };
}

function resolveAssetPath(path) {
  if (!path) return path;

  const viewerMatch = path.match(/^viewer\/([^/]+)\/(.+)$/);
  if (viewerMatch) {
    const datasetId = viewerMatch[1];
    const fileName = viewerMatch[2];
    const assetName = `viewer-${datasetId}-${fileName}`;
    const primaryBase = resolveViewerReleaseBase(datasetId, fileName);
    const primary = `${primaryBase}${assetName}`;
    const alternateBase = alternateViewerReleaseBase(primaryBase);
    return alternateBase
      ? [primary, `${alternateBase}${assetName}`]
      : primary;
  }

  const thumbMatch = path.match(/^thumbnails\/([^/]+)\/(.+)$/);
  if (thumbMatch) {
    if (thumbMatch[1] === "HAZMAT") {
      return `${releaseBases.coreHazmat}thumbnail-HAZMAT-${thumbMatch[2]}`;
    }
    return `${releaseBases.thumbnails}thumbnail-${thumbMatch[1]}-${thumbMatch[2]}`;
  }

  const segmentationGtMatch = path.match(/^([^/]+)\/([^/]+)\/samples_gt_with_json\/(.+)$/);
  if (segmentationGtMatch) {
    const isJson = /\.json$/i.test(segmentationGtMatch[3]);
    const base = isJson
      ? releaseBases.segmentationGtJson
      : segmentationGtMatch[1] === "Inc1M"
        ? releaseBases.segmentationGtInc1M
        : releaseBases.segmentationGt;
    return `${base}segment-gt-${segmentationGtMatch[1]}-${segmentationGtMatch[2]}-${segmentationGtMatch[3]}`;
  }

  const sharedSegmentationGtMatch = path.match(/^([^/]+)\/shared_samples_gt_with_json\/(.+)$/);
  if (sharedSegmentationGtMatch) {
    const isJson = /\.json$/i.test(sharedSegmentationGtMatch[2]);
    const base = isJson
      ? releaseBases.segmentationGtJson
      : sharedSegmentationGtMatch[1] === "Inc1M"
        ? releaseBases.segmentationGtInc1M
        : releaseBases.segmentationGt;
    return `${base}segment-gt-${sharedSegmentationGtMatch[1]}-shared-${sharedSegmentationGtMatch[2]}`;
  }

  const segmentationPredMatch = path.match(/^([^/]+)\/([^/]+)\/visualised_samples_with_json\/(.+)$/);
  if (segmentationPredMatch) {
    if (segmentationPredMatch[1] === "HAZMAT" && !/\.json$/i.test(segmentationPredMatch[3])) {
      return `${releaseBases.hazmat}prediction-HAZMAT-${segmentationPredMatch[2]}-${segmentationPredMatch[3]}`;
    }
    const isJson = /\.json$/i.test(segmentationPredMatch[3]);
    if (isJson) {
      const sameOriginPath = sameOriginSegmentationPredictionJsonPath(
        segmentationPredMatch[1],
        segmentationPredMatch[2],
        segmentationPredMatch[3]
      );
      const releasePath = `${releaseBases.segmentationPredJson}segment-pred-${segmentationPredMatch[1]}-${segmentationPredMatch[2]}-${segmentationPredMatch[3]}`;
      return sameOriginPath ? [sameOriginPath, releasePath] : releasePath;
    }
    const base = isJson
      ? releaseBases.segmentationPredJson
      : segmentationPredMatch[1] === "Inc1M"
        ? releaseBases.segmentationPredInc1M
        : releaseBases.segmentationPred;
    return `${base}segment-pred-${segmentationPredMatch[1]}-${segmentationPredMatch[2]}-${segmentationPredMatch[3]}`;
  }

  return path;
}

function uniqueAssetCandidates(paths = []) {
  return [...new Set(paths.filter(Boolean))];
}

function assetCandidates(path) {
  if (!path) return [];
  const resolved = resolveAssetPath(path);
  return uniqueAssetCandidates([
    ...(Array.isArray(resolved) ? resolved : [resolved]),
    path
  ]);
}

function sceneBaseImageCandidates(scene) {
  return uniqueAssetCandidates([
    ...assetCandidates(scene?.baseImage),
    ...assetCandidates(scene?.thumbnailImage),
    ...assetCandidates(scene?.groundTruthImage),
    ...assetCandidates(scene?.sourceImage)
  ]);
}

async function fetchJsonWithFallback(path) {
  const candidates = assetCandidates(path);
  let lastError = null;

  for (const candidate of candidates) {
    try {
      const response = await fetch(candidate);
      if (!response.ok) throw new Error(`Failed to load ${candidate}`);
      return await response.json();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error(`Failed to load ${path}`);
}

function setImageSourceWithFallback(img, sources) {
  const candidates = uniqueAssetCandidates(Array.isArray(sources) ? sources : [sources]);
  if (!img || !candidates.length) return;

  const applyCandidate = (index) => {
    img.dataset.assetCandidateIndex = String(index);
    img.src = candidates[index];
  };

  img.addEventListener("error", () => {
    const nextIndex = Number(img.dataset.assetCandidateIndex || 0) + 1;
    if (nextIndex < candidates.length) {
      applyCandidate(nextIndex);
      return;
    }
    img.dataset.assetLoadFailed = "true";
  });

  applyCandidate(0);
}

function sceneBaseImage(scene) {
  return sceneBaseImageCandidates(scene)[0] || "";
}

function readyModels(scene = currentScene()) {
  if (!scene) return [];
  return datasetModels(scene.dataset).filter((model) => Array.isArray(scene.predictions?.[model.id]));
}

function visibleSelectedModels(scene = currentScene()) {
  const sceneModelIds = new Set(readyModels(scene).map((model) => model.id));
  return datasetModels(scene.dataset).filter((model) => sceneModelIds.has(model.id) && state.selected.has(model.id));
}

function displayedModels(scene = currentScene()) {
  if (state.hoveredModel) {
    const hovered = readyModels(scene).find((model) => model.id === state.hoveredModel);
    if (hovered) return [hovered];
  }
  const selectedModels = visibleSelectedModels(scene);
  if (selectedModels.length) {
    return selectedModels;
  }
  return [];
}

function summaryModels(scene = currentScene()) {
  if (state.mode === "split" || state.hoveredGroundTruth) return displayedModels(scene);
  if (state.hoveredModel) {
    const hovered = readyModels(scene).find((model) => model.id === state.hoveredModel);
    if (hovered) return [hovered];
  }
  return displayedModels(scene);
}

function effectiveHoverModel(scene = currentScene()) {
  if (state.mode === "split" || state.hoveredGroundTruth || !state.hoveredModel) return null;
  const displayedModelIds = new Set(displayedModels(scene).map((model) => model.id));
  return displayedModelIds.has(state.hoveredModel) ? state.hoveredModel : null;
}

function modelStatsForScene(scene, modelId) {
  if (isSegmentationScene(scene)) {
    return scene.sceneModelStats?.[modelId] || {
      classCount: scene.predictions?.[modelId]?.length || 0,
      labeledPixels: 0,
      coverage: 0
    };
  }
  return scene.sceneModelStats?.[modelId] || {
    count: scene.predictions?.[modelId]?.length || 0,
    maxConfidence: null,
    avgConfidence: null
  };
}

function totalPredictionCount(models, scene = currentScene()) {
  if (isSegmentationScene(scene)) {
    return models.reduce((sum, model) => sum + (modelStatsForScene(scene, model.id).classCount || 0), 0);
  }
  return models.reduce((sum, model) => sum + modelStatsForScene(scene, model.id).count, 0);
}

function uniquePredictionClassCount(models, scene = currentScene()) {
  const classIds = new Set();
  models.forEach((model) => {
    const segments = scene.predictions?.[model.id] || [];
    segments.forEach((segment) => {
      classIds.add(segment.labelIndex ?? segment.className ?? JSON.stringify(segment));
    });
  });
  return classIds.size;
}

function splitChoiceConfig(value, opposingValue, scene = currentScene()) {
  const sceneModels = readyModels(scene);
  if (value === "ground-truth") {
    return {
      value,
      label: "Ground Truth",
      showGroundTruth: true,
      models: []
    };
  }
  if (value === "all-models") {
    return {
      value,
      label: "All models",
      showGroundTruth: false,
      models: sceneModels
    };
  }
  if (value === "all-other-models") {
    const excluded = sceneModels.find((model) => model.id === opposingValue);
    const filtered = excluded ? sceneModels.filter((model) => model.id !== excluded.id) : sceneModels;
    return {
      value,
      label: "All other models",
      showGroundTruth: false,
      models: filtered.length ? filtered : sceneModels
    };
  }
  return {
    value,
    label: sceneModels.find((model) => model.id === value)?.shortName || value,
    showGroundTruth: false,
    models: sceneModels.filter((model) => model.id === value)
  };
}

function splitOptions(scene = currentScene()) {
  const sceneModels = readyModels(scene);
  return {
    gtOptions: [
      { value: "ground-truth", label: "Ground Truth" }
    ],
    modelOptions: sceneModels.map((model) => ({
      value: model.id,
      label: model.shortName
    })),
    groupOptions: [
      { value: "all-other-models", label: "All other models" },
      { value: "all-models", label: "All models" }
    ]
  };
}

function splitOptionLabel(value, scene = currentScene()) {
  const { gtOptions, groupOptions, modelOptions } = splitOptions(scene);
  return [...gtOptions, ...modelOptions, ...groupOptions].find((option) => option.value === value)?.label || value;
}

function modelsForSplitChoice(value, opposingValue, scene = currentScene()) {
  return splitChoiceConfig(value, opposingValue, scene).models;
}

function splitChoiceShowsGroundTruth(value, opposingValue, scene = currentScene()) {
  return splitChoiceConfig(value, opposingValue, scene).showGroundTruth;
}

function splitSideForModel(modelId, scene = currentScene()) {
  const left = modelsForSplitChoice(state.splitA, state.splitB, scene).some((model) => model.id === modelId);
  const right = modelsForSplitChoice(state.splitB, state.splitA, scene).some((model) => model.id === modelId);
  if (left && right) return "both sides";
  if (left) return "left side";
  if (right) return "right side";
  return "not in split";
}

function applyDefaultSplitSelection(scene = currentScene()) {
  const firstModelId = readyModels(scene)[0]?.id || "";
  state.splitA = "ground-truth";
  state.splitB = firstModelId || "all-other-models";
}

function ensureSceneState() {
  const scenes = visibleScenes();
  if (!scenes.length) return;
  if (state.sceneIndex >= scenes.length) state.sceneIndex = 0;
  const scene = currentScene();
  const sceneModelIds = new Set(readyModels(scene).map((model) => model.id));
  const validSplitValues = new Set(["ground-truth", "all-other-models", "all-models", ...sceneModelIds]);

  state.selected = new Set([...state.selected].filter((modelId) => sceneModelIds.has(modelId) || !availableModelIds.has(modelId)));

  if (state.mode === "split") {
    if (!validSplitValues.has(state.splitA)) {
      state.splitA = "ground-truth";
    }

    if (!validSplitValues.has(state.splitB)) {
      state.splitB = readyModels(scene)[0]?.id || "all-other-models";
    }

    if (!state.splitA || !state.splitB) {
      applyDefaultSplitSelection(scene);
    }
    return;
  }

  if (!validSplitValues.has(state.splitA)) {
    state.splitA = readyModels(scene)[0]?.id || "ground-truth";
  }

  if (!validSplitValues.has(state.splitB)) {
    state.splitB = "all-other-models";
  }

  if (!state.splitA && readyModels(scene)[0]) state.splitA = readyModels(scene)[0].id;
}

function normalizeHoveredModel(scene = currentScene()) {
  const sceneModelIds = new Set(readyModels(scene).map((model) => model.id));
  if (state.mode === "split") state.hoveredGroundTruth = false;
  if (!state.hoveredModel) return;
  if (!sceneModelIds.has(state.hoveredModel) || state.mode === "split") {
    state.hoveredModel = null;
  }
}

function syncHoveredModelFromPointer(scene = currentScene()) {
  if (state.mode === "split" || state.pointerX == null || state.pointerY == null) {
    state.hoveredModel = null;
    state.hoveredGroundTruth = false;
    return;
  }

  const hoveredElement = document.elementFromPoint(state.pointerX, state.pointerY);
  const gtToggle = hoveredElement?.closest?.(".gt-toggle");
  if (gtToggle && !gtToggle.disabled && !state.suppressGroundTruthHover) {
    state.hoveredGroundTruth = true;
    state.hoveredModel = null;
    return;
  }

  const modelRow = hoveredElement?.closest?.(".model-row");
  const modelId = modelRow?.dataset.modelId || null;
  const sceneModelIds = new Set(readyModels(scene).map((model) => model.id));
  state.hoveredGroundTruth = false;
  state.hoveredModel = modelId && sceneModelIds.has(modelId) ? modelId : null;
}

function updateModelHoverGlow(scene = currentScene()) {
  const activeHoverModel = effectiveHoverModel(scene);
  els.modelList.querySelectorAll(".model-row").forEach((row) => {
    row.classList.toggle("is-hovered", row.dataset.modelId === activeHoverModel);
  });
  els.toggleGroundTruth.classList.toggle("is-hovered", state.mode !== "split" && state.hoveredGroundTruth);
}

function syncPointerHoverState(scene = currentScene()) {
  const previousHoveredModel = state.hoveredModel;
  const previousHoveredGroundTruth = state.hoveredGroundTruth;
  syncHoveredModelFromPointer(scene);
  if (previousHoveredModel !== state.hoveredModel || previousHoveredGroundTruth !== state.hoveredGroundTruth) {
    state.skipNextViewerAnimation = Boolean(
      (previousHoveredModel && state.selected.has(previousHoveredModel))
      || (state.hoveredModel && state.selected.has(state.hoveredModel))
    );
    updateModelHoverGlow(scene);
    renderSummary();
    renderViewer();
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

function formatConfidence(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "";
  return `${Math.round(value * 100)}%`;
}

function segmentationPredictionJsonPath(scene, modelId) {
  if (!scene?.dataset || !modelId || !scene?.imageId) return "";
  return `${scene.dataset}/${modelId}/visualised_samples_with_json/${scene.imageId}.json`;
}

function mergeSegmentationScores(scene, modelId, prediction) {
  const sceneSegments = scene?.predictions?.[modelId];
  const predictionSegments = prediction?.segments;
  if (!sceneSegments?.length || !Array.isArray(predictionSegments)) return false;

  const scoreByKey = new Map(
    predictionSegments.map((segment) => [
      `${Number(segment.label_index)}:${segment.class_name}`,
      segment.score == null ? null : Number(segment.score)
    ])
  );

  let changed = false;
  sceneSegments.forEach((segment) => {
    const key = `${Number(segment.labelIndex)}:${segment.className}`;
    const nextScore = scoreByKey.get(key);
    if (nextScore == null || !Number.isFinite(nextScore) || segment.score === nextScore) return;
    segment.score = nextScore;
    changed = true;
  });
  return changed;
}

function ensureSegmentationScores(scene, model) {
  if (!scene || !model?.id || !isSegmentationScene(scene)) return;
  const segments = scene.predictions?.[model.id];
  if (!segments?.length || segments.some((segment) => typeof segment.score === "number")) return;

  const jsonPath = segmentationPredictionJsonPath(scene, model.id);
  if (!jsonPath) return;

  const cacheKey = `${scene.id}:${model.id}`;
  if (segmentationScoreLoads.has(cacheKey)) return;

  const load = fetchJsonWithFallback(jsonPath)
    .then((prediction) => {
      const changed = mergeSegmentationScores(scene, model.id, prediction);
      if (changed && currentScene()?.id === scene.id) {
        state.skipNextViewerAnimation = true;
        renderViewer(true);
      }
    })
    .catch(() => {
      // Keep badges useful even if the raw prediction JSON is unavailable from the current host.
    });

  segmentationScoreLoads.set(cacheKey, load);
}

function normalizeSegmentationInstances(prediction, scene) {
  if (!prediction?.instances || !scene?.width || !scene?.height) return [];

  return prediction.instances
    .map((instance, index) => {
      let xPercent = null;
      let yPercent = null;

      const anchor = Array.isArray(instance.anchor)
        ? instance.anchor.map((value) => Number(value))
        : null;
      const normalizedAnchor = Array.isArray(instance.anchor_normalized)
        ? instance.anchor_normalized.map((value) => Number(value))
        : null;

      if (normalizedAnchor?.length === 2 && normalizedAnchor.every(Number.isFinite)) {
        xPercent = normalizedAnchor[0] * 100;
        yPercent = normalizedAnchor[1] * 100;
      } else if (anchor?.length === 2 && anchor.every(Number.isFinite)) {
        xPercent = (anchor[0] / scene.width) * 100;
        yPercent = (anchor[1] / scene.height) * 100;
      } else if (Array.isArray(instance.bbox) && instance.bbox.length === 4) {
        const [x, y, width, height] = instance.bbox.map((value) => Number(value));
        xPercent = ((x + (width / 2)) / scene.width) * 100;
        yPercent = ((y + (height / 2)) / scene.height) * 100;
      }

      const polygon = Array.isArray(instance.polygon)
        ? instance.polygon
          .map((point) => Array.isArray(point) ? [Number(point[0]), Number(point[1])] : null)
          .filter((point) => point && point.every(Number.isFinite))
        : null;

      const polygons = Array.isArray(instance.polygons)
        ? instance.polygons
          .map((points) => Array.isArray(points)
            ? points
              .map((point) => Array.isArray(point) ? [Number(point[0]), Number(point[1])] : null)
              .filter((point) => point && point.every(Number.isFinite))
            : [])
          .filter((points) => points.length >= 3)
        : null;

      const segmentation = instance.segmentation && typeof instance.segmentation === "object"
        ? {
          size: Array.isArray(instance.segmentation.size) ? instance.segmentation.size.map((value) => Number(value)) : null,
          counts: instance.segmentation.counts == null ? "" : String(instance.segmentation.counts)
        }
        : null;

      const score = instance.score == null ? null : Number(instance.score);
      if (!Number.isFinite(xPercent) || !Number.isFinite(yPercent) || !Number.isFinite(score)) return null;

      return {
        id: `${instance.label_index ?? "label"}:${instance.class_name ?? "mask"}:${index}`,
        className: instance.class_name,
        labelIndex: Number(instance.label_index),
        score,
        area: Number(instance.area) || 0,
        xPercent: clamp(xPercent, 0.5, 99.5),
        yPercent: clamp(yPercent, 0.5, 99.5),
        xNormalized: clamp(xPercent / 100, 0.005, 0.995),
        yNormalized: clamp(yPercent / 100, 0.005, 0.995),
        bbox: Array.isArray(instance.bbox) && instance.bbox.length === 4
          ? instance.bbox.map((value) => Number(value))
          : null,
        type: instance.type || (segmentation?.counts ? "rle" : (polygon?.length ? "polygon" : null)),
        polygon: polygon?.length ? polygon : (polygons?.[0] || null),
        polygons: polygons?.length ? polygons : (polygon?.length ? [polygon] : null),
        segmentation
      };
    })
    .filter(Boolean)
    .sort((a, b) => (b.area || 0) - (a.area || 0));
}

function containRect(containerWidth, containerHeight, contentWidth, contentHeight) {
  if (!containerWidth || !containerHeight || !contentWidth || !contentHeight) {
    return { left: 0, top: 0, width: containerWidth || 0, height: containerHeight || 0 };
  }

  const containerRatio = containerWidth / containerHeight;
  const contentRatio = contentWidth / contentHeight;

  if (contentRatio > containerRatio) {
    const width = containerWidth;
    const height = width / contentRatio;
    return {
      left: 0,
      top: (containerHeight - height) / 2,
      width,
      height
    };
  }

  const height = containerHeight;
  const width = height * contentRatio;
  return {
    left: (containerWidth - width) / 2,
    top: 0,
    width,
    height
  };
}

function pointInPolygon(pointX, pointY, polygon = []) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    const intersects = ((yi > pointY) !== (yj > pointY))
      && (pointX < (((xj - xi) * (pointY - yi)) / ((yj - yi) || 1e-9)) + xi);
    if (intersects) inside = !inside;
  }
  return inside;
}

function decodeCompressedRle(countsText = "") {
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

function pointInRle(pointX, pointY, segmentation, width, height) {
  if (!segmentation?.counts || !width || !height) return false;

  const column = Math.floor(pointX);
  const row = Math.floor(pointY);
  if (column < 0 || column >= width || row < 0 || row >= height) return false;

  const counts = segmentation._decodedCounts || (segmentation._decodedCounts = decodeCompressedRle(segmentation.counts));
  const targetIndex = (column * height) + row;
  let cursor = 0;
  let on = false;

  for (const runLength of counts) {
    const nextCursor = cursor + runLength;
    if (targetIndex < nextCursor) return on;
    cursor = nextCursor;
    on = !on;
  }

  return false;
}

function ensureSegmentationInstances(scene, model) {
  if (!scene || !model?.id || !isSegmentationScene(scene)) return;
  if (scene.predictionInstances?.[model.id]?.length) return;

  const jsonPath = segmentationPredictionJsonPath(scene, model.id);
  if (!jsonPath) return;

  const cacheKey = `${scene.id}:${model.id}`;
  if (segmentationInstanceLoads.has(cacheKey)) return;

  const load = fetchJsonWithFallback(jsonPath)
    .then((prediction) => {
      const instances = normalizeSegmentationInstances(prediction, scene);
      if (!instances.length) return;
      if (!scene.predictionInstances) scene.predictionInstances = {};
      scene.predictionInstances[model.id] = instances;
      if (currentScene()?.id === scene.id) {
        state.skipNextViewerAnimation = true;
        renderViewer(true);
      }
    })
    .catch(() => {
      // Labels are an enhancement; keep the overlay usable if raw instances are unavailable.
    });

  segmentationInstanceLoads.set(cacheKey, load);
}

function segmentationMaskEntries(scene, model) {
  if (!scene || !model?.id) return [];
  ensureSegmentationInstances(scene, model);
  return scene.predictionInstances?.[model.id] || [];
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
  const outsideLeft = -rect.width + 1.2;
  const outsideTop = -rect.height - 0.8;
  const outsideRight = 98.8;
  const outsideBottom = 98.8;
  const selected = {
    left: clamp(rect.boxLeft, outsideLeft, outsideRight),
    top: clamp(rect.boxTop - rect.height - marginY + (stackIndex * verticalStep), outsideTop, outsideBottom),
    width: rect.width,
    height: rect.height
  };
  occupiedLabels.push(selected);
  return selected;
}

function createImageLayer(src, className) {
  const img = document.createElement("img");
  img.className = className;
  img.alt = "";
  img.draggable = false;
  img.decoding = "async";
  img.loading = "eager";
  img.fetchPriority = "high";
  setImageSourceWithFallback(img, Array.isArray(src) ? src : [src]);
  return img;
}

function createBaseImageLayer(scene) {
  const img = createImageLayer(sceneBaseImageCandidates(scene), "base-layer");
  const queueFocusLensRefresh = () => {
    if (state.mode !== "focus") return;
    window.cancelAnimationFrame(focusLensRefreshFrame);
    focusLensRefreshFrame = window.requestAnimationFrame(() => {
      renderFocusLens();
    });
  };
  const reveal = () => {
    img.classList.add("is-ready");
    img.parentElement?.classList.remove("is-loading");
    queueFocusLensRefresh();
  };
  const handleError = () => {
    img.parentElement?.classList.remove("is-loading");
    queueFocusLensRefresh();
  };

  img.addEventListener("load", reveal);
  img.addEventListener("error", handleError);
  if (img.complete && img.naturalWidth > 0) {
    queueMicrotask(reveal);
  }
  return img;
}

function queueFocusLensRefresh() {
  if (state.mode !== "focus") return;
  window.cancelAnimationFrame(focusLensRefreshFrame);
  focusLensRefreshFrame = window.requestAnimationFrame(() => {
    renderFocusLens();
  });
}

function createSegmentationImageLayer(imagePath, className = "segmentation-visual") {
  const img = createImageLayer(assetCandidates(imagePath), className);
  img.addEventListener("load", () => {
    img.classList.add("is-ready");
  });
  if (img.complete && img.naturalWidth > 0) {
    queueMicrotask(() => {
      img.classList.add("is-ready");
    });
  }
  return img;
}

function preloadImage(src) {
  if (!src) return null;
  const candidates = assetCandidates(src);
  const cacheKey = candidates.join("|");
  if (preloadedImages.has(cacheKey)) return preloadedImages.get(cacheKey);

  const preload = new Promise((resolve) => {
    const tryCandidate = (index) => {
      const candidate = candidates[index];
      if (!candidate) {
        resolve(candidates[0] || src);
        return;
      }

      const image = new Image();
      image.decoding = "async";
      image.loading = "eager";
      image.addEventListener("load", async () => {
        if (typeof image.decode === "function" && image.naturalWidth > 0) {
          try {
            await image.decode();
          } catch {
            // Some browsers reject decode() for cached or already-decoded images.
          }
        }
        resolve(candidate);
      }, { once: true });
      image.addEventListener("error", () => {
        tryCandidate(index + 1);
      }, { once: true });
      image.src = candidate;
      if (image.complete && image.naturalWidth > 0) {
        queueMicrotask(async () => {
          if (typeof image.decode === "function") {
            try {
              await image.decode();
            } catch {
              // Some browsers reject decode() for cached or already-decoded images.
            }
          }
          resolve(candidate);
        });
      }
    };

    tryCandidate(0);
  });

  preloadedImages.set(cacheKey, preload);
  return preload;
}

function preloadSceneSegmentationAssets(scene = currentScene()) {
  if (!scene || !isSegmentationScene(scene)) return;
  window.clearTimeout(preloadSceneTimer);
  preloadSceneTimer = window.setTimeout(() => {
    const urls = [
      scene.groundTruthImage,
      ...Object.values(scene.predictionImages || {})
    ].filter(Boolean);

    urls.forEach((url) => preloadImage(url));
  }, 120);
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
  const classColor = detectionClassColor(detection.box.className, detection.scene);
  const highlightColor = classColor || (detection.kind === "ground-truth" ? groundTruthColor : detection.model?.color || groundTruthColor);
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
    const classColor = detectionClassColor(box.className, scene);
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
    boxEl.style.setProperty("--box-color", classColor);
    boxEl.style.setProperty("--box-fill", withAlpha(classColor, options.kind === "ground-truth" ? 0.08 : 0.14));
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
      label.style.setProperty("--label-color", options.kind === "ground-truth" ? groundTruthColor : modelColor);
      label.style.setProperty("--label-fill", withAlpha(options.kind === "ground-truth" ? groundTruthColor : modelColor, options.kind === "ground-truth" ? 0.9 : 0.84));
      const modelLabelText = options.kind === "ground-truth" ? "GT" : compactModelLabel(options.model?.shortName || options.model?.name || "Model");
      const chosenPosition = chooseLabelPosition(scene, box, options.kind, modelLabelText, labelText, occupiedLabels);
      label.style.left = `${chosenPosition.left}%`;
      label.style.top = `${chosenPosition.top}%`;
      if (options.kind === "ground-truth") {
        label.textContent = labelText;
      } else {
        label.classList.add("is-detection-chip");
        const classMeta = classTooltipMetadata(box.className, scene);

        const modelLine = document.createElement("span");
        modelLine.className = "box-label-model";
        modelLine.textContent = modelLabelText;

        const detailRow = document.createElement("span");
        detailRow.className = "box-label-detail-row";

        const detailLine = document.createElement("span");
        detailLine.className = "box-label-detail";
        detailLine.textContent = classMeta.label;

        const confidenceLine = document.createElement("span");
        confidenceLine.className = "box-label-confidence";
        confidenceLine.textContent = confidence;

        detailRow.append(createTooltipIconElement(classMeta.iconName, classColor), detailLine, confidenceLine);

        const meter = document.createElement("span");
        meter.className = "box-label-meter";
        const meterFill = document.createElement("span");
        meterFill.className = "box-label-meter-fill";
        meterFill.style.width = `${clamp((box.confidence || 0) * 100, 4, 100)}%`;
        meter.append(meterFill);

        label.append(modelLine, detailRow, meter);
      }
      boxEl.append(label);
    }
    layer.append(boxEl);
  });

  const badgeTitle = options.kind === "ground-truth"
    ? "Ground Truth"
    : (options.model?.shortName || options.model?.name || "Prediction");
  if (options.showCornerBadge !== false && badgeTitle) {
    const badge = document.createElement("div");
    badge.className = `segmentation-badge${options.kind === "ground-truth" ? " is-ground-truth" : ""}`;
    if (options.model?.color) {
      badge.style.setProperty("--badge-accent", options.model.color);
    }

    const title = document.createElement("div");
    title.className = "segmentation-badge-title";
    title.textContent = badgeTitle;
    badge.append(title);
    layer.append(badge);
  }

  return layer;
}

function createSegmentationLayer(scene, imagePath, options = {}) {
  const layer = document.createElement("div");
  layer.className = `box-layer segmentation-layer${options.kind === "ground-truth" ? " is-ground-truth" : ""}`;
  layer.dataset.kind = options.kind || "prediction";
  if (options.model?.id) layer.dataset.modelId = options.model.id;
  const targetOpacity = options.opacity ?? 1;
  layer.dataset.targetOpacity = String(targetOpacity);
  layer.dataset.waitForImage = "true";
  layer.style.opacity = "0";
  if (options.isDimmed) layer.classList.add("is-dimmed");
  if (options.isEmphasized) layer.classList.add("is-emphasized");
  layer.style.zIndex = String(options.zIndex || 2);

  const img = createSegmentationImageLayer(imagePath);
  const reveal = () => {
    layer.dataset.waitForImage = "false";
    window.requestAnimationFrame(() => {
      layer.style.opacity = layer.dataset.pendingOpacity || layer.dataset.targetOpacity || String(targetOpacity);
      delete layer.dataset.pendingOpacity;
      queueFocusLensRefresh();
    });
  };
  img.addEventListener("load", reveal, { once: true });
  img.addEventListener("error", () => {
    layer.dataset.waitForImage = "false";
    layer.style.opacity = "0";
    queueFocusLensRefresh();
  }, { once: true });
  if (img.complete && img.naturalWidth > 0) queueMicrotask(reveal);
  if (options.isDimmed) img.classList.add("is-dimmed");
  if (options.isEmphasized) img.classList.add("is-emphasized");
  layer.append(img);

  const maskLabels = options.maskLabels || [];
  if (options.kind !== "ground-truth" && maskLabels.length) {
    const labelLayer = document.createElement("div");
    labelLayer.className = "segmentation-mask-label-layer";
    const callouts = [];

    maskLabels.forEach((entry) => {
      const classMeta = classTooltipMetadata(entry.className, scene);
      if (classMeta.hidden) return;

      const callout = document.createElement("div");
      callout.className = "segmentation-mask-callout";
      callout.dataset.instanceId = entry.id;
      const classColor = classMeta.color || detectionClassColor(entry.className, scene);
      callout.style.setProperty("--mask-label-accent", classColor);

      const connector = document.createElement("div");
      connector.className = "segmentation-mask-connector";

      const anchor = document.createElement("div");
      anchor.className = "segmentation-mask-anchor";

      const pill = document.createElement("div");
      pill.className = "segmentation-mask-label";
      pill.setAttribute("aria-label", `${classMeta.label} ${formatConfidence(entry.score)}`.trim());

      const mainRow = document.createElement("div");
      mainRow.className = "segmentation-mask-label-main";

      const title = document.createElement("span");
      title.className = "segmentation-mask-title";
      title.textContent = classMeta.label;

      const confidence = document.createElement("span");
      confidence.className = "segmentation-mask-confidence";
      confidence.textContent = formatConfidence(entry.score);

      mainRow.append(createTooltipIconElement(classMeta.iconName, classColor), title, confidence);
      pill.append(mainRow);

      if (typeof entry.score === "number" && Number.isFinite(entry.score)) {
        const meter = document.createElement("div");
        meter.className = "segmentation-mask-meter";
        const meterFill = document.createElement("span");
        meterFill.className = "segmentation-mask-meter-fill";
        meterFill.style.width = `${clamp(entry.score * 100, 4, 100)}%`;
        meter.append(meterFill);
        pill.append(meter);
      }

      callout.append(connector, anchor, pill);
      labelLayer.append(callout);
      callouts.push({ callout, connector, pill, entry });
    });

    layer.append(labelLayer);
    const applyCalloutLayout = () => {
      const imageBox = containRect(layer.clientWidth, layer.clientHeight, scene.width, scene.height);
      callouts.forEach(({ callout, connector, pill, entry }) => {
        const anchorX = imageBox.left + (entry.xNormalized * imageBox.width);
        const anchorY = imageBox.top + (entry.yNormalized * imageBox.height);

        callout.style.left = `${anchorX}px`;
        callout.style.top = `${anchorY}px`;

        const pillWidth = pill.offsetWidth;
        const pillHeight = pill.offsetHeight;
        const preferredOffsetX = entry.xNormalized > 0.58 ? -(pillWidth + 18) : 18;
        const preferredOffsetY = entry.yNormalized > 0.7 ? -(pillHeight + 18) : -(pillHeight + 16);
        const minOffsetX = imageBox.left + 10 - anchorX;
        const maxOffsetX = imageBox.left + imageBox.width - pillWidth - 10 - anchorX;
        const minOffsetY = imageBox.top + 10 - anchorY;
        const maxOffsetY = imageBox.top + imageBox.height - pillHeight - 10 - anchorY;
        const offsetX = clamp(preferredOffsetX, minOffsetX, maxOffsetX);
        const offsetY = clamp(preferredOffsetY, minOffsetY, maxOffsetY);

        pill.style.setProperty("--mask-label-x", `${offsetX}px`);
        pill.style.setProperty("--mask-label-y", `${offsetY}px`);

        const attachX = offsetX >= 0 ? offsetX + 10 : offsetX + pillWidth - 10;
        const attachY = offsetY >= 0 ? offsetY + 10 : offsetY + pillHeight - 10;
        const length = Math.hypot(attachX, attachY);
        const angle = Math.atan2(attachY, attachX) * (180 / Math.PI);

        connector.style.width = `${length.toFixed(2)}px`;
        connector.style.transform = `rotate(${angle.toFixed(2)}deg)`;
      });
      return imageBox;
    };

    let activeCalloutId = null;
    const setActiveCallout = (instanceId) => {
      if (activeCalloutId === instanceId) return;
      activeCalloutId = instanceId;
      callouts.forEach(({ callout, entry }) => {
        callout.classList.toggle("is-active", entry.id === instanceId);
      });
    };

    const hitTestInstance = (sceneX, sceneY) => {
      const polygonMatches = [];
      const rleMatches = [];
      const fallbackMatches = [];

      for (const item of callouts) {
        const { entry } = item;
        if (entry.type === "polygon" && entry.polygons?.length) {
          if (entry.polygons.some((polygon) => pointInPolygon(sceneX, sceneY, polygon))) {
            polygonMatches.push(entry);
          }
          continue;
        }

        if (entry.type === "rle" && entry.segmentation?.counts) {
          if (pointInRle(sceneX, sceneY, entry.segmentation, scene.width, scene.height)) {
            rleMatches.push(entry);
          }
          continue;
        }

        if (Array.isArray(entry.bbox) && entry.bbox.length === 4) {
          const [x, y, width, height] = entry.bbox;
          if (sceneX >= x && sceneX <= x + width && sceneY >= y && sceneY <= y + height) {
            fallbackMatches.push(entry);
          }
        }
      }

      if (polygonMatches.length) {
        polygonMatches.sort((a, b) => (a.area || Number.POSITIVE_INFINITY) - (b.area || Number.POSITIVE_INFINITY));
        return polygonMatches[0]?.id || null;
      }

      if (rleMatches.length) {
        rleMatches.sort((a, b) => (a.area || Number.POSITIVE_INFINITY) - (b.area || Number.POSITIVE_INFINITY));
        return rleMatches[0]?.id || null;
      }

      if (!fallbackMatches.length) return null;
      fallbackMatches.sort((a, b) => (a.area || Number.POSITIVE_INFINITY) - (b.area || Number.POSITIVE_INFINITY));
      return fallbackMatches[0]?.id || null;
    };

    const syncHoverLabel = (event) => {
      const layerRect = layer.getBoundingClientRect();
      const imageBox = containRect(layerRect.width, layerRect.height, scene.width, scene.height);
      const localX = event.clientX - layerRect.left;
      const localY = event.clientY - layerRect.top;

      if (
        localX < imageBox.left
        || localY < imageBox.top
        || localX > imageBox.left + imageBox.width
        || localY > imageBox.top + imageBox.height
      ) {
        setActiveCallout(null);
        return;
      }

      const sceneX = ((localX - imageBox.left) / imageBox.width) * scene.width;
      const sceneY = ((localY - imageBox.top) / imageBox.height) * scene.height;
      setActiveCallout(hitTestInstance(sceneX, sceneY));
    };

    layer.addEventListener("pointermove", syncHoverLabel);
    layer.addEventListener("pointerleave", () => setActiveCallout(null));
    queueMicrotask(() => applyCalloutLayout());
  }

  const badgeTitle = options.kind === "ground-truth"
    ? "Ground Truth"
    : (options.model?.shortName || options.model?.name || "Prediction");
  if (options.showCornerBadge !== false && badgeTitle) {
    const badge = document.createElement("div");
    badge.className = `segmentation-badge${options.kind === "ground-truth" ? " is-ground-truth" : ""}`;
    if (options.model?.color) {
      badge.style.setProperty("--badge-accent", options.model.color);
    }

    const title = document.createElement("div");
    title.className = "segmentation-badge-title";
    title.textContent = badgeTitle;
    badge.append(title);
    layer.append(badge);
  }
  return layer;
}

function segmentationAnnotationEntries(segments = [], { limit = 6, includeScores = true } = {}) {
  return segments
    .filter((segment) => segment?.className)
    .sort((a, b) => {
      const aScore = typeof a.score === "number" ? a.score : -1;
      const bScore = typeof b.score === "number" ? b.score : -1;
      if (aScore !== bScore) return bScore - aScore;
      return (b.pixelCount || 0) - (a.pixelCount || 0);
    })
    .slice(0, limit)
    .map((segment) => ({
      className: segment.className,
      score: includeScores && typeof segment.score === "number" ? segment.score : null
    }));
}

function segmentationBadgeEntries(scene, model, options = {}) {
  if (options.kind === "ground-truth") {
    return segmentationAnnotationEntries(scene.groundTruth || [], { includeScores: false, limit: 5 });
  }
  ensureSegmentationScores(scene, model);
  const segments = scene.predictions?.[model?.id] || [];
  return segmentationAnnotationEntries(segments, { includeScores: true, limit: 6 });
}

function buildSceneLayers(scene, models, options = {}) {
  const layers = [];
  const occupiedLabels = [];
  const hoverModel = effectiveHoverModel(scene);
  const hoverGroundTruth = state.mode !== "split" && state.hoveredGroundTruth;
  const showGroundTruth = options.showGroundTruth ?? (state.showGroundTruth || hoverGroundTruth);
  const showPredictionBadgeByDefault = models.length === 1;
  const showGroundTruthBadge = showGroundTruth && (hoverGroundTruth || models.length === 0);

  if (isSegmentationScene(scene)) {
    if (showGroundTruth && scene.groundTruthImage) {
      layers.push(createSegmentationLayer(scene, scene.groundTruthImage, {
        kind: "ground-truth",
        opacity: hoverGroundTruth ? 1 : state.overlayOpacity,
        isEmphasized: hoverGroundTruth,
        zIndex: 12,
        annotations: segmentationBadgeEntries(scene, null, { kind: "ground-truth" }),
        showCornerBadge: showGroundTruthBadge
      }));
    }

    models.forEach((model, index) => {
      const overlayImage = scene.predictionImages?.[model.id];
      if (!overlayImage) return;

      const isHovered = Boolean(hoverModel && hoverModel === model.id);
      const isDimmed = Boolean(hoverModel && hoverModel !== model.id);
      const opacity = hoverGroundTruth || isDimmed ? 0.05 : isHovered ? Math.min(state.overlayOpacity + 0.24, 1) : state.overlayOpacity;

      layers.push(createSegmentationLayer(scene, overlayImage, {
        kind: "prediction",
        model,
        opacity,
        isDimmed,
        isEmphasized: isHovered,
        zIndex: 4 + index,
        annotations: segmentationBadgeEntries(scene, model, { kind: "prediction" }),
        maskLabels: segmentationMaskEntries(scene, model),
        showCornerBadge: isHovered || showPredictionBadgeByDefault
      }));
    });
    return layers;
  }

  if (showGroundTruth && scene.groundTruth?.length) {
    layers.push(createBoxesLayer(scene, scene.groundTruth, {
      kind: "ground-truth",
      opacity: hoverGroundTruth ? 1 : state.overlayOpacity,
      isEmphasized: hoverGroundTruth,
      zIndex: 12,
      occupiedLabels,
      showCornerBadge: showGroundTruthBadge
    }));
  }

  models.forEach((model, index) => {
    const boxes = scene.predictions?.[model.id];
    if (!boxes?.length) return;

    const isHovered = Boolean(hoverModel && hoverModel === model.id);
    const isDimmed = Boolean(hoverModel && hoverModel !== model.id);
    const opacity = hoverGroundTruth || isDimmed ? 0.05 : isHovered ? Math.min(state.overlayOpacity + 0.24, 1) : state.overlayOpacity;

    layers.push(createBoxesLayer(scene, boxes, {
      kind: "prediction",
      model,
      opacity,
      isDimmed,
      isEmphasized: isHovered,
      zIndex: 4 + index,
      occupiedLabels,
      showLabels: !hoverModel || isHovered,
      showCornerBadge: isHovered || showPredictionBadgeByDefault
    }));
  });

  return layers;
}

function renderStack(container, scene, models, options = {}) {
  const baseImageCandidates = sceneBaseImageCandidates(scene);
  const baseImage = baseImageCandidates[0] || "";
  const existingBase = container.querySelector(".base-layer");
  const shouldPreserveBase = options.preserveBaseImage
    && existingBase
    && imageMatchesAssetCandidates(existingBase, baseImageCandidates);

  if (!shouldPreserveBase) {
    container.replaceChildren();
    container.classList.toggle("is-loading", Boolean(baseImage));
    if (baseImage) container.append(createBaseImageLayer(scene));
  } else if (!options.appendLayers) {
    container.querySelectorAll(".box-layer").forEach((layer) => layer.remove());
  }

  const layers = buildSceneLayers(scene, models, options);
  if (options.initialOpacity != null) {
    layers.forEach((layer) => {
      layer.style.opacity = String(options.initialOpacity);
    });
  }
  container.append(...layers);
  return layers;
}

function renderFocusLens() {
  if (state.mode !== "focus") {
    window.cancelAnimationFrame(focusLensRefreshFrame);
    els.focusLensContent.replaceChildren();
    return;
  }

  const sourceStack = els.overlayStack;
  if (!sourceStack) {
    els.focusLensContent.replaceChildren();
    return;
  }

  const clone = sourceStack.cloneNode(true);
  clone.removeAttribute("id");
  clone.className = "image-stack overlay-stack focus-lens-stack";

  const sourceImages = [...sourceStack.querySelectorAll("img")];
  const cloneImages = [...clone.querySelectorAll("img")];
  cloneImages.forEach((image, index) => {
    const sourceImage = sourceImages[index];
    if (!sourceImage) return;
    if (sourceImage.classList.contains("is-ready") || (sourceImage.complete && sourceImage.naturalWidth > 0)) {
      image.classList.add("is-ready");
    }
  });

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
    hoverGroundTruth: state.mode !== "split" && state.hoveredGroundTruth,
    displayed: [...displayedModels(scene)].map((model) => model.id),
    hoverModel: effectiveHoverModel(scene),
    splitA: state.splitA,
    splitB: state.splitB
  });
}

function boxLayerOpacity(layer) {
  const kind = layer.dataset.kind;
  const modelId = layer.dataset.modelId;
  const hoverModel = effectiveHoverModel();
  const hoverGroundTruth = state.mode !== "split" && state.hoveredGroundTruth;
  if (kind === "ground-truth") return hoverGroundTruth ? 1 : state.overlayOpacity;
  if (kind === "prediction" && hoverGroundTruth) return 0.05;
  if (kind === "prediction" && modelId) {
    const isHovered = Boolean(hoverModel && hoverModel === modelId);
    const isDimmed = Boolean(hoverModel && hoverModel !== modelId);
    if (isDimmed) return 0.05;
    if (isHovered) return Math.min(state.overlayOpacity + 0.24, 1);
  }
  return state.overlayOpacity;
}

function fadeLayerToTarget(layer, targetOpacity) {
  if (layer.dataset.waitForImage === "true") {
    layer.dataset.pendingOpacity = String(targetOpacity);
    layer.style.opacity = "0";
    return;
  }
  layer.style.opacity = String(targetOpacity);
}

function clampZoom(zoom) {
  return Math.min(maxZoom, Math.max(minZoom, zoom));
}

function currentViewerShellScale() {
  if (!els.viewerApp) return 1;
  const transform = window.getComputedStyle(els.viewerApp).transform;
  if (!transform || transform === "none") return 1;
  const match = transform.match(/^matrix\(([^,]+),\s*[^,]+,\s*[^,]+,\s*([^,]+),/);
  if (!match) return 1;
  const scaleX = Number.parseFloat(match[1]);
  const scaleY = Number.parseFloat(match[2]);
  if (!Number.isFinite(scaleX) || !Number.isFinite(scaleY)) return 1;
  return Math.max(0.01, Math.min(scaleX, scaleY));
}

function viewerFrameInnerSize() {
  const bounds = els.viewerFrame.getBoundingClientRect();
  const styles = window.getComputedStyle(els.viewerFrame);
  const shellScale = currentViewerShellScale();
  const horizontalPadding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
  const verticalPadding = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
  return {
    width: Math.max(1, (bounds.width / shellScale) - horizontalPadding),
    height: Math.max(1, (bounds.height / shellScale) - verticalPadding)
  };
}

function fitZoomForViewport() {
  const { width, height } = viewerFrameInnerSize();
  const { width: contentWidth, height: contentHeight } = viewerStageSize(currentScene());
  return clampZoom(Math.min(width / contentWidth, height / contentHeight) * fitViewPadding);
}

function viewerStageSize(scene = currentScene()) {
  const { width, height } = viewerFrameInnerSize();
  if (!scene) {
    return { width, height };
  }

  const aspectRatio = scene.width / scene.height;
  let stageWidth = width;
  let stageHeight = stageWidth / aspectRatio;

  if (stageHeight > height) {
    stageHeight = height;
    stageWidth = stageHeight * aspectRatio;
  }

  return {
    width: Math.max(1, Math.floor(stageWidth)),
    height: Math.max(1, Math.floor(stageHeight))
  };
}

function fitViewToViewport() {
  state.panX = 0;
  state.panY = 0;
  state.dragging = false;
  state.splitDragging = false;
  state.fitToView = true;
  updateViewerFrame();
  window.requestAnimationFrame(() => {
    state.zoom = fitZoomForViewport();
    state.panX = 0;
    state.panY = 0;
    updateViewerFrame();
  });
}

function zoomReadoutPercent() {
  const fitZoom = fitZoomForViewport();
  return Math.round((state.zoom / fitZoom) * 100);
}

function updateViewerFrame() {
  const scene = currentScene();
  const stageSize = viewerStageSize(scene);
  document.body.dataset.mode = state.mode;
  els.viewerContent.style.setProperty("--split", `${state.split}%`);
  els.viewerContent.style.aspectRatio = `${scene.width} / ${scene.height}`;
  els.viewerContent.style.width = `${stageSize.width}px`;
  els.viewerContent.style.height = `${stageSize.height}px`;
  els.viewerContent.style.maxWidth = "100%";
  els.viewerContent.style.maxHeight = "100%";
  els.viewerContent.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
  els.splitDivider.setAttribute("aria-valuenow", String(Math.round(state.split)));
  els.splitLeftBadge.textContent = splitOptionLabel(state.splitA);
  els.splitRightBadge.textContent = splitOptionLabel(state.splitB);
  els.zoomReadout.textContent = `${zoomReadoutPercent()}%`;
}

function rebuildViewerLayers(options = {}) {
  const scene = currentScene();
  const selectedModels = displayedModels(scene);
  const leftChoice = splitChoiceConfig(state.splitA, state.splitB, scene);
  const rightChoice = splitChoiceConfig(state.splitB, state.splitA, scene);
  const appendedLayers = [];

  if (state.mode === "split") {
    els.overlayStack.replaceChildren();
    appendedLayers.push(...renderStack(els.splitLeft, scene, leftChoice.models, {
      ...options,
      showGroundTruth: leftChoice.showGroundTruth
    }));
    appendedLayers.push(...renderStack(els.splitRight, scene, rightChoice.models, {
      ...options,
      showGroundTruth: rightChoice.showGroundTruth
    }));
  } else {
    appendedLayers.push(...renderStack(els.overlayStack, scene, selectedModels, options));
    els.splitLeft.replaceChildren();
    els.splitRight.replaceChildren();
  }
  if (options.refreshFocusLens !== false) renderFocusLens();
  return appendedLayers;
}

function viewerStacks() {
  return [els.overlayStack, els.splitLeft, els.splitRight];
}

function animateViewerLayerRefresh() {
  const previousTargets = viewerStacks()
    .flatMap((target) => [...target.querySelectorAll(".box-layer")]);
  window.clearTimeout(viewerRefreshTimer);
  const nextTargets = rebuildViewerLayers({
    preserveBaseImage: true,
    appendLayers: true,
    initialOpacity: 0,
    refreshFocusLens: false
  });

  window.requestAnimationFrame(() => {
    previousTargets.forEach((target) => fadeLayerToTarget(target, 0));
    nextTargets.forEach((target) => fadeLayerToTarget(target, boxLayerOpacity(target)));
  });

  viewerRefreshTimer = window.setTimeout(() => {
    previousTargets.forEach((target) => target.remove());
    renderFocusLens();
  }, viewerFadeMs + 40);
}

function renderViewer(force = false) {
  const scene = currentScene();
  if (!scene) return;
  const signature = viewerSignature();
  if (force || signature !== lastViewerSignature) {
    const sceneChanged = scene.id !== lastRenderedSceneId;
    const shouldAnimate = !force && lastViewerSignature && !state.skipNextViewerAnimation && !sceneChanged;
    if (shouldAnimate) {
      animateViewerLayerRefresh();
    } else {
      window.clearTimeout(viewerRefreshTimer);
      viewerStacks()
        .flatMap((target) => [...target.querySelectorAll(".box-layer")])
        .forEach((target) => fadeLayerToTarget(target, boxLayerOpacity(target)));
      rebuildViewerLayers({ preserveBaseImage: !sceneChanged });
    }
    state.skipNextViewerAnimation = false;
    lastViewerSignature = signature;
    lastRenderedSceneId = scene.id;
  }
  updateViewerFrame();
  if (state.fitToView) fitViewToViewport();
}

function renderScenes() {
  const scenes = visibleScenes();
  updateScenePanelWidth(scenes);
  const preserveVerticalScroll = !(isHandheldClient() && window.matchMedia("(max-width: 760px)").matches);
  const targetScrollTop = preserveVerticalScroll && !resetSceneListScroll ? els.sceneList.scrollTop : 0;
  els.sceneCount.textContent = `${scenes.length} samples`;
  const fragment = document.createDocumentFragment();

  const appendSceneCard = (scene, index) => {
    const button = document.createElement("button");
    button.className = `scene-card${index === state.sceneIndex ? " is-active" : ""}`;
    button.type = "button";
    button.dataset.sceneIndex = String(index);
    button.dataset.resolution = scene.dimensions || "";
    button.addEventListener("click", () => {
      state.sceneIndex = index;
      state.hoveredModel = null;
      state.hoveredGroundTruth = false;
      state.suppressGroundTruthHover = false;
      resetView();
      ensureSceneState();
      render();
    });

    const image = document.createElement("img");
    image.alt = "";
    image.draggable = false;
    image.loading = index < 6 ? "eager" : "lazy";
    image.decoding = "async";
    setImageSourceWithFallback(image, assetCandidates(scene.thumbnailImage || scene.baseImage));

    const gtSummary = isSegmentationScene(scene)
      ? `${scene.groundTruthStats?.classCount || scene.groundTruth.length} classes`
      : `${scene.groundTruth.length} GT`;
    const copy = document.createElement("span");
    copy.innerHTML = `<strong>${formatSceneTitle(scene.title)}</strong><small>${gtSummary}</small>`;

    button.append(image, copy);
    return button;
  };

  if (state.datasetId === "DFire") {
    const groups = [
      { id: "fire-smoke", label: "Fire & Smoke" },
      { id: "fire", label: "Fire" },
      { id: "smoke", label: "Smoke" }
    ];

    groups.forEach((group) => {
      const groupedScenes = scenes
        .map((scene, index) => ({ scene, index }))
        .filter(({ scene }) => dfireSceneGroup(scene)?.id === group.id);

      if (!groupedScenes.length) return;

      const section = document.createElement("section");
      section.className = "scene-group";

      const heading = document.createElement("div");
      heading.className = "scene-group-heading";
      heading.innerHTML = `<span>${group.label}</span>`;
      section.append(heading);

      const list = document.createElement("div");
      list.className = "scene-group-list";
      groupedScenes.forEach(({ scene, index }) => list.append(appendSceneCard(scene, index)));
      section.append(list);
      fragment.append(section);
    });
  } else {
    scenes.forEach((scene, index) => {
      fragment.append(appendSceneCard(scene, index));
    });
  }

  els.sceneList.replaceChildren(fragment);

  if (preserveVerticalScroll) {
    const restoredScrollTop = resetSceneListScroll ? 0 : targetScrollTop;
    els.sceneList.scrollTop = restoredScrollTop;
    window.requestAnimationFrame(() => {
      els.sceneList.scrollTop = restoredScrollTop;
    });
  }
  resetSceneListScroll = false;

  const activeCard = els.sceneList.querySelector(`[data-scene-index="${state.sceneIndex}"]`);
  if (activeCard && isHandheldClient() && window.matchMedia("(max-width: 760px)").matches) {
    activeCard.scrollIntoView({ inline: "center", block: "nearest", behavior: "auto" });
  }
  scenesInitialized = true;
}

function renderModels() {
  const scene = currentScene();
  const fragment = document.createDocumentFragment();
  const splitMode = state.mode === "split";
  const segmentationScene = isSegmentationScene(scene);
  const sceneModels = readyModels(scene);
  const splitActiveModelIds = splitMode
    ? new Set([
      ...modelsForSplitChoice(state.splitA, state.splitB, scene).map((model) => model.id),
      ...modelsForSplitChoice(state.splitB, state.splitA, scene).map((model) => model.id)
    ])
    : new Set();
  normalizeHoveredModel(scene);
  syncHoveredModelFromPointer(scene);
  const activeHoverModel = effectiveHoverModel(scene);

  datasetModels(scene.dataset).forEach((model) => {
    const sceneStats = modelStatsForScene(scene, model.id);
    const hasSceneOutput = sceneModels.some((item) => item.id === model.id);
    const isSplitActive = splitMode && splitActiveModelIds.has(model.id);
    const row = document.createElement("button");
    row.type = "button";
    row.dataset.modelId = model.id;
    row.className = `model-row${state.selected.has(model.id) || isSplitActive ? " is-selected" : ""}${activeHoverModel === model.id ? " is-hovered" : ""}${splitMode ? " is-readonly" : ""}${hasSceneOutput ? "" : " is-pending"}`;
    row.style.setProperty("--model-color", model.color);
    row.disabled = !hasSceneOutput && !splitMode;

    row.addEventListener("pointerenter", (event) => {
      if (!hasSceneOutput || splitMode) return;
      state.pointerX = event.clientX;
      state.pointerY = event.clientY;
      state.hoveredModel = model.id;
      state.skipNextViewerAnimation = state.selected.has(model.id);
      updateModelHoverGlow(scene);
      renderSummary();
      renderViewer();
    });

    row.addEventListener("pointerleave", (event) => {
      if (!hasSceneOutput || splitMode) return;
      state.pointerX = event.clientX;
      state.pointerY = event.clientY;
      state.skipNextViewerAnimation = state.selected.has(model.id);
      syncHoveredModelFromPointer(scene);
      updateModelHoverGlow(scene);
      renderSummary();
      renderViewer();
    });

    row.addEventListener("pointermove", (event) => {
      state.pointerX = event.clientX;
      state.pointerY = event.clientY;
    });

    if (!splitMode) {
      row.addEventListener("click", () => {
        if (!hasSceneOutput) return;
        const keepHoverState = state.hoveredModel === model.id;
        const wasSelected = state.selected.has(model.id);
        const hadAnySelected = state.selected.size > 0;
        state.skipNextViewerAnimation = keepHoverState;
        if (!keepHoverState) state.hoveredModel = null;
        if (segmentationScene) {
          if (wasSelected) {
            state.selected.delete(model.id);
          } else {
            state.selected.clear();
            state.selected.add(model.id);
            state.showGroundTruth = false;
            state.suppressGroundTruthHover = false;
          }
        } else if (wasSelected) {
          state.selected.delete(model.id);
        } else {
          state.selected.add(model.id);
        }
        if (!segmentationScene && keepHoverState && !wasSelected && !hadAnySelected) {
          row.classList.add("is-selected");
          renderSummary();
          renderMode();
          lastViewerSignature = viewerSignature();
          lastRenderedSceneId = scene.id;
          return;
        }
        render();
      });
    }

    const meta = splitMode
      ? splitSideForModel(model.id, scene)
      : hasSceneOutput
        ? isSegmentationScene(scene)
          ? `${sceneStats.classCount || 0} classes`
          : `${sceneStats.count} detections`
        : "not available in this scene";

    row.innerHTML = `
      <span class="model-swatch" aria-hidden="true"></span>
      <span class="model-copy">
        <span class="model-title">${model.name}</span>
        <span class="model-meta">${meta}</span>
      </span>
      <span class="model-spacer" aria-hidden="true"></span>
    `;

    fragment.append(row);
  });

  els.modelList.replaceChildren(fragment);
  updateModelHoverGlow(scene);
}

function renderLegend() {
  const scene = currentScene();
  const fragment = document.createDocumentFragment();
  sceneClassLegend(scene).forEach((item) => {
    const className = item.className || item.name;
    const classMeta = classTooltipMetadata(className, scene);
    const row = document.createElement("div");
    row.className = "class-row";
    const swatch = document.createElement("span");
    swatch.className = "class-swatch";
    swatch.style.background = item.color;
    swatch.append(createLegendIconElement(classMeta.iconName, readableIconColor(item.color)));

    const label = document.createElement("span");
    label.textContent = classMeta.label;

    row.append(swatch, label);
    fragment.append(row);
  });
  els.classLegend.replaceChildren(fragment);
}

function renderSplitSelectors() {
  const { gtOptions, groupOptions, modelOptions } = splitOptions();
  const options = `
    <optgroup label="Ground Truth">
      ${gtOptions.map((option) => `<option value="${option.value}">${option.label}</option>`).join("")}
    </optgroup>
    <optgroup label="Single models">
      ${modelOptions.map((option) => `<option value="${option.value}">${option.label}</option>`).join("")}
    </optgroup>
    <optgroup label="Groups">
      ${groupOptions.map((option) => `<option value="${option.value}">${option.label}</option>`).join("")}
    </optgroup>
  `;
  els.splitA.innerHTML = options;
  els.splitB.innerHTML = options;
  els.splitA.value = state.splitA;
  els.splitB.value = state.splitB;
}

function renderSummary() {
  const scene = currentScene();
  if (!scene) return;
  const visibleModels = summaryModels(scene);
  const leftChoice = splitChoiceConfig(state.splitA, state.splitB, scene);
  const rightChoice = splitChoiceConfig(state.splitB, state.splitA, scene);
  const segmentationScene = isSegmentationScene(scene);
  const splitCounts = segmentationScene
    ? `${leftChoice.showGroundTruth ? (scene.groundTruthStats?.classCount || scene.groundTruth.length) : uniquePredictionClassCount(leftChoice.models, scene)} / ${rightChoice.showGroundTruth ? (scene.groundTruthStats?.classCount || scene.groundTruth.length) : uniquePredictionClassCount(rightChoice.models, scene)}`
    : `${leftChoice.showGroundTruth ? scene.groundTruth.length : totalPredictionCount(leftChoice.models, scene)} / ${rightChoice.showGroundTruth ? scene.groundTruth.length : totalPredictionCount(rightChoice.models, scene)}`;
  const groundTruthCount = segmentationScene
    ? (scene.groundTruthStats?.classCount || scene.groundTruth.length)
    : scene.groundTruth.length;
  const predictionCount = segmentationScene
    ? uniquePredictionClassCount(visibleModels, scene)
    : totalPredictionCount(visibleModels, scene);

  els.sceneTitle.textContent = formatSceneTitle(scene.title);
  els.sceneMeta.textContent = `${datasetDisplayName(scene.dataset)} / ${scene.dimensions}`;
  els.activeModelLabel.textContent = state.mode === "split" ? "Split models" : "Visible models";
  els.activeModelCount.textContent = state.mode === "split"
    ? `${leftChoice.showGroundTruth ? "GT" : leftChoice.models.length} / ${rightChoice.showGroundTruth ? "GT" : rightChoice.models.length}`
    : String(visibleModels.length);
  els.bestIouLabel.textContent = segmentationScene ? "GT classes" : "GT boxes";
  els.bestIou.textContent = String(groundTruthCount);
  els.predictionCountLabel.textContent = state.mode === "split"
    ? (segmentationScene ? "Classes L/R" : "Pred boxes L/R")
    : (segmentationScene ? "Visible classes" : "Pred boxes");
  els.predictionCount.textContent = state.mode === "split" ? splitCounts : String(predictionCount);
}

function renderMode() {
  const scene = currentScene();
  if (!scene) return;
  const sceneModels = readyModels(scene);
  const segmentationScene = isSegmentationScene(scene);
  const splitGtActive = state.mode === "split" && (
    splitChoiceConfig(state.splitA, state.splitB, scene).showGroundTruth
    || splitChoiceConfig(state.splitB, state.splitA, scene).showGroundTruth
  );
  const allReadySelected = sceneModels.length > 0 && sceneModels.every((model) => state.selected.has(model.id));

  document.body.dataset.mode = state.mode;
  els.modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
  els.splitSelectors.classList.toggle("is-visible", state.mode === "split");
  els.hoverHint.textContent = sceneModels.length
    ? state.mode === "split"
      ? "Split comparison"
      : "Hover to isolate"
    : "No outputs";
  els.actionsRow.classList.toggle("is-hidden", state.mode === "split" || segmentationScene);
  els.selectAll.textContent = allReadySelected ? "Deselect all" : "Select all";
  els.selectAll.disabled = sceneModels.length === 0;
  els.clearAll.disabled = sceneModels.length === 0;
  els.taskLabel.textContent = displayTaskLabelForDataset(scene.dataset, currentTaskType(scene));
  els.toggleGroundTruth.classList.toggle("is-active", state.showGroundTruth || splitGtActive);
  els.toggleGroundTruth.classList.toggle("is-hovered", state.mode !== "split" && state.hoveredGroundTruth);
  els.toggleGroundTruth.setAttribute("aria-pressed", String(state.showGroundTruth || splitGtActive));
  els.toggleGroundTruth.disabled = state.mode === "split";
  els.groundTruthText.textContent = "Ground Truth";
}

function render() {
  renderRouteChrome();
  renderAppMenu();
  if (state.route === "home") {
    renderLanding();
    return;
  }

  renderDatasetPageHeader();
  renderGallery();
  if (!state.viewerOpen) return;

  ensureSceneState();
  const scene = currentScene();
  if (!scene) return;
  if (state.activeDetection && state.activeDetection.scene.id !== scene.id) {
    closeDetectionModal();
  }
  renderScenes();
  renderLegend();
  renderModels();
  renderSplitSelectors();
  renderSummary();
  renderMode();
  renderViewer();
  preloadSceneSegmentationAssets(scene);
}

function resetView() {
  state.zoom = 1;
  state.fitToView = true;
  state.panX = 0;
  state.panY = 0;
  state.dragging = false;
  state.splitDragging = false;
}

function setZoom(nextZoom) {
  state.fitToView = false;
  state.zoom = clampZoom(nextZoom);
  if (state.zoom <= fitZoomForViewport()) {
    state.panX = 0;
    state.panY = 0;
  }
  updateViewerFrame();
}

document.querySelector("#prevScene").addEventListener("click", () => {
  const scenes = visibleScenes();
  state.sceneIndex = (state.sceneIndex - 1 + scenes.length) % scenes.length;
  state.hoveredModel = null;
  state.hoveredGroundTruth = false;
  state.suppressGroundTruthHover = false;
  resetView();
  ensureSceneState();
  render();
});

document.querySelector("#nextScene").addEventListener("click", () => {
  const scenes = visibleScenes();
  state.sceneIndex = (state.sceneIndex + 1) % scenes.length;
  state.hoveredModel = null;
  state.hoveredGroundTruth = false;
  state.suppressGroundTruthHover = false;
  resetView();
  ensureSceneState();
  render();
});

document.querySelector("#zoomOut").addEventListener("click", () => setZoom(state.zoom - 0.12));
document.querySelector("#zoomIn").addEventListener("click", () => setZoom(state.zoom + 0.12));
document.querySelector("#fitView").addEventListener("click", () => {
  fitViewToViewport();
});

document.addEventListener("pointermove", (event) => {
  state.pointerX = event.clientX;
  state.pointerY = event.clientY;
  if (state.viewerOpen && currentScene()) syncPointerHoverState(currentScene());
});

els.modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    state.hoveredModel = null;
    state.hoveredGroundTruth = false;
    state.suppressGroundTruthHover = false;
    if (state.mode === "split") {
      applyDefaultSplitSelection();
    }
    resetView();
    render();
  });
});

els.landingMenuButton?.addEventListener("click", openAppMenu);
els.datasetMenuButton?.addEventListener("click", openAppMenu);
els.datasetHomeButton?.addEventListener("click", () => {
  closeViewerOverlay({ updateHash: false });
  setRoute("home");
});
els.viewerHomeButton?.addEventListener("click", () => {
  closeViewerOverlay({ updateHash: false });
  setRoute("home");
});
els.appMenuClose?.addEventListener("click", closeAppMenu);
els.datasetInstructionsButton?.addEventListener("click", openInstructionsModal);
els.appMenuOverlay?.addEventListener("click", (event) => {
  if (event.target === els.appMenuOverlay) closeAppMenu();
});
els.appMenuPanel?.addEventListener("click", (event) => {
  event.stopPropagation();
});

els.backButton?.addEventListener("click", () => {
  closeViewerOverlay();
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
  const scene = currentScene();
  const segmentationScene = isSegmentationScene(scene);
  const shouldShowGroundTruth = !state.showGroundTruth;
  state.showGroundTruth = shouldShowGroundTruth;
  state.suppressGroundTruthHover = !shouldShowGroundTruth;
  if (segmentationScene && shouldShowGroundTruth) state.selected.clear();
  state.hoveredGroundTruth = false;
  state.skipNextViewerAnimation = false;
  if (shouldShowGroundTruth) {
    render();
  } else {
    renderSummary();
    renderMode();
    renderViewer();
  }
});

els.toggleGroundTruth.addEventListener("pointerenter", (event) => {
  if (state.mode === "split") return;
  state.suppressGroundTruthHover = false;
  state.pointerX = event.clientX;
  state.pointerY = event.clientY;
  state.hoveredGroundTruth = true;
  state.hoveredModel = null;
  updateModelHoverGlow();
  renderSummary();
  renderViewer();
});

els.toggleGroundTruth.addEventListener("pointerleave", (event) => {
  if (state.mode === "split") return;
  state.suppressGroundTruthHover = false;
  state.pointerX = event.clientX;
  state.pointerY = event.clientY;
  syncHoveredModelFromPointer();
  updateModelHoverGlow();
  renderSummary();
  renderViewer();
});

els.selectAll.addEventListener("click", () => {
  const sceneModels = readyModels(currentScene());
  if (isSegmentationScene(currentScene())) return;
  state.hoveredModel = null;
  state.hoveredGroundTruth = false;
  state.suppressGroundTruthHover = false;
  if (sceneModels.length > 0 && sceneModels.every((model) => state.selected.has(model.id))) {
    sceneModels.forEach((model) => state.selected.delete(model.id));
  } else {
    sceneModels.forEach((model) => state.selected.add(model.id));
  }
  render();
});

els.clearAll.addEventListener("click", () => {
  if (isSegmentationScene(currentScene())) return;
  state.hoveredModel = null;
  state.hoveredGroundTruth = false;
  state.suppressGroundTruthHover = false;
  state.selected.clear();
  state.showGroundTruth = false;
  render();
});

els.detectionModalClose.addEventListener("click", closeDetectionModal);
els.instructionsModalClose?.addEventListener("click", closeInstructionsModal);
els.instructionsModalBackdrop?.addEventListener("click", closeInstructionsModal);
els.instructionsModal?.addEventListener("click", (event) => {
  if (event.target === els.instructionsModal) closeInstructionsModal();
});
els.detectionModalBackdrop.addEventListener("click", closeDetectionModal);
els.detectionModal.addEventListener("click", (event) => {
  if (event.target === els.detectionModal) closeDetectionModal();
});
els.viewerOverlay?.addEventListener("click", (event) => {
  if (event.target === els.viewerOverlay) closeViewerOverlay();
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
  if (!state.dragging || state.zoom <= fitZoomForViewport()) return;
  state.fitToView = false;
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

window.addEventListener("resize", () => {
  if (state.route !== "dataset" || !state.viewerOpen) return;
  if (state.fitToView) {
    fitViewToViewport();
  } else {
    updateViewerFrame();
  }
});

window.addEventListener("keydown", (event) => {
  if (state.route !== "dataset") return;
  if (event.key === "Escape" && !els.detectionModal.hidden) {
    closeDetectionModal();
    return;
  }
  if (event.key === "Escape" && els.instructionsModal && !els.instructionsModal.hidden) {
    closeInstructionsModal();
    return;
  }
  if (event.key === "Escape" && state.menuOpen) {
    closeAppMenu();
    return;
  }
  if (event.key === "Escape" && state.viewerOpen) {
    closeViewerOverlay();
    return;
  }
  if (!state.viewerOpen) return;
  if (["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(event.target.tagName)) return;
  if (event.key === "ArrowRight") document.querySelector("#nextScene").click();
  if (event.key === "ArrowLeft") document.querySelector("#prevScene").click();
  if (event.key.toLowerCase() === "g") els.toggleGroundTruth.click();
});

window.addEventListener("hashchange", syncRouteFromLocation);
window.addEventListener("popstate", syncRouteFromLocation);

applyTheme(resolveInitialTheme());
ensureSceneState();
document.body.dataset.clientFormFactor = detectClientFormFactor();
document.body.dataset.mobileClient = "false";
const initialRoute = parseRouteHash();
state.route = initialRoute.route;
if (initialRoute.datasetId && availableDatasets.includes(initialRoute.datasetId)) {
  state.datasetId = initialRoute.datasetId;
}
state.viewerOpen = state.route === "dataset" && Boolean(initialRoute.sceneId);
if (state.viewerOpen && initialRoute.sceneId) {
  const nextIndex = sceneIndexForImageId(state.datasetId, initialRoute.sceneId);
  if (nextIndex >= 0) {
    state.sceneIndex = nextIndex;
  } else {
    state.viewerOpen = false;
  }
}
render();

els.menuThemeToggle?.addEventListener("click", () => {
  const nextTheme = state.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  window.localStorage.setItem(themeStorageKey, nextTheme);
});
