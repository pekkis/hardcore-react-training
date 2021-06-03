import { FC, StrictMode } from "react";
import App from "./components/App";

import bg from "./assets/money.jpg";
import { Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

const Root: FC = () => {
  return (
    <StrictMode>
      <Global
        styles={[
          emotionNormalize,
          {
            html: {
              backgroundImage: `url(${bg})`,
              fontFamily: "Comic Sans MS",
              fontSize: "16px"
            },
            body: {
              padding: "1em"
            }
          }
        ]}
      />
      <App />
    </StrictMode>
  );
};

export default Root;
