import React, { FunctionComponent } from "react";
import App from "./components/App";

import { Global } from "@emotion/core";
import bg from "./assets/money.jpg";
import normalize from "emotion-normalize";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

type Props = {
  store: any;
};

const Root: FunctionComponent<Props> = props => {
  const { store } = props;
  return (
    <>
      <Global
        styles={[
          normalize,
          {
            html: {
              fontFamily: "Comic Sans MS",
              backgroundImage: `url(${bg})`
            },
            body: {
              padding: "1em"
            }
          }
        ]}
      />
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default Root;
