import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";
import Icon from "react-fa";
import { pure } from "recompose";
import { Link } from "react-router-dom";

const Person = props => {
  const { person, firePerson, firing } = props;

  const classes = cx(styles.root, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes}>
      <Link to={`/person/${person.id}`}>
        <strong>{person.lastName}</strong>, {person.firstName} ({person.age.toFixed(
          4
        )})
      </Link>
      <Button
        disabled={firing.includes(person.id)}
        block
        onClick={() => {
          firePerson(person.id);
        }}
      >
        <Icon name="heart" spin />
        Vapauta
      </Button>
    </div>
  );
};

export default pure(Person);
