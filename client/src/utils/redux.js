import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export function createStore(
  reducers,
  middlewares = [],
  enhancers = [],
  initialState = undefined,
) {
  // React little router stuff

  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(
      ...middlewares,
    ),
    ...enhancers,
  )(reduxCreateStore);

  const combinedReducer = combineReducers({
    ...reducers,
  });

  return createStoreWithMiddleware(combinedReducer, initialState);
}
