import React from "react";
import Person from "./Person";
import ImmutablePropTypes from "react-immutable-proptypes";
import styles from "./PersonList.pcss";
import { pure } from "recompose";

const PersonList = props => {
  const { persons, showAverage, ...rest } = props;
  const avgAge = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>
      {showAverage && <p>Keski-ikä: {avgAge}</p>}
      <div className={styles.list}>
        {persons
          .sortBy(p => p.firstName)
          .sortBy(p => p.lastName)
          .map(p => <Person key={p.id} person={p} {...rest} />)}
      </div>
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired
};

PersonList.defaultProps = {
  showAverage: false
};

export default pure(PersonList);
