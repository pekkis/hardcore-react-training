/* global document, __DEVELOPMENT__, window */
/* eslint global-require: "off" */

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { createStore } from './utils/redux';
import { getMiddlewares, getReducers, getEnhancers, getInitialState } from './config/redux';
import Redbox from 'redbox-react';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createMemoryHistory';
import routes from './routes';

const history = createHistory({ initialEntries: ['/'] });

const { reducer, middleware, enhancer, thunk } = connectRoutes(history, routes);

const initialState = getInitialState();

const store = createStore(
  {
    ...getReducers(),
    location: reducer,
  },
  [
    ...getMiddlewares(),
    middleware,
  ],
  [
    ...getEnhancers(),
    enhancer,
  ],
  initialState,
);

console.log(store);

console.log(thunk);
