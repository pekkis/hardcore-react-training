import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

const IndexPage = props => {
  const { hirePerson, firePerson, persons } = props;

  const isGood = person => {
    return person.age < 30;
  };

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <>
      <HirePersonForm hirePerson={hirePerson} />
      <h2>Pahat henkilöt</h2>
      <PersonList persons={badPersons} firePerson={firePerson} showMetadata />
      <h2>Hyvät henkilöt</h2>
      <PersonList persons={goodPersons} firePerson={firePerson} />
    </>
  );
};

export default IndexPage;
