/* global document */
/* eslint global-require: "off" */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';

import { browserHistory } from 'react-router';

import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createStore } from './utils/redux';
import * as reducers from './ducks';

if (__DEVELOPMENT__) {
  const Perf = require('react-addons-perf');
  window.Perf = Perf;
}

let middleware = [
  thunk,
  promiseMiddleware(),
];

if (__DEVELOPMENT__) {
  const createLogger = require('redux-logger');
  middleware = middleware.concat([createLogger()]);
}

const { store, history } = createStore(
  reducers,
  browserHistory,
  middleware,
  [],
  undefined,
);

const root = document.getElementById('app');
render(
  <AppContainer>
     <Root store={store} history={history} />
  </AppContainer>,
  root
);

// No I don't understand what happens under the hood but it works :)
if (module.hot) {
  module.hot.accept('./Root', () => {
    const Root = require('./Root').default;
    render(
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>,
      root
    );
  });
}
