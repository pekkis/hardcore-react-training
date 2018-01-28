import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";

import { createStore } from "./utils/redux";
import {
  getMiddlewares,
  getReducers,
  getEnhancers,
  getInitialState
} from "./config/redux";

const initialState = getInitialState();
const store = createStore(
  getReducers(),
  getMiddlewares(),
  getEnhancers(),
  initialState
);

function render(Component, rootElement, method = "render") {
  ReactDOM[method](<Component store={store} />, rootElement);
}

const rootElement = document.getElementById("app");
render(Root, rootElement, initialState === undefined ? "render" : "hydrate");

if (module.hot) {
  module.hot.accept("./Root", () => {
    const HotReloadedRoot = require("./Root").default;
    render(HotReloadedRoot, rootElement);
  });
}
