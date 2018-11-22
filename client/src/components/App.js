import React from "react";
import personService from "../services/person";
import PersonList from "./PersonList";
import { TypographyStyle, GoogleFont } from "react-typography";
import typography from "../services/typography";
import "./App.pcss";

class App extends React.Component {
  state = {
    persons: []
  };

  async componentDidMount() {
    const persons = await personService.getPersons();
    this.setState(() => ({
      persons
    }));
  }

  componentWillUnmount() {
    // cleanup
  }

  render() {
    const { persons } = this.state;

    const goodPersons = persons.filter(
      p => p.relatedToCEO || (p.age < 30 && p.gender === "m")
    );
    const badPersons = persons.filter(
      p => p.relatedToCEO || p.age >= 30 || p.gender === "f"
    );

    return (
      <div>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <h1>Fraktio ERP 6000</h1>

        <h2>Bad Persons</h2>
        <PersonList persons={badPersons} />

        <h2>Good Persons</h2>
        <PersonList persons={goodPersons} />
      </div>
    );
  }
}

export default App;
