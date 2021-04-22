import { FunctionComponent, useEffect, useCallback, useReducer } from "react";

import Spinner from "./Spinner";
import { useStore } from "../services/state";
// import IndexPage from "./IndexPage";
import { Switch, Route } from "react-router";
// import PersonPage from "./PersonPage";

import React, { Suspense } from "react";

const IndexPage = React.lazy(() => import("./IndexPage"));
const PersonPage = React.lazy(() => import("./PersonPage"));

const LazyLoadedComponent = ({ children }) => {
  return (
    <div>
      <Suspense fallback={<div>LADDARE</div>}>{children}</Suspense>
    </div>
  );
};

const App: FunctionComponent = () => {
  /*
  combine jos tuntuu siltä
  */
  const persons = useStore((state) => state.persons);
  const loadingCount = useStore((state) => state.loadingCount);
  const counter = useStore((state) => state.counter);
  const getPersons = useStore((state) => state.getPersons);
  const firePerson = useStore((state) => state.firePerson);
  const hirePerson = useStore((state) => state.hirePerson);
  const incrementCounter = useStore((state) => state.incrementCounter);

  useEffect(() => {
    console.log("Joka ikinen kerta");
  });

  useEffect(() => {
    console.log("Joka kerta kun personit muuttuu, ja saapuu oikea yö.");
  }, [persons]);

  useEffect(() => {
    getPersons();
    console.log("Vain kerran, kun komponentti on rendattu ekan kerran");
  }, []);

  useEffect(() => {
    const tussi = setInterval(() => {
      incrementCounter();
    }, 1000);
    return () => {
      clearInterval(tussi);
    };
  }, []);

  return (
    <main>
      <h1>Mega ERP</h1>

      {loadingCount && <Spinner />}
      <p>Taimeria updeitattu {counter} kertaa.</p>
      <hr />

      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <LazyLoadedComponent>
                <IndexPage
                  firePerson={firePerson}
                  hirePerson={hirePerson}
                  persons={persons}
                />
              </LazyLoadedComponent>
            );
          }}
        />

        <Route
          exact
          path="/person/:id"
          render={(props) => {
            const personId = props.match.params.id;
            const person = persons.find((p) => p.id === personId);

            return (
              <LazyLoadedComponent>
                <PersonPage person={person} />
              </LazyLoadedComponent>
            );
          }}
        />
        <Route
          render={() => {
            return <section>NOT FOUND</section>;
          }}
        />
      </Switch>
    </main>
  );
};

export default App;
