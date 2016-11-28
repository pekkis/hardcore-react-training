import React from 'react';
import styles from './PersonList.pcss';
import Person from './Person';
import { pure } from 'recompose';

const PersonList = props => {
  const { persons, deletePerson } = props;

  console.log(deletePerson);

  return (
    <div className={styles.root}>
      {persons.map(person =>
        <Person key={person.id} person={person} deletePerson={deletePerson} />
      )}
    </div>
  );
};

PersonList.propTypes = {
  deletePerson: React.PropTypes.func.isRequired,
};

PersonList.defaultProps = {
  deletePerson: () => { },
};

export default pure(PersonList);
