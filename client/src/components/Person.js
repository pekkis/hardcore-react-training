import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";
import posed from "react-pose";

const PosedBox = posed.div({
  hidden: {
    x: "-100%",
    scale: 0.1,
    rotate: -360
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
    <PosedBox className={classes} initialPose="hidden" pose="visible">
      <div>
        <strong>{person.lastName}</strong>, {person.firstName}
      </div>
      <div>
        [{person.gender}] [{person.age} v]
      </div>
      <div>
        <Button block onClick={() => firePerson(person.id)}>
          vapauta
        </Button>
      </div>
    </PosedBox>
  );
};

export default Person;
