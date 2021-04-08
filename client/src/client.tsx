import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";

/*
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
library.add(faSpinner);
*/

async function render(Component: typeof Root, rootElement: HTMLElement) {
  if (process.env.NODE_ENV !== "production") {
    const axe = await import("@axe-core/react");
    axe.default(React, ReactDOM, 1000);
    ReactDOM.render(<Component />, rootElement);
  } else {
    ReactDOM.render(<Component />, rootElement);
  }
}

const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Could not find root element!");
}

render(Root, rootElement);

console.log(
  "Someone, somewhere, is currently suckling on something intensively sucklable. This browser console can sense it."
);
