import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

class IndexPage extends React.PureComponent {
  render() {
    const { persons, hirePerson, firePerson } = this.props;

    const goodPersons = persons.filter(p => p.gender === "m" && p.age < 30);
    const badPersons = persons.filter(p => p.gender === "f" || p.age >= 30);

    return (
      <div>
        <HirePersonForm hirePerson={hirePerson} />
        <hr />

        <h2>Pahat henkilöt</h2>
        <PersonList showStats persons={badPersons} firePerson={firePerson} />

        <h2>Hyvät henkilöt</h2>
        <PersonList persons={goodPersons} firePerson={firePerson} />
      </div>
    );
  }
}

export default IndexPage;
