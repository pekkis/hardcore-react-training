import React from 'react';
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

const IndexPage = props => {
  const { hirePerson, firePerson, persons } = props;
  return (
    <div>
      <hr />

      <HirePersonForm hirePerson={hirePerson} />

      <hr />

      <h2>Good Employees</h2>

      <PersonList
        firePerson={firePerson}
        persons={persons.filter(p => p.age < 30 && p.gender === "m")}
      />

      <h2>Bad Employees</h2>

      <PersonList
        firePerson={firePerson}
        persons={persons.filter(p => p.age >= 30 || p.gender !== "m")}
      />
    </div>
  );
};

export default IndexPage;
