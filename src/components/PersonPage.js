import React from 'react';
import { compose, pure } from 'recompose';
import Button from './Button';

const personIsRequired = filterer => Component => props => {
  const { person } = props;
  if (!person) {
    return false;
  }

  if (!filterer(person)) {
    return false;
  }

  return (
    <Component {...props} />
  );
};

const UserPage = props => {
  const { person, deletePerson, push } = props;
  return (
    <div>
      <h2>{person.lastName}, {person.firstName}</h2>

      <p>
        <Button
          onClick={e => {
            deletePerson(person.id);
            push({
              pathname: '/home',
              query: {
                lussutappa: 'banskua',
              },
            });
          }}
        >FIRE ME</Button>
      </p>

    </div>
  );
};

export default compose(
  pure,
  personIsRequired(() => true),
)(UserPage);
