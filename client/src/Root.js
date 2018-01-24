import React from "react";
import App from "./components/container/AppContainer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const Root = props => {
  const { store } = props;
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

export default Root;
