import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";
import posed from "react-pose";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const PersonContainer = posed.div({
  exit: {
    x: "-100%",
    rotate: -80,
    transition: { duration: 1000 }
  },
  enter: {
    x: 0,
    rotate: 0,
    transition: {
      duration: 1000
    }
  }
});

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <PersonContainer className={classes}>
      <div>
        <Link to={`/person/${person.id}`}>
          <strong>{person.lastName}</strong>, {person.firstName} ({person.age})
          [{person.gender}]
        </Link>
      </div>
      <div>
        <Button
          disabled={person.isFiring}
          block
          onClick={() => firePerson(person.id)}
        >
          liberate
        </Button>
      </div>
    </PersonContainer>
  );
};

Person.propTypes = {
  person: PropTypes.object.isRequired,
  firePerson: PropTypes.func.isRequired
};

export default React.memo(Person);
