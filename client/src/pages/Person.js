import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import { pure } from "recompose";

const Person = props => {
  const { person, onDelete } = props;

  const classes = cx(styles.root, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes}>
      {person.firstName} {person.lastName}
      <button
        disabled={person.relatedToCEO}
        onClick={() => {
          onDelete(person);
        }}
      >
        fire me
      </button>
    </div>
  );
};

export default pure(Person);
