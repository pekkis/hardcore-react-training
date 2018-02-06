import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";
import * as reducers from "../ducks";

export function getMiddlewares() {
  let middlewares = [thunk, promiseMiddleware()];
  return middlewares;
}

export function getReducers() {
  return reducers;
}

export function getEnhancers() {
  return [];
}
