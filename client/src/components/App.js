import React, { useState, useEffect } from "react";
import personService from "../services/person";
import PersonList from "./PersonList";

const App = props => {
  const [persons, setPersons] = useState([]);
  console.log(persons, "persons");
  useEffect(() => {
    personService.getPersons().then(setPersons);
  }, [setPersons]);

  const firePerson = id => {
    setPersons(persons.filter(p => p.id !== id));
  };

  const isGood = person => person.age <= 30;

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <>
      <div>
        <h1>Fraktio ERP 50.000 Super!</h1>

        <h2>Pahikset</h2>
        <PersonList firePerson={firePerson} persons={badPersons} />

        <h2>Hyvikset</h2>
        <PersonList firePerson={firePerson} persons={goodPersons} />
      </div>
    </>
  );
};

export default App;

export const secondaryExport = "tussi";
