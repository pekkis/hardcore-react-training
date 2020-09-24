import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";

import "normalize.css";

/*
import { createStore } from "./services/redux";
import {
  getMiddlewares,
  getReducers,
  getEnhancers,
  getSagaMiddleware
} from "./config/redux";
*/

/*
import rootSaga from "./sagas/root";
*/

/*
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
library.add(faSpinner);
*/

/*
const initialState = undefined;

const store = createStore(
  getReducers(),
  getMiddlewares(),
  getEnhancers(),
  initialState
);
*/

/*
const sagaMiddleware = getSagaMiddleware();
sagaMiddleware.run(rootSaga);
*/

function render(Component: typeof Root, rootElement: HTMLElement) {
  ReactDOM.render(<Component />, rootElement);
}

const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Could not find root element!");
}

render(Root, rootElement);

console.log(
  "Someone, somewhere, is currently suckling on something sucklable. The browser console can sense it."
);
