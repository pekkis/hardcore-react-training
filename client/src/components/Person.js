import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes} initialPose="closed" pose="open">
      <div>
        <strong>{person.lastName}</strong>, {person.firstName} ({person.age}{" "}
        vuotta)
      </div>
      <div>
        <button onClick={() => firePerson(person.id)}>vapauta</button>
      </div>
    </div>
  );
};

export default Person;
