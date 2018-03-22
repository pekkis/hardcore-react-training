import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import PropTypes from "prop-types";
import Button from "./Button";
import Icon from "react-fa";
import { pure } from "recompose";
import { Link } from "react-router-dom";

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.root, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes}>
      <Link to={`/person/${person.id}`}>
        {person.lastName}, {person.firstName} ({person.age} vuotta)
      </Link>
      <div>
        <Button
          disabled={person.firing === true}
          block
          onClick={() => {
            firePerson(person.id);
          }}
        >
          <Icon name="heart" />
          Vapauta
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
