import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";

const Person = props => {
  const { person, handleFirePerson } = props;

  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes}>
      {person.lastName}, {person.firstName}
      <button onClick={() => handleFirePerson(person.id)}>Fire</button>
    </div>
  );
};

export default Person;
