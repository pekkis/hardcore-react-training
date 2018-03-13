import React from "react";
import { Provider } from "react-redux";
import App from "./components/containers/AppContainer";

const Root = props => {
  const { store } = props;

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
