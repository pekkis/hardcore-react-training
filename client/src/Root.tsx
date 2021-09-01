import { FC, StrictMode } from "react";
import App from "./components/App";
import { Global } from "@emotion/react";
import bg from "./assets/money.jpg";
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
              fontFamily: "Comic Sans MS"
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
