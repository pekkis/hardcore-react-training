import React from "react";
import Button from "./Button";
import { FunctionComponent } from "react";
import { PersonInterface } from "../types";
import cx from "classnames";

import styles from "./Person.module.pcss";

type Props = {
  person: PersonInterface;
  firePerson: (id: string) => void;
};

const Person: FunctionComponent<Props> = ({ person, firePerson }) => {
  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes}>
      <div className={styles.data}>
        <div>
          <p>
            <strong>{person.lastName}</strong>, {person.firstName}
          </p>
        </div>
        <div>{person.age} years old</div>
      </div>

      <div className={styles.actions}>
        <Button
          block
          onClick={() => {
            firePerson(person.id);
          }}
        >
          Liberate!
        </Button>
      </div>
    </div>
  );
};

export default Person;
