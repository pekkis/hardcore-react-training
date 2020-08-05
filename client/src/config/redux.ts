import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";
import * as reducers from "../ducks";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { Reducer, StoreEnhancer, Middleware } from "redux";

const sagaMiddleware = createSagaMiddleware();

export function getMiddlewares(): Middleware[] {
  const middlewares = [thunk, promiseMiddleware, sagaMiddleware];
  return middlewares;
}

export function getSagaMiddleware(): SagaMiddleware {
  return sagaMiddleware;
}

export function getReducers(): { [key: string]: Reducer } {
  return reducers;
}

export function getEnhancers(): StoreEnhancer[] {
  return [];
}
