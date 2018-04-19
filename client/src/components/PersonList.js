import React from "react";
import Person from "./Person";
import ImmutablePropTypes from "react-immutable-proptypes";

const PersonList = props => {
  const { persons, ...rest } = props;

  const avg = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>
      <h3>Keski-ikä: {avg.toFixed(2)}</h3>
      {persons.map(p => <Person key={p.id} person={p} {...rest} />)}
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired
};

export default PersonList;
