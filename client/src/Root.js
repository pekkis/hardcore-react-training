import React from "react";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import money from "./assets/money.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Comic Sans MS";
    margin: 1em;
    font-size: 16px;
    background-image: url(${money});
  }
`;

const Root = props => {
  const { store } = props;

  return (
    <>
      <GlobalStyle />
      <Normalize />
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default Root;
