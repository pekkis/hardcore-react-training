import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PersonList from '../components/PersonList';

const IndexPage = props => {
  const { persons } = props;
  return (
    <section>

      <h2>Males</h2>

      <PersonList persons={persons.filter(p => p.gender === 'm')} />

      <h2>Females</h2>

      <PersonList persons={persons.filter(p => p.gender === 'f')} />

    </section>
  );
};

IndexPage.propTypes = {
  persons: React.PropTypes.array.isRequired,
};

export default IndexPage;
