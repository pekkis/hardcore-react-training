import React from "react";
import App from "./components/App";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  backgroundColor: "rgb(33, 33, 33)"
};

const Root = props => {
  return (
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  );
};

export default Root;
