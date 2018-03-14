import React from "react";
import { Provider } from "react-redux";
import App from "./components/containers/AppContainer";
import { StaticRouter } from "react-router";

const ServerRoot = props => {
  const { store, location } = props;

  return (
    <Provider store={store}>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </Provider>
  );
};

export default ServerRoot;
