import React from "react";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";

const IndexPage = props => {
  const { persons, firePerson, hirePerson, firing } = props;

  const goodPersons = persons.filter(p => p.age <= 30 && p.gender === "m");
  const badPersons = persons.filter(p => p.age > 30 || p.gender === "f");

  return (
    <div>
      <AddPersonForm hirePerson={hirePerson} />

      <div>
        <h2>Hyvät henkilöt</h2>
        <PersonList
          firing={firing}
          firePerson={firePerson}
          persons={goodPersons}
          showAverage
        />

        <h2>Pahat henkilöt</h2>
        <PersonList
          firing={firing}
          firePerson={firePerson}
          persons={badPersons}
        />
      </div>
    </div>
  );
};

export default IndexPage;
