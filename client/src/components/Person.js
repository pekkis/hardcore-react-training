import React from "react";
import styles from "./Person.pcss";

import cx from "classnames";
import posed from "react-pose";

import Button from "./Button";

const PosedContainer = posed.div({
  hidden: {
    x: "-130%",
    opacity: 0
  },
  visible: {
    x: "0",
    opacity: 1
  }
});

export const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <PosedContainer className={classes} initialPose="hidden" pose="visible">
      <div>
        {person.lastName}, {person.firstName} ({person.age})
      </div>
      <div>
        <Button block onClick={() => firePerson(person.id)}>
          LIBERATE
        </Button>
      </div>
    </PosedContainer>
  );
};

export default Person;
