import React from "react";
import personService from "../services/person";
import PersonList from "./PersonList";

const App = props => {
  const persons = [...Array(50)].map(personService.createPerson);

  return (
    <div>
      <h1>Fraktio ERP</h1>

      <PersonList persons={persons} />
    </div>
  );
};

export default App;
