import React from "react";
import Person from "./Person";

const PersonList = props => {
  const { persons } = props;

  if (persons.length === 0) {
    return <div>No one here.</div>;
  }

  const avgAge = persons.reduce((a, p) => a + p.age, 0) / persons.length;

  return (
    <div>
      <p>Average age: {avgAge.toFixed(2)}</p>

      {persons.map(p => (
        <Person key={p.id} person={p} />
      ))}
    </div>
  );
};

export default PersonList;
