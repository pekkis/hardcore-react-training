import React from "react";
import App from "./components/containers/AppContainer";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";

const ServerRoot = props => {
  const { store, context, location } = props;

  return (
    <Provider store={store}>
      <StaticRouter context={context} location={location}>
        <App />
      </StaticRouter>
    </Provider>
  );
};

export default ServerRoot;
