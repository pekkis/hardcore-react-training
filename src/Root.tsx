import { FC, lazy, Suspense } from "react";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const IndexPage = lazy(() => import("./components/IndexPage"));
const DuckPage = lazy(() => import("./components/DuckPage"));

// import IndexPage from "./components/IndexPage";
// import DuckPage from "./components/DuckPage";
// import Welcome from "./components/welcome/Welcome";

const LazyLoader: FC = ({ children }) => {
  return <Suspense fallback={<>...</>}>{children}</Suspense>;
};

const Root: FC = () => {
  // All React components must return one thing. A fragment (the empty tag <>) is such "one thing" that has no markup.
  return (
    <>
      <ErrorBoundary fallback={<div>OH NOES ERROROS TERRIBLOS</div>}>
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
