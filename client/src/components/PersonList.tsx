import React, { FunctionComponent } from "react";
import Person, { PersonType } from "./Person";
import { motion, AnimatePresence } from "framer-motion";
import { List } from "immutable";

type Props = {
  persons: List<PersonType>;
  showMetadata?: boolean;
  firePerson: (id: string) => void;
};

const variants = {
  visible: {
    transition: {
      delayChildren: 3,
      staggerChildren: 5
    }
  }
};

const children = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const PersonList: FunctionComponent<Props> = props => {
  const { persons, showMetadata, ...rest } = props;

  const averageAge = persons.reduce((a, p) => a + p.age, 0) / persons.count();

  if (persons.count() === 0) {
    return null;
  }

  return (
    <div>
      {showMetadata && <p>Keski-ikä: {averageAge.toFixed(2)} v</p>}

      <motion.div variants={variants} initial="hidden" animate="visible">
        <AnimatePresence>
          {persons.map((person: PersonType) => (
            <motion.div
              key={person.id}
              variants={children}
              dragConstraints={{ left: 0 }}
              dragElastic={0.2}
              drag="x"
              onDragEnd={e => {}}
              initial="hidden"
              animate="visible"
              positionTransition
              exit={{
                left: -50000,
                rotate: 1000,
                scale: 10,
                opacity: 0.1,
                transition: { duration: 0.5 }
              }}
            >
              <Person {...rest} key={person.id} person={person} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

PersonList.defaultProps = {
  showMetadata: false
};

export default PersonList;
