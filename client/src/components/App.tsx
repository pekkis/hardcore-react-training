import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
  useReducer
} from "react";
import personService from "../services/person";

import styles from "./App.module.pcss";
import { PersonInterface } from "../types";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

const GET_PERSONS = "GET_PERSONS";
const HIRE_PERSON = "HIRE_PERSON";
const FIRE_PERSON = "FIRE_PERSON";

type Actions =
  | { type: typeof GET_PERSONS; payload: PersonInterface[] }
  | { type: typeof HIRE_PERSON; payload: PersonInterface }
  | { type: typeof FIRE_PERSON; payload: string };

const personReducer = (
  state: PersonInterface[],
  action: Actions
): PersonInterface[] => {
  switch (action.type) {
    case GET_PERSONS:
      return action.payload;
    case FIRE_PERSON:
      return state.filter((p) => p.id !== action.payload);
    case HIRE_PERSON:
      return state.concat(action.payload);

    default:
      return state;
  }
};

const App: FunctionComponent = () => {
  const [persons, dispatch] = useReducer(personReducer, []);

  // const [persons, setPersons] = useState<PersonInterface[]>([]);
  useEffect(() => {
    const getPersons = async () => {
      const persons = await personService.getPersons();
      dispatch({
        type: GET_PERSONS,
        payload: persons
      });
    };
    getPersons();
  }, []);

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
