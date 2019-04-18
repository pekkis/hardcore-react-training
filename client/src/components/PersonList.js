import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";
import posed, { PoseGroup } from "react-pose";

import ImmutablePropTypes from "react-immutable-proptypes";

const PosedContainer = posed.div({
  hidden: {},
  visible: {
    delayChildren: 0,
    staggerChildren: 50
  }
});

const PersonContainer = posed.div({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
  exit: {
    y: -500,
    opacity: 0,
    transition: {
      duration: 1000,
      ease: "linear"
    }
  }
});

const PersonList = props => {
  const { persons, firePerson, showMetadata } = props;

  const averageAge = persons.reduce((a, p) => a + p.age, 0) / persons.count();

  if (persons.count() === 0) {
    return null;
  }

  return (
    <div>
      {showMetadata && (
        <div>
          <p>Resursseja listalla: {persons.count()}</p>
          <p>Keski-ikä: {averageAge.toFixed(2)}</p>
        </div>
      )}

      <PosedContainer initialPose="hidden" pose="visible">
        <PoseGroup>
          {persons.map(person => (
            <PersonContainer key={person.id}>
              <Person person={person} firePerson={firePerson} />
            </PersonContainer>
          ))}
        </PoseGroup>
      </PosedContainer>
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired,
  firePerson: PropTypes.func.isRequired,
  showMetadata: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showMetadata: false
};

export default React.memo(PersonList);
