import React from "react";
import PersonList from "./PersonList";
import "./App.pcss";
import AddPersonForm from "./AddPersonForm";

class IndexPage extends React.PureComponent {
  render() {
    const { persons, hirePerson, firePerson } = this.props;
    const goodPersons = persons.filter(p => p.gender === "m" && p.age <= 30);
    const badPersons = persons.filter(p => p.gender === "f" || p.age > 30);

    return (
      <div>
        <hr />
        <AddPersonForm hirePerson={hirePerson} />
        <hr />

        <h2>Hyvät henkilöt</h2>
        <PersonList persons={goodPersons} firePerson={firePerson} />

        <h2>Pahat henkilöt</h2>

        <PersonList showMeta persons={badPersons} firePerson={firePerson} />
      </div>
    );
  }
}

export default IndexPage;
