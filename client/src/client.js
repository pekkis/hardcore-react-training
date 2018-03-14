// import React from "react";
// import ReactDOM from "react-dom";
//import Root from "./Root";

/*
import { createStore } from "./utils/redux";
import { getMiddlewares, getReducers, getEnhancers } from "./config/redux";
import { getInitialState } from "./config/state";
*/

console.log("all your base are belong to us");

/*
const initialState = getInitialState();
const store = createStore(
  getReducers(),
  getMiddlewares(),
  getEnhancers(),
  initialState
);
*/

/*
const initialState = undefined;

function render(Component, rootElement, method = "render") {
  ReactDOM[method](<Component />, rootElement);
}

const rootElement = document.getElementById("app");
render(Root, rootElement, initialState ? "hydrate" : "render");

if (module.hot) {
  module.hot.accept("./Root", () => {
    const HotReloadedRoot = require("./Root").default;
    render(HotReloadedRoot, rootElement, "render");
  });
}
*/
