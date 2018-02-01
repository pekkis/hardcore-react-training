import React from "react";
import PersonList from "./PersonList";
import HireForm from "./HireForm";

class IndexPage extends React.Component {

  render() {
    const { persons, hirePerson, firePerson } = this.props;

    const goodPersons = persons
      .filter(p => p.age < 30);

    const badPersons = persons
    .filter(p => p.age >= 30);

    return (
      <div>

        <HireForm hirePerson={hirePerson} />

        <h2>Hyvät työntekijät</h2>
        <PersonList firePerson={firePerson} persons={goodPersons} />

        <h2>Pahat työntekijät</h2>
        <PersonList firePerson={firePerson} persons={badPersons} />
      </div>
    );
  }
}

export default IndexPage;
