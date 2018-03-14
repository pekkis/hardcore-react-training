import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";

import { createStore } from "./utils/redux";
import { getMiddlewares, getReducers, getEnhancers } from "./config/redux";
import { getInitialState } from "./config/state";
import { getPersons } from "./ducks/person";
// import createSagaMiddleware from "redux-saga";
// import personSaga from "./sagas/personSaga";

const initialState = getInitialState();
//const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  getReducers(),
  getMiddlewares(),
  getEnhancers(),
  initialState
);

// sagaMiddleware.run(personSaga);

// store.dispatch(getPersons());

function render(Component, rootElement, method = "render") {
  ReactDOM[method](<Component store={store} />, rootElement);
}

const rootElement = document.getElementById("app");
render(Root, rootElement, initialState ? "hydrate" : "render");

if (module.hot) {
  module.hot.accept("./Root", () => {
    const HotReloadedRoot = require("./Root").default;
    render(HotReloadedRoot, rootElement, "render");
  });
}
