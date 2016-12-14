import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PersonList from '../components/PersonList';
import styles from './IndexPage.pcss';

const IndexPage = props => {
  const { persons, deletePerson } = props;
  return (
    <section className={styles.root}>

      <div className={styles.column}>
        <h2>Young ones</h2>
        <PersonList deletePerson={deletePerson} persons={persons.filter(p => p.age < 40)} />
      </div>

      <div className={styles.column}>
        <h2>Old Ones</h2>
        <PersonList deletePerson={deletePerson} persons={persons.filterNot(p => p.age < 40)} />
      </div>

    </section>
  );
};

IndexPage.propTypes = {

};

export default IndexPage;
