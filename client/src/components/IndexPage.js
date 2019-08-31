import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

const IndexPage = props => {
  const { firePerson, hirePerson, persons, isLoggedIn } = props;

  const isGood = p => p.age < 50 || p.isRelatedToCEO === true;

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <div>
      {isLoggedIn && <HirePersonForm hirePerson={hirePerson} />}
      <h2>Bad Persons</h2>
      <PersonList
        readOnly={!isLoggedIn}
        firePerson={firePerson}
        persons={badPersons}
        showMetadata
      />
      <h2>Good Persons</h2>
      <PersonList
        readOnly={!isLoggedIn}
        firePerson={firePerson}
        persons={goodPersons}
      />
    </div>
  );
};

export default IndexPage;
