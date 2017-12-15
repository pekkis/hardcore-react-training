import React from "react";
import Person from "./Person";

const PersonList = props => {
  const { persons, onDelete } = props;

  const sorted = persons.sortBy(p => p.firstName).sortBy(p => p.lastName);
  /*
    .filter(p => p.age < 30)
    .filter(p => p.gender === "m");
    */

  return (
    <div>
      {sorted.map(p => <Person key={p.id} person={p} onDelete={onDelete} />)}
    </div>
  );
};

export default PersonList;
