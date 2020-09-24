import React, { Dispatch } from "react";
import Button from "./Button";
import { FunctionComponent } from "react";
import { PersonInterface } from "../types";
import cx from "classnames";
import { v4 } from "uuid";

import styles from "./Person.module.pcss";
import PersonCatalogue from "./PersonCatalogue";

type Props = {
  person: PersonInterface;
  dispatch: Dispatch<{ type: string; payload: any }>;
};

const Person: FunctionComponent<Props> = ({ person, dispatch }) => {
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
            dispatch({
              type: "FIRE_PERSON",
              payload: person.id
            });
          }}
        >
          Liberate!
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Person);
