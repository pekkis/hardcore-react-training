/* global document, __DEVELOPMENT__, window */
/* eslint global-require: "off" */

import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import Root from './Root';

// import { initializeCurrentLocation } from 'redux-little-router';
// import { createStore } from './utils/redux';
// import { getMiddlewares, getRoutes, getReducers, getEnhancers } from './config/redux';

if (__DEVELOPMENT__) {
  const Perf = require('react-addons-perf');
  window.Perf = Perf;
}

console.log('Suckling on a duckling!');

/*
const initialState = undefined;

const store = createStore(
  getReducers(),
  getRoutes(),
  getMiddlewares(),
  getEnhancers(),
  initialState,
);

const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}
*/

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
