import React, { useState, useEffect, useCallback } from "react";
import PersonService from "../services/person";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

import { useSelector, useDispatch } from "react-redux";
import { HIRE_PERSON, FIRE_PERSON, GET_PERSONS } from "../ducks/person";
import Spinner from "./Spinner";

import { Switch, Route } from "react-router";

const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PERSONS });
  }, [dispatch]);

  const persons = useSelector(state => state.person.get("persons"));
  const loading = useSelector(state => state.person.get("loadingCount") > 0);

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
      <div>
        <h1>Fraktio ERP 100.001!</h1>
        {loading && <Spinner />}

        <Switch>
          <Route
            path="/person/:id"
            exact
            render={props => {
              /*
                router tunkkaa propseihin tämän:
                {
                  match: {
                    params: {
                      id: id-muuttuja
                    }
                  }
                }
              */
              const person = persons.get(props.match.params.id);

              if (!person) {
                return null;
              }

              return (
                <div>
                  <h2>
                    {person.lastName}, {person.firstName}
                  </h2>
                </div>
              );
            }}
          />

          <Route
            path="/"
            exact
            render={props => {
              const isGood = person => person.age < 30;
              const goodPersons = persons.filter(isGood);
              const badPersons = persons.filter(p => !isGood(p));

              return (
                <div>
                  <HirePersonForm hirePerson={hirePerson} />
                  <h2>Pahikset</h2>
                  <PersonList
                    firePerson={firePerson}
                    persons={badPersons}
                    showMetadata
                  />
                  <h2>Hyvikset</h2>
                  <PersonList firePerson={firePerson} persons={goodPersons} />
                </div>
              );
            }}
          />

          <div>OH NOES NOT FOUND</div>
        </Switch>
      </div>
    </div>
  );
};

export default App;
