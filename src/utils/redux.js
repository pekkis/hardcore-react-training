import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerForBrowser } from 'redux-little-router';

export function createStore(
  reducers,
  routes,
  middlewares = [],
  enhancers = [],
  initialState = undefined,
) {
  // React little router stuff
  const {
    reducer,
    middleware,
    enhancer,
  } = routerForBrowser({
    routes,
  });

  middlewares.push(middleware);

  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(
      ...middlewares,
    ),
    ...enhancers,
    enhancer,
  )(reduxCreateStore);

  const combinedReducer = combineReducers({
    ...reducers,
    router: reducer,
  });

  return createStoreWithMiddleware(combinedReducer, initialState);
}
