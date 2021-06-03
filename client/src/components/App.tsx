import { FC, useCallback, useEffect, useReducer, useState } from "react";
import personService from "../services/person";
import PersonList from "./PersonList";
import produce from "immer";
import HirePersonForm from "./HirePersonForm";
import person from "../services/person";
import { indexBy } from "ramda";
import Spinner from "./Spinner";

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

// HOOKS
// useState, useReducer
// async

type Action =
  | { type: "FIRE_PERSON"; payload: string }
  | { type: "FIRE_PERSON_PENDING"; payload: string }
  | { type: "FIRE_PERSON_FULFILLED"; payload: PersonType }
  | { type: "FIRE_PERSON_REJECTED"; payload: Error; error: true }
  | { type: "HIRE_PERSON"; payload: PersonType }
  | { type: "GET_PERSONS" }
  | { type: "GET_PERSONS_PENDING" }
  | { type: "GET_PERSONS_REJECTED"; error: true; payload: Error }
  | { type: "GET_PERSONS_FULFILLED"; payload: PersonType[] };

type State = {
  persons: Record<string, PersonType>;
  numberOfRenders: number;
  isLoading: number;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "GET_PERSONS_PENDING":
      return produce(state, (draft) => {
        draft.isLoading = draft.isLoading + 1;
      });

    case "GET_PERSONS_REJECTED":
    case "FIRE_PERSON_REJECTED":
      return produce(state, (draft) => {
        draft.isLoading = draft.isLoading - 1;
      });

    case "HIRE_PERSON":
      return produce(state, (draft) => {
        draft.persons[action.payload.id] = action.payload;
      });

    case "FIRE_PERSON_PENDING":
      return produce(state, (draft) => {
        draft.persons[action.payload].isBeingFired = true;
        draft.isLoading = draft.isLoading + 1;
      });

    case "FIRE_PERSON_FULFILLED":
      return produce(state, (draft) => {
        delete draft.persons[action.payload.id];
        draft.isLoading = draft.isLoading - 1;
        // draft.persons = draft.persons.filter((p) => p.id !== action.payload);
      });

    case "GET_PERSONS_FULFILLED":
      return produce(state, (draft) => {
        // draft.persons = action.payload;
        draft.persons = indexBy((p) => p.id, action.payload);
        draft.isLoading = draft.isLoading - 1;
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

  const [{ persons, numberOfRenders, isLoading }, dispatch] = useReducer(
    reducer,
    {
      numberOfRenders: 0,
      persons: {},
      isLoading: 0
    }
  );

  // const isLoading = useSelector(state => state.isLoading > 0)

  console.log(isLoading, "isLoading");

  const personList = Object.values(persons);

  const firePerson = useCallback(
    async (id: string) => {
      dispatch({
        type: "FIRE_PERSON_PENDING",
        payload: id
      });

      try {
        const fired = await personService.firePerson(id);
        dispatch({
          type: "FIRE_PERSON_FULFILLED",
          payload: fired
        });
      } catch (e) {
        dispatch({
          type: "FIRE_PERSON_REJECTED",
          payload: e,
          error: true
        });
      }
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
    dispatch({
      type: "GET_PERSONS_PENDING"
    });

    personService.getPersons().then((persons) => {
      dispatch({
        type: "GET_PERSONS_FULFILLED",
        payload: persons
      });
    });
  }, []);

  const goodPeople = personList.filter(isGood);
  const badPeople = personList.filter((p) => !isGood(p));

  return (
    <main>
      {isLoading > 0 && <Spinner />}

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
