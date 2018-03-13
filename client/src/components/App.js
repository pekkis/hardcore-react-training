import React from "react";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";
import "./App.pcss";

const App = props => {
  const { persons, firePerson, hirePerson } = props;

  const goodPersons = persons.filter(p => p.age <= 30 && p.gender === "m");
  const badPersons = persons.filter(p => p.age > 30 || p.gender === "f");

  return (
    <div>
      <h1>
        <img src={require("../assets/trollo.png")} alt="Trollo!" />
        Fraktio Tussinaama ERP 777.7
      </h1>

      <AddPersonForm hirePerson={hirePerson} />

      <div>
        <h2>Hyvät henkilöt</h2>
        <PersonList firePerson={firePerson} persons={goodPersons} showAverage />

        <h2>Pahat henkilöt</h2>
        <PersonList firePerson={firePerson} persons={badPersons} />
      </div>
    </div>
  );
};

export default App;
