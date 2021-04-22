/** @jsxImportSource @emotion/react */

import { FC, memo } from "react";
import { PersonInterface } from "../services/person";
import { Link } from "react-router-dom";

type Props = {
  person: PersonInterface;
  firePerson: (id: string) => void;
};

const Person: FC<Props> = ({ person, firePerson }) => {
  return (
    <div
      css={[
        {
          border: "10px solid rgb(0, 0, 0)",
          borderRadius: "10px",
          padding: "1em",
          margin: "1em 0"
        },
        person.age < 30 && {
          backgroundColor: "rgb(200, 200, 255)"
        },
        person.age >= 30 && {
          backgroundColor: "rgb(200, 200, 200)"
        }
      ]}
    >
      <div>
        <Link to={`/person/${person.id}`}>
          <strong>{person.lastName}</strong>, {person.firstName}
        </Link>
      </div>
      <div>
        <button
          disabled={person.isBeingFired}
          onClick={() => {
            firePerson(person.id);
          }}
        >
          Vapauta
        </button>
      </div>
    </div>
  );
};

export default memo(Person);
