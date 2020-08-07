import React, { FunctionComponent, useCallback } from "react";

import styles from "./App.module.pcss";
import { PersonInterface } from "../types";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../ducks";
import { values, pipe, ascend, prop, sortWith } from "ramda";

import { HIRE_PERSON, FIRE_PERSON } from "../ducks/person";

import trolloLogo from "../assets/trollo.png";
import Loading from "./Loading";

const sorter = sortWith<PersonInterface>([
  ascend(prop("lastName")),
  ascend(prop("firstName"))
]);

const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  const persons = useSelector<AppState, PersonInterface[]>((state) =>
    pipe(sorter)(values(state.person.persons))
  );

  const loading = useSelector<AppState, boolean>(
    (state) => state.ui.loading > 0
  );

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
    <div className={styles.root}>
      {loading && <Loading />}
      <h1>
        <img src={trolloLogo} alt="Trollo" />
        Mega ERP 50.000
      </h1>

      <HirePersonForm hirePerson={hirePerson} />

      <div>
        <h2>Pahat ihmiset</h2>
        <PersonList persons={badPersons} firePerson={firePerson} />

        <h2>Hyvät ihmiset</h2>
        <PersonList persons={goodPersons} firePerson={firePerson} />
      </div>
    </div>
  );
};

export default App;
