import React, { useEffect } from "react";
import PersonList from "./PersonList";

import HirePersonForm from "./HirePersonForm";
import { useDispatch, useSelector } from "react-redux";

import { Switch, Route } from "react-router";

import { HIRE_PERSON, FIRE_PERSON, getPersons } from "../ducks/person";

const NeedsPerson = props => {
  const { person, children, ...rest } = props;
  if (!person) {
    return null;
  }

  return children({
    ...rest,
    person
  });
};

const App = props => {
  const dispatch = useDispatch();
  const persons = useSelector(state => state.person);

  console.log(persons, "persons");
  useEffect(() => {
    dispatch(getPersons());
  }, [dispatch]);

  const firePerson = id => {
    dispatch({ type: FIRE_PERSON, payload: id });
  };

  const hirePerson = person => {
    dispatch({ type: HIRE_PERSON, payload: person });
  };

  const isGood = person => person.age <= 30;

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <>
      <div>
        <h1>Fraktio ERP 50.000 Super!</h1>

        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              return (
                <div>
                  <HirePersonForm hirePerson={hirePerson} />
                  <h2>Pahikset</h2>
                  <PersonList firePerson={firePerson} persons={badPersons} />
                  <h2>Hyvikset</h2>
                  <PersonList firePerson={firePerson} persons={goodPersons} />
                </div>
              );
            }}
          />
          <Route
            path="/person/:id"
            exact
            render={props => {
              const person = persons.find(p => p.id === props.match.params.id);

              return (
                <NeedsPerson person={person}>
                  {({ person: p }) => {
                    return (
                      <div>
                        <h2>
                          {p.lastName}, {p.firstName}
                        </h2>
                      </div>
                    );
                  }}
                </NeedsPerson>
              );
            }}
          />
        </Switch>
      </div>
    </>
  );
};

export default App;
