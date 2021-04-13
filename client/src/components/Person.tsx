import { FC, memo } from "react";
import { PersonInterface } from "../types";
import styles from "./Person.module.pcss";
import cx from "clsx";
import Button from "./Button";
import { motion } from "framer-motion";

type Props = {
  person: PersonInterface;
  firePerson: (id: string) => void;
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  isBeingFired: { opacity: 0.5, x: 400 },
  exit: {
    scale: 0.1,
    opacity: 0
  }
};
const Person: FC<Props> = ({ person, firePerson }) => {
  const classes = cx(styles.root, {
    [styles.male]: person.gender === 0,
    [styles.female]: person.gender === 1,
    [styles.other]: person.gender === 2
  });

  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      exit="exit"
      animate={person.isBeingFired ? "isBeingFired" : "visible"}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic
      dragMomentum
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onDragEnd={(e, info) => {
        if (info.offset.x > 50) {
          firePerson(person.id);
        }
      }}
    >
      <div className={classes}>
        <div className={styles.data}>
          {person.lastName}, {person.firstName} ({person.age} y)
          {person.handedness === "l" && <div>🖎</div>}
        </div>

        <div className={styles.controls}>
          {
            <Button
              disabled={person.isBeingFired}
              onClick={() => firePerson(person.id)}
            >
              Liberate
            </Button>
          }
        </div>
      </div>
    </motion.div>
  );
};

export default memo(Person);
