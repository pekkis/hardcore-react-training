import { FC, useCallback, useEffect, useReducer, useState } from "react";
import personService from "../services/person";
import PersonList from "./PersonList";
import produce from "immer";
// import { append } from "ramda";
import HirePersonForm from "./HirePersonForm";

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
};

// HOOKS
// useState, useReducer
// async

type Action =
  | { type: "FIRE_PERSON"; payload: string }
  | { type: "HIRE_PERSON"; payload: PersonType }
  | { type: "GET_PERSONS" }
  | { type: "GET_PERSONS_PENDING" }
  | { type: "GET_PERSONS_REJECTED"; error: true; payload: Error }
  | { type: "GET_PERSONS_FULFILLED"; payload: PersonType[] };

type State = {
  persons: PersonType[];
  numberOfRenders: number;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "HIRE_PERSON":
      return produce(state, (draft) => {
        draft.persons.push(action.payload);
      });

    case "FIRE_PERSON":
      return produce(state, (draft) => {
        draft.persons = draft.persons.filter((p) => p.id !== action.payload);
      });

    case "GET_PERSONS_FULFILLED":
      return produce(state, (draft) => {
        draft.persons = action.payload;
      });

    default:
      return state;
  }
};

const isGood = (p: PersonType): boolean =>
  p.age < 30 || p.relatedToCEO === true;

const App: FC = () => {
  /*
  const [persons, setPersons] = useState<PersonType[]>([]);
  const [numberOfRenders, setNumberOfRenders] = useState(0);
  */

  const [{ persons, numberOfRenders }, dispatch] = useReducer(reducer, {
    numberOfRenders: 0,
    persons: []
  });

  const firePerson = useCallback(
    (id: string) => {
      dispatch({
        type: "FIRE_PERSON",
        payload: id
      });
    },
    [dispatch]
  );

  const hirePerson = useCallback(
    (person: PersonType) => {
      dispatch({
        type: "HIRE_PERSON",
        payload: person
      });
    },
    [dispatch]
  );

  /*
  useEffect(() => {
    console.log("HELLUREI HELLUREI MIKSI ET LAUO");

    const id = setInterval(() => {
      setNumberOfRenders((noOfRenders) => noOfRenders + 1);
    }, 500);

    return () => {
      clearInterval(id);
    };

    return undefined; // is ok

    // setNumberOfRenders(numberOfRenders + 1);
  }, [numberOfRenders]);
  */

  useEffect(() => {
    console.log("PERSONS HAVE CHANGED");
  }, [persons]);

  useEffect(() => {
    console.log("HELLUREI WHEN AM I BEING RUN?");
    personService.getPersons().then((persons) => {
      dispatch({
        type: "GET_PERSONS_FULFILLED",
        payload: persons
      });
    });
  }, []);

  const goodPeople = persons.filter(isGood);
  const badPeople = persons.filter((p) => !isGood(p));

  return (
    <main>
      <h1>Giga ERP</h1>

      <HirePersonForm hirePerson={hirePerson} />

      <p>Number of renders: {numberOfRenders}</p>

      <h2>Bad People</h2>
      <PersonList firePerson={firePerson} persons={badPeople} showMetadata />

      <h2>Good People</h2>
      <PersonList firePerson={firePerson} persons={goodPeople} />
    </main>
  );
};

export default App;
