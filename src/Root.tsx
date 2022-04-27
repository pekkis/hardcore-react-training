import { FC, StrictMode } from "react";
import App from "./components/App";
import { ErrorBoundary } from "react-error-boundary";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import IndexPage from "./components/IndexPage";
import { lazy } from "react";
import LazyLoader from "./components/LazyLoader";

// import DuckPage from "./components/DuckPage";

const DuckPage = lazy(() => import("./components/DuckPage"));
const IndexPage = lazy(() => import("./components/IndexPage"));

const Root: FC = () => {
  // All React components must return one thing. A fragment (the empty tag <>) is such "one thing" that has no markup.
  return (
    <ErrorBoundary
      onError={(e) => {
        console.log("ERRORE FATALE", e);
        // lähetetään errori sentryyn tms
      }}
      fallback={
        <div>
          <h1>Multifail 404</h1>
        </div>
      }
    >
      <StrictMode>
        <BrowserRouter>
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

              <Route path="*" element={<div>not found page?</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </ErrorBoundary>
  );
};

export default Root;
