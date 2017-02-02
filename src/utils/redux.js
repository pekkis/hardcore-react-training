import { createStore as reduxCreateStore, applyMiddleware, combineReducers, compose } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export function createStore(
  reducers,
  rawHistory,
  middlewares = [],
  enhancers = [],
  initialState = undefined,
) {
  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(
      ...middlewares,
    ),
    ...enhancers,
  )(reduxCreateStore);

  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });
  const store = createStoreWithMiddleware(reducer, initialState);
  const history = syncHistoryWithStore(rawHistory, store);

  return { history, store };
}
