import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";

const PersonList = props => {
  const { persons, firePerson, showMetadata } = props;

  const averageAge = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>
      {/* hidfhid */}
      {showMetadata && (
        <>
          <p>People on list: {persons.count()}</p>
          <p>Average age: {averageAge}</p>
        </>
      )}
      {persons
        .map((person, i) => (
          <Person firePerson={firePerson} key={person.id} person={person} />
        ))
        .toList()}
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.map.isRequired,
  firePerson: PropTypes.func.isRequired,
  showMetadata: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showMetadata: false
};

export default PersonList;
