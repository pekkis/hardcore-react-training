import React, { useEffect, Suspense, lazy } from "react";
import Loading from "./Loading";

// import IndexPage from "./containers/IndexPageContainer";
import PersonPage from "./containers/PersonPageContainer";
import { Route, Switch } from "react-router";

import "./App.pcss";

const IndexPage = lazy(() => import("./containers/IndexPageContainer"));
const LazyIndexPage = props => {
  return (
    <Suspense fallback={<span>LADDARE...</span>}>
      <IndexPage />
    </Suspense>
  );
};

const App = props => {
  const { getPersons, isLoading } = props;

  // TODO: CLEAN UP
  useEffect(() => {
    getPersons();
  }, []);

  return (
    <div>
      <h1>Fraktio ERP 50.000</h1>
      {isLoading && <Loading />}

      <Switch>
        <Route path="/" exact component={LazyIndexPage} />
        <Route path="/person/:id" exact component={PersonPage} />
        <Route
          render={() => {
            return "oh noes!";
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
