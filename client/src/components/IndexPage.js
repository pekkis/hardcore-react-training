import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

class IndexPage extends React.Component {
  render() {
    const { persons, firePerson, hirePerson } = this.props;

    const goodPersons = persons
      .filter(p => p.gender === "m" && p.age < 30)
      .sortBy(p => p.firstName)
      .sortBy(p => p.lastName)
      .toList();

    const badPersons = persons
      .filter(p => p.gender !== "m" || p.age >= 30)
      .sortBy(p => p.firstName)
      .sortBy(p => p.lastName)
      .toList();

    return (
      <div>
        <HirePersonForm hirePerson={hirePerson} />

        <h2>Pahat henkilöt</h2>
        <PersonList showMetaData persons={badPersons} firePerson={firePerson} />

        <h2>Hyvät henkilöt</h2>
        <PersonList persons={goodPersons} firePerson={firePerson} />
      </div>
    );
  }
}

export default IndexPage;
