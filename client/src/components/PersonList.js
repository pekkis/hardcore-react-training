import React from "react";
import Person from "./Person";
import posed from "react-pose";
import PropTypes from "prop-types";

const PosedContainer = posed.div({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    delayChildren: 100,
    staggerChildren: 100
  }
});

const PersonList = props => {
  const { persons, firePerson, showMetadata } = props;

  const averageAge =
    persons.reduce((r, person) => {
      return r + person.age;
    }, 0) / persons.count();

  if (persons.count() === 0) {
    return null;
  }

  return (
    <div>
      {showMetadata && (
        <div>
          <p>Henkilöitä listalla: {persons.count()}.</p>
          <p>Keski-ikä: {averageAge.toFixed(2)}.</p>
        </div>
      )}
      <PosedContainer initialPose="hidden" pose="visible">
        {persons
          .map(person => (
            <Person key={person.id} firePerson={firePerson} person={person} />
          ))
          .toList()}
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
