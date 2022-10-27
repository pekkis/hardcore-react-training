import { FC, Suspense, lazy, ReactNode } from "react";
import App from "./components/App";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const IndexPage = lazy(() => import("./components/IndexPage"));
const DuckPage = lazy(() => import("./components/DuckPage"));

// import IndexPage from "./components/IndexPage";
// import DuckPage from "./components/DuckPage";

const LazyLoader = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<div>laddare, laddaree.</div>}>{children}</Suspense>
  );
};

const Root: FC = () => {
  return (
    <>
      <ErrorBoundary
        onError={(e) => {
          console.log("ERRORE", e);
          // send the god damn errore to Sentry etc
        }}
        fallbackRender={() => {
          return <h1>OH NO! ERRORE FATALE HAS OCCURADOS!</h1>;
        }}
      >
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
