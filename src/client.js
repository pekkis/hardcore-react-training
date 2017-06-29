/* global document, __DEVELOPMENT__, window */
/* eslint global-require: "off" */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import { createStore } from './utils/redux';
import { getMiddlewares, getReducers, getEnhancers, getInitialState } from './config/redux';

if (__DEVELOPMENT__) {
  const Perf = require('react-addons-perf');
  window.Perf = Perf;
}

const initialState = getInitialState();

const store = createStore(
  getReducers(),
  getMiddlewares(),
  getEnhancers(),
  initialState,
);

function render(RootComponent, rootElement) {
  ReactDOM.render(
    <AppContainer>
      <RootComponent />
    </AppContainer>,
    rootElement,
  );
}

const rootElement = document.getElementById('app');
render(Root, rootElement);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const HotReloadedRoot = require('./Root').default;
    render(HotReloadedRoot, rootElement);
  });
}
