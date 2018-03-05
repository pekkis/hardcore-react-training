import { getScripts, getStyles } from "@dr-kobros/broilerplate/lib/serverUtils";
import Root from "./ServerRoot";
import { createStore } from "./utils/redux";
import { getMiddlewares, getReducers, getEnhancers } from "./config/redux";
import { getInitialState } from "./config/state";
import { getPersons } from "./ducks/person";

import ReactDOMServer from "react-dom/server";
import React from "react";
import template from "./config/template";
import transit from "transit-immutable-js";
import { ServerStyleSheet } from "styled-components";

/*
function render(Component, rootElement) {
  ReactDOM.render(<Component store={store} />, rootElement);
}
*/

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

    // WTF STATE?
    await store.dispatch(getPersons());

    const state = store.getState();

    const sheet = new ServerStyleSheet();

    const html = ReactDOMServer.renderToString(
      sheet.collectStyles(<Root store={store} location={req.path} />)
    );

    const sheets = sheet.getStyleTags(); // or sheet.getStyleElement()

    const doc = template(html, scripts, styles, sheets, transit.toJSON(state));
    res.send(doc);
  };
};

export default respond;
