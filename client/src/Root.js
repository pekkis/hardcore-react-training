import React from "react";
import App from "./components/App";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";

const Root = props => {
  const { store } = props;

  return (
    <Provider puuppaStore={store}>
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
