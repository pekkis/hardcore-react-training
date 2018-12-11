import React from "react";
import App from "./components/App";
import { GoogleFont, TypographyStyle } from "react-typography";
import typography from "./services/typography";

const Root = props => {
  return (
    <>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <App />
    </>
  );
};

export default Root;
