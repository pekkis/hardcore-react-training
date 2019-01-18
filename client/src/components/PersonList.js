import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";

const PersonList = props => {
  const { persons, showMetadata, firePerson } = props;

  const averageAge =
    persons.reduce((r, person) => r + person.age, 0) / persons.count();

  return (
    <div>
      {showMetadata && (
        <>
          <p>Average age: {averageAge.toFixed(2)}</p>
          <p>Number of people: {persons.count()}</p>
        </>
      )}

      {persons
        .map(person => (
          <Person firePerson={firePerson} key={person.id} person={person} />
        ))
        .toList()}
    </div>
  );
};

PersonList.propTypes = {
  firePerson: PropTypes.func.isRequired,
  persons: ImmutablePropTypes.map.isRequired,
  showMetadata: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showMetadata: false
};

export default PersonList;
