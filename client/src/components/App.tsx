import { FC, useCallback, useEffect, useState } from "react";
import personService from "../services/person";
import PersonList from "./PersonList";
import produce from "immer";
import { append } from "ramda";
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
// useState, u

const isGood = (p: PersonType): boolean =>
  p.age < 30 || p.relatedToCEO === true;

const App: FC = () => {
  const [persons, setPersons] = useState<PersonType[]>([]);
  const [numberOfRenders, setNumberOfRenders] = useState(0);

  const firePerson = useCallback(
    (id: string) => {
      setPersons((persons) => persons.filter((p) => p.id !== id));
    },
    [setPersons]
  );

  const hirePerson = useCallback(
    (person: PersonType) => {
      setPersons((persons) => {
        return [...persons, person];

        /*
        return append(person, persons);

        return produce(persons, (draft) => {
          draft.push(person);
        });

        // return persons.concat(person);
        // persons.push(person);
        */
      });
    },
    [setPersons]
  );

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

  useEffect(() => {
    console.log("PERSONS HAVE CHANGED");
  }, [persons]);

  useEffect(() => {
    console.log("HELLUREI WHEN AM I BEING RUN?");
    personService.getPersons().then(setPersons);
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
