import React, { useState, useEffect } from "react";
import personService from "../services/person";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

import { List } from "immutable";

import "./App.pcss";

const App = props => {
  const [persons, setPersons] = useState(List());

  useEffect(() => {
    const doTheDeed = async () => {
      const p = await personService.getPersons();
      setPersons(List(p));
    };
    doTheDeed();

    return () => {
      console.log("cleanup maaan");
    };
  }, [setPersons]);

  const firePerson = id => {
    setPersons(persons.filter(p => p.id !== id));
  };

  const hirePerson = person => {
    setPersons(persons.push(person));
  };

  const isGood = p => p.age < 30 || p.isRelatedToCEO === true;

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <div>
      <h1>Fraktio ERP 50.000.000</h1>

      <HirePersonForm hirePerson={hirePerson} />

      <h2>Pahat ihmiset</h2>
      <PersonList firePerson={firePerson} persons={badPersons} showMetadata />

      <h2>Hyvät ihmiset</h2>
      <PersonList firePerson={firePerson} persons={goodPersons} />
    </div>
  );
};

export default App;
