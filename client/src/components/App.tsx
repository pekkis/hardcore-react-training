import React, { FunctionComponent, useEffect, useCallback } from "react";

import styles from "./App.module.pcss";
import { PersonInterface } from "../types";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../ducks";

import { HIRE_PERSON, FIRE_PERSON, getPersons } from "../ducks/person";

const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  const persons = useSelector<AppState, PersonInterface[]>(
    (state) => state.person.persons
  );

  useEffect(() => {
    dispatch(getPersons());
  }, [dispatch]);

  const firePerson = useCallback(
    (id: string) => {
      dispatch({
        type: FIRE_PERSON,
        payload: id
      });
    },
    [dispatch]
  );

  const hirePerson = useCallback(
    (hiredPerson: PersonInterface) => {
      dispatch({
        type: HIRE_PERSON,
        payload: hiredPerson
      });
    },
    [dispatch]
  );

  const isGoodPerson = (p: PersonInterface) => p.age < 30;

  const goodPersons = persons.filter(isGoodPerson);
  const badPersons = persons.filter((p) => !isGoodPerson(p));

  return (
    <>
      <div className={styles.root}>
        <h1>Mega ERP 50.000</h1>

        <HirePersonForm hirePerson={hirePerson} />

        <div>
          <h2>Pahat ihmiset</h2>
          <PersonList persons={badPersons} firePerson={firePerson} />

          <h2>Hyvät ihmiset</h2>
          <PersonList persons={goodPersons} firePerson={firePerson} />
        </div>
      </div>
    </>
  );
};

export default App;
