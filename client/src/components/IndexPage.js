import React from "react";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";

const IndexPage = props => {
  const { persons, hirePerson, firePerson } = props;
  const goodPersons = persons.filter(
    p => p.relatedToCEO || (p.age < 30 && p.gender === "m")
  );
  const badPersons = persons.filter(
    p => p.relatedToCEO || p.age >= 30 || p.gender === "f"
  );

  return (
    <div>
      <AddPersonForm hirePerson={hirePerson} />

      <h2>Bad Persons</h2>
      <PersonList showMetadata firePerson={firePerson} persons={badPersons} />

      <h2>Good Persons</h2>
      <PersonList showMetadata firePerson={firePerson} persons={goodPersons} />
    </div>
  );
};

export default IndexPage;
