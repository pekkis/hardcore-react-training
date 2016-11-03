import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

const IndexPage = props => {
  const { persons } = props;
  return (
    <section>
      <h2>Index page</h2>

      <ul>
        {persons.map(person =>
          <li>{person.lastName}, {person.firstName}</li>
        )}
      </ul>

    </section>
  );
};

IndexPage.propTypes = {
  users: ImmutablePropTypes.list.isRequired,
};

export default IndexPage;
