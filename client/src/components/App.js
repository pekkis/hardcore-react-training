import React, { useState, useEffect } from "react";
import personService from "../services/person";
import "./App.pcss";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

const App = props => {
  const [persons, setPersons] = useState([]);

  const firePerson = id => {
    setPersons(persons => persons.filter(p => p.id !== id));
  };

  const hirePerson = person => {
    setPersons(persons => persons.concat([person]));
  };

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getPersons = async () => {
      const persons = await personService.getPersons();
      setPersons(persons);
      setCounter(counter => counter + 1);
    };
    getPersons();
  }, []);

  const isGood = person =>
    person.politicalView !== "red" && person.unionized === false;

  const goodPeople = persons.filter(isGood);
  const badPeople = persons.filter(p => !isGood(p));

  return (
    <div>
      <h1>Fraktio ERP 30.0 Lusso</h1>

      <HirePersonForm hirePerson={hirePerson} />

      <h2>Pahat ihmiset</h2>
      <PersonList showMetadata persons={badPeople} firePerson={firePerson} />

      <h2>Hyvät ihmiset</h2>
      <PersonList persons={goodPeople} firePerson={firePerson} />
    </div>
  );
};

export default App;
