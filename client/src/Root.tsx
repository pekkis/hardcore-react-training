import { FC, StrictMode } from "react";
import App from "./components/App";

import bg from "./assets/money.jpg";
import { Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

import { PeduxProvider } from "./services/pedux";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";

const Fallback = (props) => {
  console.log(props, "error proppo");
  return (
    <div>
      <h1>404 MULTIFAIL</h1>

      <p>{props.error.stack}</p>
    </div>
  );
};

const Root: FC = () => {
  return (
    <StrictMode>
      <Global
        styles={[
          emotionNormalize,
          {
            html: {
              backgroundImage: `url(${bg})`,
              fontFamily: "Comic Sans MS",
              fontSize: "16px"
            },
            body: {
              padding: "1em"
            }
          }
        ]}
      />
      <ErrorBoundary FallbackComponent={Fallback}>
        <PeduxProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PeduxProvider>
      </ErrorBoundary>
    </StrictMode>
  );
};

export default Root;
