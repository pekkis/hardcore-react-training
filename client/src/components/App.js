import React, { Component } from "react";
import personService from "../services/person";
import PersonList from "./PersonList";
import styles from "./App.pcss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
    console.log(this.state.persons);
  }
  componentDidMount() {
    console.log("hello!");
    personService
      .getPersons()
      .then(r => r.data)
      .then(persons => {
        console.log(persons);
        this.setState({
          persons
        });
      });
  }

  handleFirePerson = id => {
    console.log(id);
    const { persons } = this.state;
    this.setState({
      persons: persons.filter(p => p.id !== id)
    });
  };

  isPersonBad = p => {
    /* define users age and filter everyone over 30 */
    return p.gender !== "f";
  };

  render() {
    console.log("Hello from render!");
    const { persons } = this.state;
    return (
      <div>
        <h1>Fraktio ERP</h1>

        <button>Fire</button>
        <h1>bad</h1>
        <PersonList
          persons={persons.filter(this.isPersonBad)}
          handleFirePerson={this.handleFirePerson}
        />
        <h1>Good</h1>
        <PersonList
          persons={persons.filter(p => !this.isPersonBad(p))}
          handleFirePerson={this.handleFirePerson}
        />
      </div>
    );
  }
}

export default App;
