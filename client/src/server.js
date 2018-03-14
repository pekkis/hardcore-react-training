import { getScripts, getStyles } from "@dr-kobros/broilerplate/lib/serverUtils";
import { createStore } from "./utils/redux";
import { getMiddlewares, getReducers, getEnhancers } from "./config/redux";
import { getInitialState } from "./config/state";
import ServerRoot from "./ServerRoot";
import ReactDOMServer from "react-dom/server";
import React from "react";
import { getPersons } from "./ducks/person";
import template from "./config/template";
import transit from "transit-immutable-js";
import { ServerStyleSheet } from "styled-components";

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

    const sheet = new ServerStyleSheet();

    await store.dispatch(getPersons());

    const html = ReactDOMServer.renderToString(
      sheet.collectStyles(<ServerRoot store={store} location={req.path} />)
    );

    const tpl = template(
      html,
      scripts,
      styles,
      sheet.getStyleTags(),
      transit.toJSON(store.getState())
    );

    res.send(tpl);
  };
};

export default respond;
