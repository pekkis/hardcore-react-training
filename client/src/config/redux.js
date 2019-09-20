import * as reducers from "../ducks";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export function getSagaMiddleware() {
  return sagaMiddleware;
}

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
