import { FunctionComponent } from "react";
import App from "./components/App";
import { Global } from "@emotion/react";
import bg from "./assets/money.jpg";
import { ErrorBoundary } from "react-error-boundary";

import { BrowserRouter } from "react-router-dom";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return <div>oh noes</div>;
};

const Root: FunctionComponent = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Global
          styles={{
            html: {
              fontFamily: "Comic Sans MS",
              backgroundImage: `url(${bg})`
            }
          }}
        />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
};

export default Root;
