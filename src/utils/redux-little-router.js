import { createStore as reduxCreateStore, applyMiddleware, combineReducers, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerForBrowser } from 'redux-little-router';

export function createStore(
  routes,
  reducers,
  rawHistory,
  middlewares = [],
  enhancers = [],
  initialState = undefined,
) {

  const {
    routerEnhancer,
    routerMiddleware
  } = routerForBrowser({
    // The configured routes. Required.
    routes,
    // The basename for all routes. Optional.
    // basename: '/'
  });

  middlewares.unshift(routerMiddleware);
  enhancers.unshift(routerEnhancer);

  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(
      ...middlewares
    ),
    ...enhancers
  )(reduxCreateStore);

  const store = createStoreWithMiddleware(reducers, initialState);
  return store;
}
