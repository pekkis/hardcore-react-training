import React from 'react';
import { compose, pure } from 'recompose';

const needsPerson = Component => props => {
  const { person } = props;
  if (!person) {
    return (<div>Person not found</div>);
  }
  return (
    <Component {...props} />
  );
};

const PersonPage = props => {
  const { person } = props;
  return (
    <div>
      <h2>{person.lastName}, {person.firstName}</h2>
    </div>
  );
};

export default compose(
  needsPerson,
  pure,
)(PersonPage);
