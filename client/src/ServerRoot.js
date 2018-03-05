import React from "react";
import App from "./components/containers/AppContainer";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";

const Root = props => {
  const { store, location } = props;
  return (
    <Provider store={store}>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </Provider>
  );
};

export default Root;
