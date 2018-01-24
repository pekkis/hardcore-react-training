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

function render(Component, rootElement) {
  ReactDOM.render(<Component store={store} />, rootElement);
}

const rootElement = document.getElementById("app");
render(Root, rootElement);

if (module.hot) {
  module.hot.accept("./Root", () => {
    const HotReloadedRoot = require("./Root").default;
    render(HotReloadedRoot, rootElement);
  });
}
