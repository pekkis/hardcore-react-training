import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

export function createStore(
  reducers,
  middlewares = [],
  enhancers = [],
  initialState = undefined
) {
  const createStoreWithMiddleware = composeWithDevTools(
    ...enhancers,
    applyMiddleware(...middlewares)
  )(reduxCreateStore);

  const combinedReducer = combineReducers({
    ...reducers
  });

  return createStoreWithMiddleware(combinedReducer, initialState);
}
