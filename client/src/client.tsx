import React, { FunctionComponent } from "react";

import ReactDOM from "react-dom";
import Root from "./Root";

import { createStore } from "./services/redux";
import {
  getSagaMiddleware,
  getMiddlewares,
  getReducers,
  getEnhancers
} from "./config/redux";
import { getInitialState } from "./config/state";

import rootSaga from "./sagas/root";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
library.add(faSpinner);

const initialState = getInitialState();

const store = createStore(
  getReducers(),
  getMiddlewares(),
  getEnhancers(),
  initialState
);

const sagaMiddleware = getSagaMiddleware();
sagaMiddleware.run(rootSaga);

// Just a small DRY abstraction here.
function render(
  Component: FunctionComponent<{ store: any }>,
  rootElement: HTMLElement,
  method: "render" | "hydrate" = "render"
) {
  ReactDOM[method](<Component store={store} />, rootElement);
}

const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Could not find root element!");
}

// If we get !undefined state from the server, we hydrate.
render(Root, rootElement, initialState ? "hydrate" : "render");

// Webpack's hot reloading magic happens here.
if ((module as any).hot) {
  (module as any).hot.accept("./Root", () => {
    const HotReloadedRoot = require("./Root").default;
    render(HotReloadedRoot, rootElement, "render");
  });
}

console.log("In the browser console, also suckling on a duckling?!?");
