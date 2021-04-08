import { FunctionComponent } from "react";
import App from "./components/App";
// import { ThemeProvider } from "theme-ui";
// import theme from "./services/theme";
import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

import gimmeTheMoney from "./assets/money.jpg";

console.log(emotionNormalize);

// <ThemeProvider theme={theme}>

const Root: FunctionComponent = () => {
  return (
    <>
      <Global
        styles={[
          emotionNormalize,
          {
            html: {
              backgroundImage: `url(${gimmeTheMoney})`,
              fontFamily: "Comic Sans MS"
            }
          }
        ]}
      />
      <App />
    </>
  );
};

export default Root;
