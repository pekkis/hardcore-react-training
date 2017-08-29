import React from 'react';

const needsPerson = Component => props => {
  const { person } = props;

  console.log(props);

  if (!person) {
    return false;
  }

  return (
    <Component {...props} />
  );
};

export default needsPerson;
