import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";
import PropTypes from "prop-types";
import { pure } from "recompose";

const Person = props => {
  const { person, firePerson } = props;

  const obj = {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender !== "m"
  };

  const classes = cx(styles.person, obj);

  return (
    <div className={classes}>
      <strong>{person.lastName}</strong>, {person.firstName} (
      {person.age.toFixed(2)} v.)
      <div>
        <Button
          block
          disabled={person.relatedToCEO === true}
          onClick={() => {
            firePerson(person.id);
          }}
        >
          anna vapaa-aikaa
        </Button>
      </div>
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.object.isRequired,
  firePerson: PropTypes.func.isRequired
};

export default pure(Person);
