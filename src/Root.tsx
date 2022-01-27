import { VFC, lazy, Suspense } from "react";
import App from "./components/App";
import { ErrorBoundary } from "react-error-boundary";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import IndexPage from "./components/IndexPage";
// import DuckPage from "./components/DuckPage";
const IndexPage = lazy(() => import("./components/IndexPage"));
const DuckPage = lazy(() => import("./components/DuckPage"));

const LazyLoader = (props) => {
  const { children } = props;
  return <Suspense fallback={<>laddaring!</>}>{children}</Suspense>;
};

const Root: VFC = () => {
  // All React components must return one thing. A fragment (the empty tag <>) is such "one thing" that has no markup.
  return (
    <>
      <ErrorBoundary fallback={<h1>PUUPPA HAS HIT THE FAN</h1>}>
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
            </Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
};

export default Root;
