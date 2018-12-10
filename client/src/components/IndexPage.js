import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

const IndexPage = props => {
  const { persons, hirePerson, firePerson } = props;

  const isGoodPerson = p => p.gender === "m" && p.age < 30;
  const isBadPerson = p => !isGoodPerson(p);

  const goodPersons = persons.filter(isGoodPerson);
  const badPersons = persons.filter(isBadPerson);

  return (
    <div>
      <HirePersonForm hirePerson={hirePerson} />

      <h2>Pahat ihmiset</h2>
      <PersonList persons={badPersons} firePerson={firePerson} />

      <h2>Hyvät ihmiset</h2>
      <PersonList persons={goodPersons} firePerson={firePerson} />
    </div>
  );
};

export default IndexPage;
