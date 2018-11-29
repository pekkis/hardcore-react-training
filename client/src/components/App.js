import React from "react";
import personService from "../services/person";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";
import { List } from "immutable";

import "./App.pcss";

class App extends React.Component {
  state = {
    persons: List(),
    counter: 0
  };

  async componentDidMount() {
    const persons = await personService.getPersons();
    this.setState(state => ({
      persons: List(persons),
      counter: state.counter + 1
    }));
  }

  componentWillUnmount() {
    // cleanup
  }

  firePerson = id => {
    return this.setState(state => ({
      persons: state.persons.filter(p => p.id !== id)
    }));
  };

  hirePerson = person => {
    return this.setState(state => ({
      persons: state.persons.push(person)
    }));
  };

  render() {
    const { persons } = this.state;

    const isGoodPerson = p => p.gender === "m" && p.age < 30;
    const isBadPerson = p => !isGoodPerson(p);

    const goodPersons = persons.filter(isGoodPerson);
    const badPersons = persons.filter(isBadPerson);

    return (
      <div>
        <h1>Fraktio ERP 9999</h1>

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
