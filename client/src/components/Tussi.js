import React from "react";
import Person from "./Person";
import posed, { PoseGroup } from "react-pose";

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
  const { persons, firePerson } = props;

  if (persons.length === 0) {
    return null;
  }

  const averageAge = persons.reduce((r, p) => r + p.age, 0) / persons.length;

  return (
    <div>
      <p>Number of people: {persons.length}</p>

      <p>Average age: {averageAge}</p>

      <PosedContainer initialPose="hidden" pose="visible">
        {persons.map(person => (
          <Person key={person.id} firePerson={firePerson} person={person} />
        ))}
      </PosedContainer>
    </div>
  );
};

export default PersonList;
