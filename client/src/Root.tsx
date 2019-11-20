import React, { FunctionComponent } from "react";
import App from "./components/App";

import { Global, css } from "@emotion/core";
import normalize from "emotion-normalize";

import money from "./assets/money.jpg";

type Props = {
  store?: any;
};

const Root: FunctionComponent<Props> = () => {
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
      <App />
    </React.StrictMode>
  );
};

export default Root;
