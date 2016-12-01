import React from 'react';
import { compose, wrapDisplayName } from 'recompose';

const needsPerson = BaseComponent => {

  const NeedsPerson = props => {
    const { person, ...rest } = props;
    if (!person) {
      return false;
    }
    return (
      <BaseComponent {...rest} person={person} />
    );
  };
  NeedsPerson.displayName = wrapDisplayName(BaseComponent, 'NeedsPerson');
  return NeedsPerson;
};

const PersonPage = props => {
  const { person } = props;
  return (
    <div>
      <h2>{person.firstName} {person.lastName}</h2>
    </div>
  );
};

export default compose(
  needsPerson,
)(PersonPage);
