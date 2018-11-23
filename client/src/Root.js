import React from "react";
import App from "./components/containers/AppContainer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { TypographyStyle, GoogleFont } from "react-typography";
import typography from "./services/typography";

const Root = props => {
  const { store } = props;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          <App />
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
