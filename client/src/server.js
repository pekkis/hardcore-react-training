import React from "react";
import ReactDOMServer from "react-dom/server";
import Root from "./ServerRoot";
import template from "./config/template";
import isArray from "lodash.isarray";
import { createStore } from "./utils/redux";
import {
  getMiddlewares,
  getReducers,
  getEnhancers,
  getInitialState
} from "./config/redux";
import transit from "transit-immutable-js";
import { ServerStyleSheet } from "styled-components";

import { fetchPersons } from "ducks/generic";

const fileMapper = (chunks, assetsByChunkName, mapper, extension) => {
  return chunks
    .map(chunk => assetsByChunkName[chunk])
    .map(chunk => (isArray(chunk) ? chunk : [chunk]))
    .map(files =>
      files.filter(file => file.endsWith(extension)).map(mapper).join("")
    )
    .join("");
};

const respond = stats => {
  const chunks = ["meta", "vendor", "client"];

  const scripts = fileMapper(
    chunks,
    stats.assetsByChunkName,
    file => `<script type="text/javascript" src="/${file}"></script>`,
    "js"
  );

  const styles = fileMapper(
    chunks,
    stats.assetsByChunkName,
    file => `<link rel="stylesheet" href="/${file}" />`,
    "css"
  );

  /*
  This is a kludge to counter history library's missing stuff.
  Don't remove, otherwise serializing the query params fail.
  */
  /*
  raw.location.query = {
    ...raw.location.query
  };
  */

  return async (req, res, next) => {
    const initialState = getInitialState();
    const store = createStore(
      getReducers(),
      getMiddlewares(),
      getEnhancers(),
      initialState
    );

    await store.dispatch(fetchPersons());

    const context = {};

    const sheet = new ServerStyleSheet();
    const html = ReactDOMServer.renderToString(
      sheet.collectStyles(<Root store={store} />)
    );

    const sheets = sheet.getStyleTags();
    const raw = store.getState();
    const state = transit.toJSON(raw);

    const tpl = template(html, scripts, styles, sheets, state);

    res.send(tpl);
  };
};

export default respond;
