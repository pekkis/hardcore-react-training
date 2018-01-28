import React from "react";
import Person from "./Person";

const PersonList = props => {
  const { persons, deletePerson } = props;

  const avg = persons
  .reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>
      <h3>
        Average age: {avg.toFixed(2)}
      </h3>
      {persons
        .sortBy(p => p.firstName)
        .sortBy(p => p.lastName)
        .map(person =>
        <Person deletePerson={deletePerson} key={person.id} person={person} />
      )}
    </div>
  );
};

export default PersonList;
