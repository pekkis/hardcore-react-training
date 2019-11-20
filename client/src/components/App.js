import React, { useState, useEffect } from "react";
import PersonService from "../services/person";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

const App = props => {
  const [persons, setPersons] = useState([]);
  /*
  [ [], persons => void ]
  */

  useEffect(() => {
    PersonService.getPersons().then(setPersons);
  }, []);

  const firePerson = id => {
    setPersons(persons.filter(p => p.id !== id));
  };

  const hirePerson = person => {
    setPersons(persons.concat([person]));
  };

  const isGood = person => person.age < 30;
  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <div>
      <div>
        <h1>Fraktio ERP 100.001!</h1>

        <HirePersonForm hirePerson={hirePerson} />

        <h2>Pahikset</h2>
        <PersonList firePerson={firePerson} persons={badPersons} showMetadata />

        <h2>Hyvikset</h2>
        <PersonList firePerson={firePerson} persons={goodPersons} />
      </div>
    </div>
  );
};

export default App;
