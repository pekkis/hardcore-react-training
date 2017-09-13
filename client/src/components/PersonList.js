import React from "react";
import Person from "./Person";

const PersonList = props => {
  const { persons, firePerson } = props;

  if (persons.count() === 0) {
    return false;
  }

  const averageAge = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>
      <h3>
        Average age: {averageAge.toFixed(3)}
      </h3>

      {persons.map(p =>
        <Person firePerson={firePerson} person={p} key={p.id} />
      )}
    </div>
  );
};

export default PersonList;
