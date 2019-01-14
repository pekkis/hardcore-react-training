import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

const isGood = person => {
  return (person.gender === "m" && person.age < 30) || person.relatedToCEO;
};

class IndexPage extends React.PureComponent {
  render() {
    const { persons, firePerson, hirePerson } = this.props;

    const goodPersons = persons.filter(isGood);
    const badPersons = persons.filter(p => !isGood(p));

    return (
      <div>
        <HirePersonForm hirePerson={hirePerson} />

        <h2>Pahat ihmiset</h2>
        <PersonList showMetadata persons={badPersons} firePerson={firePerson} />

        <h2>Hyvät ihmiset</h2>
        <PersonList persons={goodPersons} firePerson={firePerson} />
      </div>
    );
  }
}

export default IndexPage;
