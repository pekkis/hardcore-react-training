import React from "react";
import HirePersonForm from "./HirePersonForm";
import PersonList from "./PersonList";

const IndexPage = props => {
  const { persons, firePerson, hirePerson } = props;

  const sorted = persons.sortBy(p => p.firstName).sortBy(p => p.lastName);
  const badPersons = sorted.filter(p => p.gender === "f" || p.age >= 30);
  const goodPersons = sorted.filter(p => p.gender === "m" && p.age < 30);

  return (
    <div>
      <HirePersonForm hirePerson={hirePerson} />
      <hr />

      <h2>Pahat ihmiset</h2>

      <PersonList persons={badPersons} firePerson={firePerson} />

      <h2>Hyvät ihmiset</h2>

      <PersonList persons={goodPersons} firePerson={firePerson} />
    </div>
  );
};

export default IndexPage;
