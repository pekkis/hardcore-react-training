import React from "react";
import App from "./components/containers/AppContainer";
import { GoogleFont, TypographyStyle } from "react-typography";
import typography from "./services/typography";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const Root = props => {
  const { store } = props;
  return (
    <>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default Root;
