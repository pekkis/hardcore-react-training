import { FC, lazy, Suspense, useEffect } from "react";
import Spinner from "./Spinner";
import { useStore } from "../services/state";
import { Switch, Route } from "react-router";
// import IndexPage from "./IndexPage";
// import PersonPage from "./PersonPage";

const IndexPage = lazy(() => import("./IndexPage"));
const PersonPage = lazy(() => import("./PersonPage"));

// import "App.pcss";

/*
import {v4} from "uuid";
v4();
*/

export type PersonType = {
  id: string;
  firstName: string;
  lastName: string;
  gender: 0 | 1 | 2;
  age: number;
  relatedToCEO: boolean;
  isBeingFired?: boolean;
};

const App: FC = () => {
  const persons = useStore((state) => state.persons);
  const isLoading = useStore((state) => state.isLoading > 0);
  const numberOfRenders = useStore((state) => state.numberOfRenders);
  const getPersons = useStore((state) => state.getPersons);
  const hirePerson = useStore((state) => state.hirePerson);
  const firePerson = useStore((state) => state.firePerson);

  useEffect(() => {
    console.log("PERSONS HAVE CHANGED");
  }, [persons]);

  useEffect(() => {
    getPersons();
  }, []);

  const personList = Object.values(persons);

  return (
    <main>
      {isLoading && <Spinner />}

      <h1>Giga ERP</h1>
      <p>Number of renders: {numberOfRenders}</p>

      <Switch>
        <Route
          path="/person/:id"
          exact
          render={(props) => {
            const person = persons[props.match.params.id];
            return (
              <Suspense fallback={<div>laddare...</div>}>
                <PersonPage person={person} />
              </Suspense>
            );
          }}
        />

        <Route
          path="/"
          exact
          render={() => {
            return (
              <Suspense fallback={<div>laddare...</div>}>
                <IndexPage
                  persons={personList}
                  hirePerson={hirePerson}
                  firePerson={firePerson}
                />
              </Suspense>
            );
          }}
        />

        <Route
          render={() => {
            return <section>not found fallback</section>;
          }}
        />
      </Switch>
    </main>
  );
};

export default App;
