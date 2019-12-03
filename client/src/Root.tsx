import React, { FunctionComponent } from "react";
import App from "./components/App";
import { Global, css, jsx } from "@emotion/core";
import normalize from "emotion-normalize";

import money from "./assets/money.jpg";
import ErrorBoundary from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "redux";

type Props = {
  store: Store;
};

const Root: FunctionComponent<Props> = props => {
  const { store } = props;
  return (
    <>
      <ErrorBoundary
        onError={e => {
          console.log(e, "errore");
        }}
        FallbackComponent={props => {
          return (
            <div
              css={{
                color: "rgb(255, 0, 0)"
              }}
            >
              oh noes errore fataale
            </div>
          );
        }}
      >
        <Global
          styles={[
            normalize,
            css({
              html: {
                fontFamily: "Comic Sans MS",
                backgroundImage: `url(${money})`
              },
              body: {
                padding: "1em"
              }
            })
          ]}
        />
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </>
  );
};

export default Root;
