import React from "react";
import App from "./components/containers/AppContainer";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const darkTheme = {
  backgroundColor: "rgb(33, 33, 33)"
};

const Root = props => {
  const { store } = props;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
