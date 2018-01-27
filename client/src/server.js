import React from "react";
import ReactDOMServer from "react-dom/server";
import Root from "./ServerRoot";
import template from "./config/template";
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

import { getScripts, getStyles } from "@dr-kobros/broilerplate/lib/serverUtils";

const respond = stats => {
  const chunks = ["meta", "vendor", "client"];

  const scripts = getScripts(stats, chunks);
  const styles = getStyles(stats, chunks);

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
      sheet.collectStyles(
        <Root store={store} context={context} location={req.path} />
      )
    );

    const sheets = sheet.getStyleTags();
    const raw = store.getState();
    const state = transit.toJSON(raw);

    const tpl = template(html, scripts, styles, sheets, state);

    res.send(tpl);
  };
};

export default respond;
