import React from "react";
import { getScripts, getStyles } from "@dr-kobros/broilerplate/lib/serverUtils";
import { createStore } from "./utils/redux";
import {
  getMiddlewares,
  getReducers,
  getEnhancers,
  getInitialState
} from "./config/redux";
import ReactDOMServer from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import Root from "./ServerRoot";
import transit from "transit-immutable-js";
import template from "./config/template";

import { getPersons } from "ducks/person";

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

    await store.dispatch(getPersons());

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
