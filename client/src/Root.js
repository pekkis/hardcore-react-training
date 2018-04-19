import React from "react";
import App from "./components/containers/AppContainer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const Root = props => {
  const { store } = props;
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

export default Root;
