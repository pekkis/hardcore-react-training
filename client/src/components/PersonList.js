import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import { pure } from "recompose";
import styles from "./PersonList.pcss";

const PersonList = props => {
  const { persons, firePerson, firing } = props;

  const averageAge = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>
      <p>
        Henkilömäärä: {persons.count()} henkilöä.
        <br />
        Keski-ikä: {averageAge.toFixed(4)}
      </p>

      <div className={styles.grid}>
        {persons.map(p => {
          const isBeingFired = firing.includes(p.id);
          return (
            <Person
              isBeingFired={isBeingFired}
              firePerson={firePerson}
              key={p.id}
              person={p}
            />
          );
        })}
      </div>
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired,
  title: PropTypes.string,
  firePerson: PropTypes.func.isRequired
};

PersonList.defaultProps = {
  title: "Lista työntekijöistä"
};

export default pure(PersonList);
