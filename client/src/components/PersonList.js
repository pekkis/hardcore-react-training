import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import { pure } from "recompose";
import styles from "./PersonList.pcss";

const PersonList = props => {
  const { persons, firePerson, showStats } = props;

  const avgAge = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>
      {showStats && <h3>Keski-ikä: {avgAge}</h3>}

      <div className={styles.list}>
        {persons.map(person => (
          <Person key={person.id} person={person} firePerson={firePerson} />
        ))}
      </div>
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired,
  firePerson: PropTypes.func.isRequired,
  showStats: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showStats: false
};

export default pure(PersonList);
