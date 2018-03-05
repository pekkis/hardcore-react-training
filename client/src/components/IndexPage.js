import React from "react";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";

class IndexPage extends React.PureComponent {
  render() {
    let { persons, firing, hirePerson, firePerson } = this.props;
    persons = persons.sortBy(p => p.firstName).sortBy(p => p.lastName);

    const goodPersons = persons.filter(p => p.gender === "m" && p.age < 30);
    const badPersons = persons.filter(p => p.gender === "f" || p.age >= 30);

    return (
      <div>
        <AddPersonForm hirePerson={hirePerson} />

        <PersonList
          firing={firing}
          firePerson={firePerson}
          persons={goodPersons}
          title="Hyvät ihmiset"
        />
        <PersonList
          firing={firing}
          firePerson={firePerson}
          persons={badPersons}
          title="Pahat ihmiset"
        />
      </div>
    );
  }
}

export default IndexPage;
