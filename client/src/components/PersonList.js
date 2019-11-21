import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const children = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const PersonList = props => {
  const { persons, showMetadata, ...rest } = props;

  const averageAge = persons.reduce((a, p) => a + p.age, 0) / persons.count();

  if (persons.count() === 0) {
    return null;
  }

  return (
    <div>
      {showMetadata && <p>Keski-ikä: {averageAge.toFixed(2)}</p>}

      <motion.div variants={variants} initial="hidden" animate="visible">
        <AnimatePresence>
          {persons
            .toList()
            .sortBy(p => p.firstName)
            .sortBy(p => p.lastName)
            .map((person, i) => {
              return (
                <motion.div
                  dragConstraints={{ left: 0 }}
                  dragElastic={0.2}
                  drag="x"
                  onDragEnd={e => {
                    if (e.offsetX > 100) {
                      // firePerson(person.id);
                    }
                  }}
                  positionTransition
                  key={person.id}
                  variants={children}
                  exit={{
                    left: -350,
                    scale: 0.0001,
                    opacity: 0.8,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Person {...rest} key={person.id} person={person} />
                </motion.div>
              );
            })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

PersonList.propTypes = {
  persons: PropTypes.array.isRequired,
  showMetadata: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showMetadata: false
};

export default PersonList;
