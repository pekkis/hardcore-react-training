/** @jsxImportSource @emotion/react */

import { VFC, memo } from "react";
import { PersonType } from "../services/person";
import { Link } from "react-router-dom";

// import { jsx } from "@emotion/react";

// import cx from "clsx";
// import styles from "./Person.module.pcss";

import { motion } from "framer-motion";

type Props = {
  person: PersonType;
  firePerson: (id: string) => void;
};

const variants = {
  hidden: {
    opacity: 0,
    x: "-100%"
  },
  visible: {
    opacity: 1,
    x: 0
  },
  exit: {
    rotate: 360,
    x: "30%",
    scale: 10,
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
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
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
            vapauta
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(Person);
