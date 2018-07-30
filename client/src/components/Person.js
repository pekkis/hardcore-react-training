import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import { pure } from "recompose";
import Button from "./Button";
import { Link } from "react-router-dom";

const Person = props => {
  const { person, handleFirePerson } = props;
  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });
  return (
    <div className={classes}>
      <Link to={`/person/${person.id}`}>
        {person.lastName}, {person.firstName}
      </Link>
      <Button block onClick={() => handleFirePerson(person.id)}>
        Fire
      </Button>
    </div>
  );
};

export default pure(Person);
