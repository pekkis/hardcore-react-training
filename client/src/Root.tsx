import React, { FunctionComponent } from "react";
import { Global, css } from "@emotion/core";
import normalize from "emotion-normalize";

import { Provider } from "react-redux";

import App from "./components/App";
import money from "./assets/money.jpg";

import { BrowserRouter } from "react-router-dom";

type Props = {
  store: any;
};

const Root: FunctionComponent<Props> = props => {
  const { store } = props;

  return (
    <React.StrictMode>
      <Global
        styles={[
          normalize,
          css({
            html: {
              fontFamily: "Comic Sans MS",
              backgroundImage: `url('${money}')`
            },
            body: {
              margin: "1em"
            }
          })
        ]}
      />
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

export default Root;
