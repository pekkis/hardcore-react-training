import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";
import { pure } from "recompose";
import { Link } from "react-router-dom";

const Person = props => {
  const { person, deletePerson } = props;

  const classes = cx(styles.root, {
    [styles.male]: person.gender === 'm',
    [styles.female]: person.gender === 'f',
  });

  return (
    <div className={classes}>
      <div>
        <Link to={`/person/${person.id}`}>
          <strong>{person.lastName}</strong>, {person.firstName}
        </Link>
      </div>

      <div>
        {person.age} years, {person.gender}
      </div>

      <div>
        <Button onClick={() => { deletePerson(person.id); }}>
          FIRE ME
        </Button>
      </div>

    </div>
  );
};

export default pure(Person);
