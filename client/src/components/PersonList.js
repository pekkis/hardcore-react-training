import React from "react";
import Person from "./Person";
import { pure } from "recompose";

const PersonList = ({ persons, firePerson, showMetaData }) => {
  const avg = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>
      {showMetaData && <h3>Keski-ikä: {avg.toFixed(2)}</h3>}

      {persons.map(p => (
        <Person key={p.id} firePerson={firePerson} person={p} />
      ))}
    </div>
  );
};

PersonList.defaultProps = {
  showMetaData: false
};

export default pure(PersonList);
