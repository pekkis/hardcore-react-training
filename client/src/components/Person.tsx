/** @jsxImportSource @emotion/react */

import { VFC, memo } from "react";
import { PersonType } from "../services/person";

// import { jsx } from "@emotion/react";

// import cx from "clsx";
// import styles from "./Person.module.pcss";

type Props = {
  person: PersonType;
  firePerson: (id: string) => void;
};

const Person: VFC<Props> = (props) => {
  const { person, firePerson } = props;

  /*
  const classes = cx(styles.person, {
    [styles.male]: person.gender === 0,
    [styles.female]: person.gender === 1,
    [styles.old]: person.age >= 30
  });
  */

  return (
    <div
      css={[
        {
          border: "10px solid #000",
          borderRadius: "10px",
          padding: "1em",
          margin: "1em 0",
          backgroundColor: "rgb(200, 200, 200)",
          display: "flex"
        },
        person.gender === 0 && {
          backgroundColor: "rgb(200, 200, 255)"
        },
        person.gender === 1 && {
          backgroundColor: "rgb(255, 200, 200)"
        }
      ]}
    >
      <div>
        <strong>{person.lastName}</strong>, {person.firstName}
      </div>
      <div>
        <button
          onClick={() => {
            firePerson(person.id);
          }}
        >
          vapauta
        </button>
      </div>
    </div>
  );
};

export default memo(Person);
