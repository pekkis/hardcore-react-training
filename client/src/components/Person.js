import React from "react";
import styles from "./Person.pcss";
import Button from "./Button";
import { Link } from "react-router-dom";

import cx from "classnames";

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes}>
      <div>
        <Link to={`/person/${person.id}`}>
          <strong>{person.lastName}</strong>,{person.firstName} ({person.age})
        </Link>
      </div>

      <div>
        <Button
          disabled={person.isBeingFired}
          block
          onClick={() => firePerson(person.id)}
        >
          LIBERATE
        </Button>
      </div>
    </div>
  );
};

export default Person;
