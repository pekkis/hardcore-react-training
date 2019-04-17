import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes}>
      <div>
        <strong>{person.lastName}</strong>, {person.firstName} (
        {person.age.toFixed(2)})
      </div>
      <div>
        <Button primary block onClick={() => firePerson(person.id)}>
          Vapauta!
        </Button>
      </div>
    </div>
  );
};

export default Person;
