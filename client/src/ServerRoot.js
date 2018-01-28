import React from "react";
import App from "./components/container/AppContainer";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";

const Root = props => {
  const { store, context, location } = props;
  return (
    <StaticRouter context={context} location={location}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
};

export default Root;
