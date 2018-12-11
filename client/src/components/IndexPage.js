import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

const IndexPage = props => {
  const { persons, hirePerson, firePerson } = props;

  const isGood = p => {
    if (p.relatedToCEO === true) {
      return true;
    }
    return p.age < 30 && p.gender === "m" && p.handedness === "r";
  };

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <div>
      <HirePersonForm hirePerson={hirePerson} />

      <h2>Bad People</h2>
      <PersonList showMetadata persons={badPersons} firePerson={firePerson} />

      <h2>Good People</h2>
      <PersonList persons={goodPersons} firePerson={firePerson} />
    </div>
  );
};

export default IndexPage;
