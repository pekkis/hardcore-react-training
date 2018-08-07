import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";
import { pure } from "recompose";
import { Link } from "react-router-dom";

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes}>
      <Link to={`/person/${person.id}`}>
        <strong>{person.lastName}</strong>, {person.firstName} ({person.age}{" "}
        vuotta)
      </Link>
      <div>
        <Button
          block
          disabled={person.firing === true}
          onClick={() => firePerson(person.id)}
        >
          vapauta
        </Button>
      </div>
    </div>
  );
};

export default pure(Person);
