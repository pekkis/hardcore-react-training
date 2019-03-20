import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";

const PersonList = props => {
  const { persons, showMetadata, ...rest } = props;

  const avgAge = persons.reduce((a, p) => a + p.age, 0) / persons.length;

  if (!persons.length) {
    return null;
  }

  return (
    <div>
      {showMetadata && (
        <div>
          <p>Tyyppejä listalla: {persons.length}</p>
          <p>Keski-ikä: {avgAge.toFixed(2)}</p>
        </div>
      )}

      {persons.map(p => (
        <Person {...rest} key={p.id} person={p} />
      ))}
    </div>
  );
};

PersonList.propTypes = {
  showMetadata: PropTypes.bool.isRequired,
  persons: PropTypes.array.isRequired
};

PersonList.defaultProps = {
  showMetadata: false
};

export default PersonList;
