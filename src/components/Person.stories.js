import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Person from './Person';
import faker from 'faker';

const male = {
  firstName: 'Ville',
  lastName: 'Mikkola',
  gender: 'm',
  avatar: faker.image.avatar(),
};

const female = {
  firstName: 'Villelmiina',
  lastName: 'Mikkola',
  gender: 'f',
  avatar: faker.image.avatar(),
};

storiesOf('Person', module)
  .add('Male', () => (
    <Person person={male} />
  ))
  .add('Female', () => (
    <Person person={female} />
  ))

;
