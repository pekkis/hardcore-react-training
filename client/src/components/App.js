import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";
import personService from "../services/person";

import { List } from "immutable";

import "./App.pcss";

class App extends React.Component {
  state = {
    counter: 0,
    persons: List()
  };

  async componentDidMount() {
    const persons = await personService.getPersons();
    // this.state.persons = persons;

    this.setState(() => ({
      persons: List(persons)
    }));
  }

  firePerson = id => {
    this.setState(state => {
      return {
        persons: state.persons.filter(p => p.id !== id)
      };
    });
  };

  hirePerson = person => {
    this.setState(state => {
      return {
        persons: state.persons.push(person)
      };
    });
  };

  render() {
    const { persons } = this.state;

    const isGood = person => {
      return person.gender === "m" && person.age < 30;
    };

    const goodPersons = persons.filter(isGood);
    const badPersons = persons.filter(p => !isGood(p));

    return (
      <div>
        <h1>Hello React Training!</h1>

        <HirePersonForm hirePerson={this.hirePerson} />

        <h2>Bad People</h2>
        <PersonList
          showMetadata
          persons={badPersons}
          firePerson={this.firePerson}
        />

        <h2>Good People</h2>
        <PersonList persons={goodPersons} firePerson={this.firePerson} />
      </div>
    );
  }
}

export default App;
