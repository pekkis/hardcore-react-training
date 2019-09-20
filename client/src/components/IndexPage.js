import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

/*
{
  person: Map({ persons: List() })
}
*/

const IndexPage = props => {
  const { persons, hirePerson, firePerson } = props;
  const isGood = p => p.age < 30 || p.isRelatedToCEO === true;

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <div>
      <HirePersonForm hirePerson={hirePerson} />

      <h2>Pahat ihmiset</h2>
      <PersonList firePerson={firePerson} persons={badPersons} showMetadata />

      <h2>Hyvät ihmiset</h2>
      <PersonList firePerson={firePerson} persons={goodPersons} />
    </div>
  );
};

export default IndexPage;
