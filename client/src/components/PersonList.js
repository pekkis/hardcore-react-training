import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";
import posed, { PoseGroup } from "react-pose";

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
    rotate: "-5000deg",
    transition: {
      duration: 4000,
      ease: "linear"
    }
  }
});

const PersonList = props => {
  const { persons, firePerson, showMetadata } = props;

  const averageAge = persons.reduce((a, p) => a + p.age, 0) / persons.length;

  if (persons.length === 0) {
    return null;
  }

  return (
    <div>
      {showMetadata && (
        <div>
          <p>Resursseja listalla: {persons.length}</p>
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
  persons: PropTypes.array.isRequired,
  firePerson: PropTypes.func.isRequired,
  showMetadata: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showMetadata: false
};

export default PersonList;
