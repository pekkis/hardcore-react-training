import React from "react";
import personService from "../services/person";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";
import { List } from "immutable";

import "./App.pcss";

const isGood = person => {
  return (person.gender === "m" && person.age < 30) || person.relatedToCEO;
};

class App extends React.Component {
  state = {
    persons: List()
  };

  async componentDidMount() {
    const persons = await personService.getPersons();

    this.setState(() => ({
      persons: List(persons)
    }));
  }

  firePerson = id => {
    this.setState(state => {
      return {
        persons: state.persons.filter(person => person.id !== id)
      };
    });
  };

  hirePerson = newPerson => {
    this.setState(state => {
      return {
        persons: state.persons.push(newPerson)
      };
    });
  };

  render() {
    const { persons } = this.state;

    const goodPersons = persons.filter(isGood);
    const badPersons = persons.filter(p => !isGood(p));

    return (
      <div>
        <h1>Fraktio ERP</h1>

        <HirePersonForm hirePerson={this.hirePerson} />

        <h2>Pahat ihmiset</h2>
        <PersonList persons={badPersons} firePerson={this.firePerson} />

        <h2>Hyvät ihmiset</h2>
        <PersonList persons={goodPersons} firePerson={this.firePerson} />
      </div>
    );
  }
}

export default App;
