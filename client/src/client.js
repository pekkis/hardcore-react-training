/* global document, __DEVELOPMENT__, window */
/* eslint global-require: "off" */

/*
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import Redbox from 'redbox-react';
*/

/*
import { createStore } from './utils/redux';
import { getMiddlewares, getReducers, getEnhancers, getInitialState } from './config/redux';
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';


/*
const initialState = getInitialState();

const store = createStore(
  getReducers(),
  getMiddlewares(),
  getEnhancers(),
  initialState,
);
*/

function render(Component, rootElement) {

  ReactDOM.render(
    <Component />,
    rootElement
  );
}

const rootElement = document.getElementById('app');
render(Root, rootElement);
