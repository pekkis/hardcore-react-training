import React, { useState, useEffect } from "react";
import PersonList from "./PersonList";
import personService from "../services/person";
import HirePersonForm from "./HirePersonForm";

import "./App.pcss";

const App = props => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    // personService.getPersons().then(setPersons);

    const getPersons = async () => {
      const persons = await personService.getPersons();
      setPersons(persons);
    };
    getPersons();
    console.log("hellurei!");
  }, []);

  const isGood = person => {
    return person.age < 30;
  };

  const firePerson = id => {
    setPersons(pe => pe.filter(p => p.id !== id));
  };

  const hirePerson = person => {
    setPersons(pe => pe.concat(person));
  };

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <div>
      <h1>Fraktio ERP 50.000</h1>

      <HirePersonForm hirePerson={hirePerson} />

      <h2>Pahat henkilöt</h2>
      <PersonList persons={badPersons} firePerson={firePerson} showMetadata />

      <h2>Hyvät henkilöt</h2>
      <PersonList persons={goodPersons} firePerson={firePerson} />
    </div>
  );
};

export default App;
