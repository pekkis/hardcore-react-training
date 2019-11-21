// import promiseMiddleware from "redux-promise-middleware";
// import thunk from "redux-thunk";
import * as reducers from "../ducks";

import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

export function getMiddlewares() {
  let middlewares = [sagaMiddleware];
  return middlewares;
}

export function getReducers() {
  return reducers;
}

export function getEnhancers() {
  return [];
}
