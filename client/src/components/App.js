import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FIRE_PERSON, HIRE_PERSON } from "../ducks/person";
import Spinner from "./Spinner";
import IndexPage from "./IndexPage";
import PersonPage from "./PersonPage";
import NotFoundPage from "./NotFoundPage";

import { Switch, Route } from "react-router";

const App = () => {
  const dispatch = useDispatch();

  const persons = useSelector(state => state.person.get("persons"));
  const loading = useSelector(state => state.ui.get("loading") > 0);

  const doFirePerson = useCallback(
    id => {
      console.log("Son, you do not disappoint anymore.");
      dispatch({ type: FIRE_PERSON, payload: id });
    },
    [dispatch]
  );

  const doHirePerson = person => {
    dispatch({ type: HIRE_PERSON, payload: person });
  };

  return (
    <div>
      {loading && <Spinner />}
      <h1>Fraktio ERP v1000.0</h1>

      <Switch>
        <Route
          exact
          path="/"
          render={props => {
            return (
              <IndexPage
                hirePerson={doHirePerson}
                firePerson={doFirePerson}
                persons={persons}
              />
            );
          }}
        />
        <Route
          exact
          path="/person/:id"
          render={props => {
            const person = persons.get(props.match.params.id);
            return <PersonPage person={person} />;
          }}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
