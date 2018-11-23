import React, { memo } from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";
import Box from "./Box";
import { Link } from "react-router-dom";

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <Box className={classes} initialPose="hidden" pose="visible">
      <Link to={`/person/${person.id}`}>
        <strong>{person.lastName}</strong>, {person.firstName} ({person.age}{" "}
        years)
      </Link>
      <div>
        <Button
          primary
          block
          disabled={person.relatedToCEO || person.firing}
          onClick={() => firePerson(person.id)}
        >
          Vapauta 💖
        </Button>
      </div>
    </Box>
  );
};

export default memo(Person);
