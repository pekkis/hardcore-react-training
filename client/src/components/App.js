import React from "react";
import personService from "../services/person";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";
import { List } from "immutable";
import "./App.pcss";

class App extends React.Component {
  state = {
    counter: 1,
    persons: List([])
  };

  async componentDidMount() {
    const persons = await personService.getPersons();
    this.setState(state => ({
      persons: List(persons),
      counter: state.counter + 1
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

    const isGood = p => {
      if (p.relatedToCEO === true) {
        return true;
      }
      return p.age < 30 && p.gender === "m" && p.handedness === "r";
    };

    const goodPersons = persons.filter(isGood);
    const badPersons = persons.filter(p => !isGood(p));

    return (
      <div>
        <header>
          <h1>Fraktio GIGA ERP</h1>
        </header>
        <main>
          <HirePersonForm hirePerson={this.hirePerson} />

          <h2>Bad People</h2>
          <PersonList
            showMetadata
            persons={badPersons}
            firePerson={this.firePerson}
          />

          <h2>Good People</h2>
          <PersonList persons={goodPersons} firePerson={this.firePerson} />
        </main>
        <footer>Copyright &copy; 2018 Pekkis</footer>
      </div>
    );
  }
}

export default App;
