import React, {
  FunctionComponent,
  useState,
  useEffect,
  useCallback,
  useReducer,
  lazy,
  Suspense
} from "react";
import personService, { getPersons } from "../services/person";
import { PersonInterface } from "../types";
import { HireablePerson } from "./HirePersonForm";
import useTime from "../hooks/useTime";

import "./App.module.pcss";
import Clock from "./Clock";
import PersonCatalogue from "./PersonCatalogue";

import { v4 } from "uuid";

import produce from "immer";

const HirePersonForm = lazy(() => import("./HirePersonForm"));

const reducer = (state, action) => {
  console.log("ACTION", action);
  switch (action.type) {
    case "GET_PERSONS":
      return produce(state, (draft) => {
        draft.persons = action.payload;
      });

    case "FIRE_PERSON":
      return produce(state, (draft) => {
        draft.persons = draft.persons.filter((p) => p.id !== action.payload);
      });

    case "HIRE_PERSON":
      return produce(state, (draft) => {
        draft.persons.push(action.payload);
        // draft.persons = draft.persons.concat([action.payload]);
      });
    default:
      return state;
  }
};

const App: FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, { persons: [] });

  const { persons } = state;

  // const [persons, setPersons] = useState<PersonInterface[]>([]);

  useEffect(() => {
    console.log("I will be run every goddamn render");
  });

  // Change: persons !== newPersons
  useEffect(() => {
    console.log("I will be run every time persons are CHANGED");
  }, [persons]);

  useEffect(() => {
    dispatch({
      type: "GET_PERSON_PENDING"
    });
    getPersons().then((persons) => {
      dispatch({
        type: "GET_PERSONS",
        payload: persons
      });
    });
  }, []);

  const hirePerson = useCallback(
    (person: HireablePerson) => {
      const hiredPerson: PersonInterface = {
        ...person,
        id: v4(),
        age: 55,
        gender: "m"
      };

      dispatch({
        type: "HIRE_PERSON",
        payload: hiredPerson
      });

      // setPersons(R.append(hiredPerson, persons));
      // setPersons(persons.concat([hiredPerson]));
    },
    [dispatch]
  );

  const time = useTime();

  return (
    <div>
      <h1>Peksu MEGA ERP 10.000</h1>

      <Clock time={time} />

      <h2>Hire</h2>

      <Suspense fallback={<div>Laddare!</div>}>
        <HirePersonForm hirePerson={hirePerson} />
      </Suspense>

      <PersonCatalogue persons={persons} dispatch={dispatch} />
    </div>
  );
};

export default App;
