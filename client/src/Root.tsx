import React, { FunctionComponent } from "react";
import App from "./components/App";

import { ThemeProvider } from "emotion-theming";
import { lighten } from "polished";

import { ErrorBoundary } from "react-error-boundary";

const Root: FunctionComponent = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

export default Root;
