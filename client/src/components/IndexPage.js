import React from "react";

import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";

class IndexPage extends React.Component {
  render() {
    const { persons, hirePerson, firePerson } = this.props;

    const isGood = person => {
      return person.gender === "m" && person.age < 30;
    };

    const goodPersons = persons.filter(isGood);
    const badPersons = persons.filter(p => !isGood(p));

    return (
      <div>
        <AddPersonForm hirePerson={hirePerson} />

        <h2>Bad People</h2>
        <PersonList firePerson={firePerson} showMetadata persons={badPersons} />

        <h2>Good People</h2>
        <PersonList firePerson={firePerson} persons={goodPersons} />
      </div>
    );
  }
}

export default IndexPage;
