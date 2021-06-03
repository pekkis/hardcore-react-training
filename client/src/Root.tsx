import { FC, StrictMode } from "react";
import App from "./components/App";

import bg from "./assets/money.jpg";
import { Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

import { PeduxProvider } from "./services/pedux";

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
      <PeduxProvider>
        <App />
      </PeduxProvider>
    </StrictMode>
  );
};

export default Root;
