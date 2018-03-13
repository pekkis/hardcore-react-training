import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";
import Icon from "react-fa";

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.root, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes}>
      <strong>{person.lastName}</strong>, {person.firstName} ({person.age.toFixed(
        4
      )})
      <Button
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

export default Person;
