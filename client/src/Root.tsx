import { FC, StrictMode } from "react";
import App from "./components/App";
import { Global } from "@emotion/react";
import bg from "./assets/money.jpg";
import emotionNormalize from "emotion-normalize";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = () => {
  return (
    <main>
      <h1>OH NOES MEGA ERROR</h1>
      <p>Something really bad has happenado!</p>
    </main>
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
              fontFamily: "Comic Sans MS"
            },
            body: {
              padding: "1em"
            }
          }
        ]}
      />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(e) => {
          console.log("TROUBLES WITH THE RIBULS", e, e2, e3);
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </StrictMode>
  );
};

export default Root;
