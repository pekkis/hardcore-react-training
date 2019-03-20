import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";

import posed from "react-pose";

const Container = posed.div({
  invisible: {
    x: "-200%",
    rotate: -1000
  },
  visible: {
    rotate: 0,
    x: 0,
    transition: { duration: 2000 }
  }
});

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.person, {
    [styles.communist]: person.politicalView === "red",
    [styles.capitalist]: person.politicalView !== "red"
  });

  return (
    <Container className={classes} initialPose="invisible" pose="visible">
      <div>
        <strong>{person.lastName}</strong>, {person.firstName}
      </div>
      <div>
        <Button primary block onClick={() => firePerson(person.id)}>
          vapauta!
        </Button>
      </div>
    </Container>
  );
};

export default Person;
