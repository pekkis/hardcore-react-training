import React from "react";
import PropTypes from "prop-types";
import Person from "./Person";

const PersonList = props => {
  const { persons, firePerson } = props;

  const averageAge =
    persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>

      <p>
        Keski-ikä: {averageAge.toFixed(2)} vuotta
      </p>

      {persons.map(person =>
        <Person
          firePerson={firePerson}
          key={person.id}
          person={person}
        />
      )}
    </div>
  );
};

PersonList.propTypes = {
  persons: PropTypes.array.isRequired,
  firePerson: PropTypes.func.isRequired,
};

PersonList.defaultProps = {

};

export default PersonList;
