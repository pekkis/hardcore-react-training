import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PersonList from '../components/container/PersonListContainer';
import styles from './IndexPage.pcss';

const IndexPage = props => {
  const { persons } = props;
  return (
    <section className={styles.root}>

      <div className={styles.column}>
        <h2>Males</h2>
        <PersonList persons={persons.filter(p => p.gender === 'm')} />
      </div>

      <div className={styles.column}>
        <h2>Females</h2>
        <PersonList persons={persons.filter(p => p.gender === 'f')} />
      </div>

    </section>
  );
};

IndexPage.propTypes = {
  
};

export default IndexPage;
