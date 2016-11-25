import React from 'react';
import styles from './PersonList.pcss';
import Person from './Person';

const PersonList = props => {
  const { persons } = props;
  return (
    <div className={styles.root}>
      {persons.map(person =>
        <Person key={person.id} person={person} />
      )}
    </div>
  );
};

PersonList.propTypes = {
};

PersonList.defaultProps = {
};

export default PersonList;
