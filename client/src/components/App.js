import React, { useEffect, useCallback, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.pcss";
import { FIRE_PERSON, HIRE_PERSON, GET_PERSONS } from "../ducks/person";
import Spinner from "./Spinner";
// import IndexPage from "./IndexPage";

import PersonPage from "./PersonPage";
import { Switch, Route } from "react-router";
import NotFound from "./NotFound";

const IndexPage = React.lazy(() => import("./IndexPage"));

const App = props => {
  const persons = useSelector(state => state.person.get("persons"));
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.ui.get("loading") > 0);

  useEffect(() => {
    dispatch({ type: GET_PERSONS });
    dispatch({ type: GET_PERSONS });
  }, [dispatch]);

  const firePerson = useCallback(
    id => {
      dispatch({ type: FIRE_PERSON, payload: id });
    },
    [dispatch]
  );

  const hirePerson = useCallback(
    person => {
      dispatch({ type: HIRE_PERSON, payload: person });
    },
    [dispatch]
  );

  return (
    <div>
      {isLoading && <Spinner />}
      <h1>Fraktio ERP 50.000.000</h1>

      <Switch>
        <Route
          path="/"
          exact
          render={props => {
            return (
              <Suspense fallback={<div>LADDARE</div>}>
                <IndexPage
                  persons={persons}
                  firePerson={firePerson}
                  hirePerson={hirePerson}
                />
              </Suspense>
            );
          }}
        />
        <Route
          path="/person/:id"
          exact
          render={props => {
            console.log(props, "proppo");
            const person = persons.get(props.match.params.id);
            return <PersonPage person={person} />;
          }}
        />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
