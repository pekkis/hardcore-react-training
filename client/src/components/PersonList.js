import React, { memo } from "react";
import Person from "./Person";
import PropTypes from "prop-types";

const PersonList = props => {
  const { showMetadata, persons, firePerson } = props;

  if (persons.length === 0) {
    return <div>No one here.</div>;
  }

  const avgAge = persons.reduce((a, p) => a + p.age, 0) / persons.count();

  return (
    <div>
      {showMetadata && <p>Average age: {avgAge.toFixed(2)}</p>}

      {persons
        .toList()
        .sortBy(p => p.firstName)
        .sortBy(p => p.lastName)
        .map(p => (
          <Person firePerson={firePerson} key={p.id} person={p} />
        ))}
    </div>
  );
};

PersonList.propTypes = {
  showMetadata: PropTypes.bool.isRequired,
  persons: PropTypes.array.isRequired,
  firePerson: PropTypes.func.isRequired
};

PersonList.defaultProps = {
  showMetadata: false
};

export default memo(PersonList);
