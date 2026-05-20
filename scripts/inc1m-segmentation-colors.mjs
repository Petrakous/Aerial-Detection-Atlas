const INC1M_SEGMENTATION_COLOR_HEX = {
  "first responder": "#FF6447",
  "civilian vehicle": "#DAA521",
  "citizen": "#9371DC",
  tree: "#33CD32",
  grass: "#566C2F",
  "military personnel": "#02FFFF",
  animal: "#8B4512",
  "dirt road": "#DEB988",
  water: "#87CEFA",
  mud: "#CD853F",
  plant: "#67CDAA",
  tank: "#5F9FA0",
  barrel: "#FF7F51",
  bag: "#FFE4B6",
  flame: "#D3691E",
  smoke: "#B22322",
  bicycle: "#FFA503",
  boat: "#1FB3AB",
  "green grass": "#9ACD33",
  "dry grass": "#D2B48C",
  "burnt grass": "#8B0000",
  "green tree": "#238B23",
  "dry tree": "#A0522D",
  "burnt tree": "#800000",
  "green plant": "#02FF7F",
  "dry plant": "#808000",
  "burnt plant": "#A52B2A",
  window: "#4169E2",
  door: "#B0C5DE",
  stairs: "#F5A560",
  building: "#BDB76B",
  wall: "#FA8172",
  fence: "#696969",
  barrier: "#8B008B",
  pole: "#6B8E24",
  tower: "#483E8C",
  silo: "#2F4F4F",
  "hole in the ground": "#40E0D0",
  road: "#FF1393",
  debris: "#DA70D6",
  furniture: "#F0F0D9",
  pavement: "#808080",
  "destroyed building": "#CD5C5D",
  "destroyed vehicle": "#E9967A",
  ambulance: "#238B23",
  "police vehicle": "#2090FF",
  "fire truck": "#ADD8E6",
  excavator: "#BB55D3",
  crane: "#03BFFF",
  "protective glasses": "#EE83EE",
  glove: "#6B5ACD",
  helmet: "#008080",
  boot: "#FF8C03",
  mask: "#4682B4",
  "oxygen cylinder": "#2E8B58",
  shovel: "#DDA1DE",
  ax: "#F1E78D",
  chainsaw: "#FF6AB4",
  cone: "#7DFC01",
  ladder: "#3BB371",
  lifesaver: "#DC143C",
  extinguisher: "#8B0000",
  "fire hose": "#708191",
  "army vehicle": "#F08080",
  scba: "#038B8B",
  "fire hydrant": "#FF0000",
  "aerial vehicle": "#F08080"
};

function normalizeInc1mClassName(className) {
  return String(className || "").trim().toLowerCase();
}

function hexToRgb(hex) {
  const normalized = String(hex || "").trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
    throw new Error(`Invalid hex color: ${hex}`);
  }

  return [
    Number.parseInt(normalized.slice(0, 2), 16),
    Number.parseInt(normalized.slice(2, 4), 16),
    Number.parseInt(normalized.slice(4, 6), 16)
  ];
}

const INC1M_SEGMENTATION_COLOR_RGB = Object.fromEntries(
  Object.entries(INC1M_SEGMENTATION_COLOR_HEX).map(([className, hex]) => [className, hexToRgb(hex)])
);

function inc1mSegmentationColorHex(className) {
  return INC1M_SEGMENTATION_COLOR_HEX[normalizeInc1mClassName(className)] || null;
}

function inc1mSegmentationColorRgb(className) {
  return INC1M_SEGMENTATION_COLOR_RGB[normalizeInc1mClassName(className)] || null;
}

export {
  INC1M_SEGMENTATION_COLOR_HEX,
  inc1mSegmentationColorHex,
  inc1mSegmentationColorRgb,
  normalizeInc1mClassName
};
