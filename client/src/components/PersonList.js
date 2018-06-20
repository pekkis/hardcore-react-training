import React from "react";
import Person from "./Person";

const PersonList = props => {
  const { persons, handleFirePerson } = props;

  return (
    <div>
      {persons.map(p => (
        <Person key={p.id} person={p} handleFirePerson={handleFirePerson} />
      ))}
    </div>
  );
};

export default PersonList;
