import React, { FunctionComponent } from "react";
import App from "./components/App";

import { ThemeProvider } from "emotion-theming";
import { lighten } from "polished";

const Root: FunctionComponent = () => {
  return (
    <ThemeProvider
      theme={{
        borderColor: lighten(0.5, "rgb(0, 0, 0)")
      }}
    >
      <App />
    </ThemeProvider>
  );
};

export default Root;
