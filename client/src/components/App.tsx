/** @jsxImportSource theme-ui */

import { FunctionComponent, useEffect } from "react";
import { sortByName } from "../services/person";
import { PersonInterface } from "../types";

import HirePerson from "./HirePerson";
import PersonList from "./PersonList";

import useStore from "../services/state";
import Spinner from "./Spinner";
import { filter, pipe, values } from "ramda";

const isGood = (p: PersonInterface): boolean => {
  if (p.relatedToCEO) {
    return true;
  }

  if (p.age >= 30) {
    return false;
  }

  return true;
};

const isBad = (p: PersonInterface) => !isGood(p);

const App: FunctionComponent = () => {
  // const [persons, setPersons] = useState<PersonInterface[]>([]);

  const persons = useStore((state) => values(state.persons));
  const loading = useStore((state) => state.loading > 0);
  const getPersons = useStore((state) => state.getPersons);
  const hirePerson = useStore((state) => state.hirePerson);
  const firePerson = useStore((state) => state.firePerson);

  /*
  const firePerson = useCallback(
    async (id: string) => {
      dispatch({ type: "FIRE_PERSON_PENDING", payload: id });

      try {
        const firedPerson = await personService.firePerson(id);
        dispatch({ type: "FIRE_PERSON_FULFILLED", payload: firedPerson });
      } catch (e) {
        dispatch({ type: "FIRE_PERSON_REJECTED", payload: id });
      }
    },
    [dispatch]
  );

  const hirePerson = useCallback(
    async (person: Omit<PersonInterface, "age" | "id">) => {
      dispatch({ type: "HIRE_PERSON_PENDING", payload: person });
      const newPerson = await personService.hirePerson(person);
      dispatch({ type: "HIRE_PERSON_FULFILLED", payload: newPerson });
    },
    [dispatch]
  );
  */

  useEffect(() => {
    getPersons();
    console.log("ONLY ONCE!");
  }, []);

  useEffect(() => {
    console.log("RENDERADO");
  });

  useEffect(() => {
    console.log("PERSONS CHANGED", persons);
  }, [persons]);

  const goodPersons = pipe<PersonInterface[], PersonInterface[]>(
    filter(isGood),
    sortByName
  )(persons);

  const badPersons = pipe<PersonInterface[], PersonInterface[]>(
    filter(isBad),
    sortByName
  )(persons);

  return (
    <main
      css={{
        margin: "1em"
      }}
    >
      {loading && (
        <div
          sx={{
            fontSize: 3,
            margin: 1,
            top: 0,
            right: 0,
            padding: 3,
            position: "absolute",
            color: "rgb(255, 255, 255)",
            backgroundColor: "rgb(0, 0, 0)",
            borderRadius: "50%"
          }}
        >
          <Spinner />
        </div>
      )}

      <h1>Lussutus Giga ERP</h1>

      <HirePerson hirePerson={hirePerson} />

      <h2>Bad persons</h2>
      <PersonList firePerson={firePerson} persons={badPersons} />

      <h2>Good persons</h2>
      <PersonList firePerson={firePerson} persons={goodPersons} />
    </main>
  );
};

export default App;
