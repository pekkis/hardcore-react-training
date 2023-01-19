import { FC, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import { Provider } from "./components/DuckContext";

import { ErrorBoundary } from "react-error-boundary";
import LazyLoader from "./components/LazyLoader";

const IndexPage = lazy(() => import("./components/IndexPage"));
const DuckPage = lazy(() => import("./components/DuckPage"));

// routes
// import IndexPage from "./components/IndexPage";
// import DuckPage from "./components/DuckPage";

const Root: FC = () => {
  // All React components must return one thing. A fragment (the empty tag <>) is such "one thing" that has no markup.
  return (
    <>
      <ErrorBoundary
        onError={(e) => {
          console.log(e);
          // Loggaa virhe jonnekin systeemiiiiiiin
        }}
        FallbackComponent={(props) => {
          console.log("FALLBACK PROPS", props);

          return (
            <main>
              <h1>404 MULTIFAIL</h1>
            </main>
          );
        }}
      >
        <BrowserRouter>
          <Provider
            quotations={["kvaak quak", "kvaaketi kvaak", "kvaaaaaaaaaaaaaaak!"]}
          >
            <Routes>
              <Route path="/" element={<App />}>
                <Route
                  index
                  element={
                    <LazyLoader>
                      <IndexPage />
                    </LazyLoader>
                  }
                />
                <Route
                  path="/duck/:id"
                  element={
                    <LazyLoader>
                      <DuckPage />
                    </LazyLoader>
                  }
                />
              </Route>
            </Routes>
          </Provider>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
};

export default Root;
