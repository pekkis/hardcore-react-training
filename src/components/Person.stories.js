import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Person from './Person';

const person = {
  firstName: 'Ville',
  lastName: 'Mikkola',
  gender: 'm',
};

storiesOf('Person', module)
  .add('Person', () => (
    <Person person={person} />
  ))
;
