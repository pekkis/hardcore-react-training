import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

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
        <HirePersonForm hirePerson={hirePerson} />

        <h2>Bad People</h2>
        <PersonList showMetadata persons={badPersons} firePerson={firePerson} />

        <h2>Good People</h2>
        <PersonList persons={goodPersons} firePerson={firePerson} />
      </div>
    );
  }
}

export default IndexPage;
