import React, { FunctionComponent } from "react";
import App from "./components/App";

import { Global } from "@emotion/core";
import bg from "./assets/money.jpg";
import normalize from "emotion-normalize";

type Props = {};

const Root: FunctionComponent<Props> = () => {
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
      <App />
    </>
  );
};

export default Root;
