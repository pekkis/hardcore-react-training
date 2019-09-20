import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import { motion, AnimatePresence } from "framer-motion";

const parent = {
  tussi: {
    staggerChildren: 500
  },
  exit: {
    staggerChildren: 500
  },
  enter: {
    staggerChildren: 500
  }
};

const child = {
  tussi: {
    x: "-500px"
  },
  enter: {
    x: 0
  },
  exit: {
    opacity: 0.5,
    rotate: "1000deg",
    zoom: 5,
    position: "absolute",
    zIndex: 100000,
    x: 0,
    transition: {
      duration: 2
    }
  }
};

const PersonList = props => {
  const { persons, showMetadata, ...rest } = props;

  const avg = persons.reduce((a, p) => a + p.age, 0) / persons.count();

  return (
    <div>
      {showMetadata && <p>Keski-ikä: {avg} vuotta</p>}

      <motion.div variants={parent} initial="tussi" animate="enter">
        <AnimatePresence>
          {persons
            .sortBy(p => p.firstName)
            .sortBy(p => p.lastName)
            //.sort((p1, p2) => (p1.lastName > p2.lastName ? 1 : -1))
            .map(p => (
              <motion.div
                key={p.id}
                variants={child}
                initial="tussi"
                animate="enter"
                exit="exit"
              >
                <Person {...rest} person={p} />
              </motion.div>
            ))
            .toList()}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.map.isRequired,
  showMetadata: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showMetadata: false
};

export default PersonList;
