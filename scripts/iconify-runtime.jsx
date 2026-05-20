import React from "react";
import { createRoot } from "react-dom/client";
import { Icon } from "@iconify/react";

function createIconifyIcon(iconName, { width = 16, height = 16, color = "currentColor" } = {}) {
  const host = document.createElement("span");
  host.className = "iconify-runtime-host";

  const root = createRoot(host);
  root.render(React.createElement(Icon, {
    icon: iconName,
    width,
    height,
    color
  }));

  return host;
}

window.createIconifyIcon = createIconifyIcon;
