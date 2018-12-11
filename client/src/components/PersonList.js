import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";

import posed from "react-pose";

const PosedContainer = posed.div({
  hidden: {
    opacity: 0
  },
  visible: {
    transition: {
      duration: 100,
      ease: "linear"
    },
    delay: 300,
    opacity: 1,
    delayChildren: 0,
    staggerChildren: 50
  }
});

const PersonList = props => {
  const { persons, firePerson, showMetadata } = props;

  if (persons.count() === 0) {
    return null;
  }

  const avgAge = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>
      {showMetadata && (
        <h3>
          Number of persons: {persons.count()}. Average age: {avgAge.toFixed(2)}
        </h3>
      )}

      <PosedContainer initialPose="hidden" pose="visible">
        {persons
          .toList()
          .sortBy(p => p.firstName)
          .sortBy(p => p.lastName)
          .map(p => (
            <Person key={p.id} person={p} firePerson={firePerson} />
          ))}
      </PosedContainer>
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
