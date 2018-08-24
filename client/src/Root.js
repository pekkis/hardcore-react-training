import React from "react";
import App from "./components/containers/AppContainer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "react-error-boundary";

const Root = props => {
  const { store } = props;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
