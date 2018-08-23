import React from "react";
import personService from "../services/person";
import PersonList from "./PersonList";
import "./App.pcss";
import { List } from "immutable";
import HirePersonForm from "./HirePersonForm";

class App extends React.Component {
  state = {
    persons: List()
  };

  componentDidMount() {
    personService.getPersons().then(persons => {
      this.setState(state => {
        return {
          persons: List(persons)
        };
      });
    });
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

    const goodPersons = persons
      .filter(p => p.gender === "m" && p.age < 30)
      .sortBy(p => p.firstName)
      .sortBy(p => p.lastName);

    const badPersons = persons
      .filter(p => p.gender !== "m" || p.age >= 30)
      .sortBy(p => p.firstName)
      .sortBy(p => p.lastName);

    return (
      <div>
        <h1>Hello hello</h1>

        <HirePersonForm hirePerson={this.hirePerson} />

        <h2>Pahat henkilöt</h2>
        <PersonList
          showMetaData
          persons={badPersons}
          firePerson={this.firePerson}
        />

        <h2>Hyvät henkilöt</h2>
        <PersonList persons={goodPersons} firePerson={this.firePerson} />
      </div>
    );
  }
}

export default App;
