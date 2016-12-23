/* global document */
/* eslint global-require: "off" */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createStore } from './utils/redux';
import * as reducers from './ducks';
import routes from './routes';
import { match, browserHistory } from 'react-router';
import { trigger } from 'redial';
import config from '../config.server';

if (__DEVELOPMENT__) {
  const Perf = require('react-addons-perf');
  window.Perf = Perf;
}

function getInitialState() {
  try {
    return JSON.parse(
      document.getElementById('__HTMLDOCUMENT__UNIVERSAL_STATE').textContent
    );
  } catch(e) {
    return undefined;
  }
}

const initialState = getInitialState();

let middleware = [
  thunk,
  promiseMiddleware(),
];

if (true || __DEVELOPMENT__) {
  const createLogger = require('redux-logger');
  middleware = middleware.concat([createLogger()]);
}

const { store, history } = createStore(
  reducers,
  browserHistory,
  middleware,
  [],
  initialState || undefined
);

let isInitial = true;

console.log(initialState, 'initialState');

history.listen(() => {

  match({ routes, history }, (error, redirectLocation, renderProps) => {
    const { components } = renderProps;

    const locals = {
      path: renderProps.location.pathname,
      query: renderProps.location.query,
      params: renderProps.params,
      dispatch: store.dispatch,
    };

    if (isInitial && initialState) {
      isInitial = false;
    } else {
      console.log('trigger fetch');
      trigger('fetch', components, locals);
    }

    console.log('trigger defer');
    trigger('defer', components, locals);

  });
});

const webfonts = {
  google: {
    families: ['Source Sans Pro:300,600'],
  }
};

const root = document.getElementById('app');
render(
  <AppContainer>
     <Root routes={routes} store={store} history={history} webfonts={webfonts} />
  </AppContainer>,
  root
);

// No I don't understand what happens under the hood but it works :)
if (module.hot) {
  module.hot.accept('./Root', () => {
    const Root = require('./Root').default;
    render(
      <AppContainer>
        <Root routes={routes} store={store} history={history} webfonts={webfonts} />
      </AppContainer>,
      root
    );
  });
}
