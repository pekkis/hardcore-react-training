import { VFC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

const Root: VFC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary
        onError={(e) => {
          // loggaa virhe jonnekin
        }}
        fallbackRender={({ error }) => {
          return (
            <div>
              <h1>OH NOES!!!</h1>

              {error.message}
            </div>
          );
        }}
      >
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Root;
