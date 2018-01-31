import React from "react";
import personService from "../services/person";
import PersonList from "./PersonList";
import styles from "./App.pcss";
import { List } from "immutable";

class App extends React.Component {
  state = {
    persons: List()
  };

  firePerson = id => {
    this.setState({
      persons: this.state.persons.filter(p => p.id !== id)
    });
  };

  componentDidMount() {
    personService.getPersons().then(persons => {
      this.setState({
        persons: List(persons)
      });
    });
    // what happen here?
  }

  render() {
    const { persons } = this.state;

    const goodPersons = persons.filter(p => p.age < 30);
    const badPersons = persons.filter(p => p.age >= 30);

    return (
      <div>
        <h1>Fraktio Tussimestari ERP 3.0</h1>

        <h2>Hyvät työntekijät</h2>
        <PersonList firePerson={this.firePerson} persons={goodPersons} />

        <h2>Pahat työntekijät</h2>
        <PersonList firePerson={this.firePerson} persons={badPersons} />
      </div>
    );
  }
}

export default App;
