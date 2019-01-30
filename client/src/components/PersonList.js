import React from "react";
import Person from "./Person";

const PersonList = props => {
  const { persons, firePerson } = props;

  const averageAge = persons.reduce((r, p) => r + p.age, 0) / persons.length;

  return (
    <div>
      <p>People on list: {persons.length}</p>

      <p>Average age: {averageAge}</p>

      {persons.map((person, i) => (
        <Person firePerson={firePerson} key={person.id} person={person} />
      ))}
    </div>
  );
};

export default PersonList;
