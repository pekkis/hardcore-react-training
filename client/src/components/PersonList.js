import React from "react";
import Person from "./Person";

import posed, { PoseGroup } from "react-pose";

const PosedContainer = posed.div({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    delayChildren: 1000,
    staggerChildren: 1000
  }
});

const PersonList = props => {
  const { persons, firePerson } = props;

  const averageAge =
    persons.reduce((r, person) => {
      return r + person.age;
    }, 0) / persons.count();

  return (
    <div>
      <p>Henkilöitä listalla: {persons.count()}.</p>

      <p>Keski-ikä: {averageAge.toFixed(2)}.</p>
      <PosedContainer initialPose="hidden" pose="visible">
        {persons.map(person => (
          <Person key={person.id} firePerson={firePerson} person={person} />
        ))}
      </PosedContainer>
    </div>
  );
};

export default PersonList;
