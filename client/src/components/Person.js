import React, { memo } from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";
import posed from "react-pose";
import { Link } from "react-router-dom";

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
  },
  gone: {
    rotate: 1000,
    opacity: 0,
    scale: 10,
    top: -300,
    transition: {
      duration: 2000,
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
    <PosedBox
      className={classes}
      initialPose="hidden"
      pose={person.isBeingFired ? "gone" : "visible"}
    >
      <div>
        <Link to={`/person/${person.id}`}>
          <strong>{person.lastName}</strong>, {person.firstName}
        </Link>
      </div>
      <div>
        [{person.gender}] [{person.age} v]
      </div>
      <div>
        <Button
          disabled={person.isBeingFired}
          block
          onClick={() => firePerson(person.id)}
        >
          vapauta
        </Button>
      </div>
    </PosedBox>
  );
};

export default memo(Person);
