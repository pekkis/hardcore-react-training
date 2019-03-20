import React from "react";
import App from "./components/App";
import { ThemeProvider } from "styled-components";

const theme = {
  borderRadius: "15px"
};

const Root = props => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default Root;
