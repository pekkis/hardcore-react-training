import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";
import * as reducers from "../ducks";
import transit from "transit-immutable-js";

export function getInitialState() {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    return transit.fromJSON(window.REDUX_STATE);
  } catch (e) {
    return undefined;
  }
}

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
