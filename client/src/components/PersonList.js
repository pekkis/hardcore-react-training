import React from "react";
import Person from "./Person";
import styles from "./PersonList.pcss";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";

const PersonList = props => {
  const { persons, showMeta, ...rest } = props;
  const averageAge = persons.reduce((a, p) => a + p.age, 0) / persons.count();
  return (
    <div>
      {showMeta && (
        <h3>
          Henkilöitä listalla: {persons.count()}, keski-ikä{" "}
          {averageAge.toFixed(2)}
        </h3>
      )}

      <div className={styles.list}>
        {persons
          .sortBy(p => p.firstName)
          .sortBy(p => p.lastName)
          .map(p => <Person {...rest} key={p.id} person={p} />)}
      </div>
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired,
  showMeta: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showMeta: false
};

export default PersonList;
