import React from 'react';

const requiresPerson = Component => props => {
  const {
    person,
  } = props;

  if (!person) {
    return false;
  }

  return (
    <Component {...props} />
  );
};

export default requiresPerson;
