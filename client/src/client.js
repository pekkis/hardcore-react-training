import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";

import { createStore } from "./services/redux";
import { getMiddlewares, getReducers, getEnhancers } from "./config/redux";
import { getInitialState } from "./config/state";

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
render(Root, rootElement, initialState ? "hydrate" : "render");

// Webpack's hot reloading magic happens here.
if (module.hot) {
  module.hot.accept("./Root", () => {
    const HotReloadedRoot = require("./Root").default;
    render(HotReloadedRoot, rootElement, "render");
  });
}
