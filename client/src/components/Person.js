import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";
import Icon from "react-fa";
import { Link } from "react-router-dom";

const Person = props => {
  const { person, firePerson } = props;
  const classes = cx(
    styles.root,
    {
      [styles.male]: person.gender === "m",
      [styles.female]: person.gender === "f"
    }
  );
  return (
    <div className={classes}>

      <Link to={`/person/${person.id}`}>
        <strong>{person.lastName}</strong>, {person.firstName} ({person.age})
      </Link>

      <Button
        block
        onClick={() => {
          firePerson(person.id);
        }}
      >
        <Icon name="heart" size="2x" spin />
        Vapauta
      </Button>

    </div>
  );
}

export default Person;
