import React, { memo } from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";
import posed from "react-pose";
import { Link } from "react-router-dom";

const PosedPerson = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });
  return (
    <PosedPerson className={classes} initialPose="hidden" pose="visible">
      <Link to={`/person/${person.id}`}>
        <strong>{person.lastName}</strong>, {person.firstName} (
        {person.age.toFixed(2)} vuotta)
      </Link>
      <div>
        <Button
          disabled={person.isFiring || person.isRelatedToCEO}
          block
          onClick={() => firePerson(person.id)}
        >
          vapauta
        </Button>
      </div>
    </PosedPerson>
  );
};

export default memo(Person);
