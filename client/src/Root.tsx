import React, { FunctionComponent } from "react";
import App from "./components/App";

import { ThemeProvider } from "emotion-theming";
import { lighten } from "polished";

const Root: FunctionComponent = () => {
  return <App />;
};

export default Root;
