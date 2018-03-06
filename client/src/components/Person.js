import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";
import Icon from "react-fa";
import { pure } from "recompose";
import { Link } from "react-router-dom";

const Person = props => {
  const { person, firePerson, isBeingFired } = props;

  const classes = cx(styles.root, {
    [styles.female]: person.gender === "f",
    [styles.male]: person.gender === "m"
  });

  return (
    <div className={classes}>
      <div className={styles.name}>
        <Link to={`/person/${person.id}`}>
          <strong>{person.lastName}</strong>, {person.firstName}
        </Link>
      </div>
      <div className={styles.age}>{person.age.toFixed(2)} vuotta</div>
      <p>
        <Button
          disabled={isBeingFired}
          block
          onClick={() => {
            firePerson(person.id);
          }}
        >
          <Icon name="heart" size="2x" /> vapauta
        </Button>
      </p>
    </div>
  );
};

export default pure(Person);
