// import React from "react";
// import ReactDOM from "react-dom";

import { createRoot } from "react-dom/client";
import Root from "./Root";

import "normalize.css";

async function render(Component: typeof Root, rootElement: HTMLElement) {
  console.log("in vite, meta stuff is in import.meta", import.meta.env);

  /*
  // Not sure whether this works with React 18 so I disabled.
  if (import.meta.env.MODE !== "production") {
    console.log("Initializing dev mode accessibility tooling");
    const axe = await import("@axe-core/react");
    axe.default(React, ReactDOM, 1000);
  }
  */

  const root = createRoot(rootElement);
  root.render(<Component />);
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element!");
}

render(Root, rootElement);

console.log(
  "%cSomeone, somewhere, is currently suckling on something intensively sucklable. This browser console can sense it.",
  "font-size: 3em"
);
