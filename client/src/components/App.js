import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

import "./App.pcss";

class App extends React.Component {
  async componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { persons, hirePerson, firePerson } = this.props;

    const isGood = person => {
      return person.gender === "m" && person.age < 30;
    };

    const goodPersons = persons.filter(isGood);
    const badPersons = persons.filter(p => !isGood(p));

    return (
      <div>
        <h1>Hello React Training!</h1>

        <HirePersonForm hirePerson={hirePerson} />

        <h2>Bad People</h2>
        <PersonList showMetadata persons={badPersons} firePerson={firePerson} />

        <h2>Good People</h2>
        <PersonList persons={goodPersons} firePerson={firePerson} />
      </div>
    );
  }
}

export default App;
