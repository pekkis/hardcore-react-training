/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { PersonInterface } from "../services/person";
import { motion } from "framer-motion";

type Props = {
  person: PersonInterface;
  firePerson: (id: string) => void;
};

const variants = {
  hidden: {
    opacity: 0,
    x: -500
  },
  visible: {
    opacity: 1,
    x: 0
  }
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
        <strong>{person.lastName}</strong>, {person.firstName}
      </div>
      <div>
        <button
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

export default Person;
