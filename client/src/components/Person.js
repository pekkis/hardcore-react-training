import React from "react";
import cx from "classnames";
import styles from "./Person.pcss";
import Button from "./Button";

import posed from "react-pose";

const PersonContainer = posed.div({
  hidden: {
    rotate: -40
  },
  visible: {
    rotate: 0,
    scale: 1,
    x: 0,
    transition: {
      duration: 500,
      ease: "linear"
    }
  }
});

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <PersonContainer className={classes} initialPose="hidden" pose="visible">
      <div>
        <strong>{person.lastName}</strong>, {person.firstName} ({person.age})
      </div>
      <div>
        <Button primary block onClick={() => firePerson(person.id)}>
          VAPAUTA
        </Button>
      </div>
    </PersonContainer>
  );
};

export default Person;
