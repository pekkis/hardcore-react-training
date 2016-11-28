import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Person from './Person';
import faker from 'faker';
import uuid from 'node-uuid';

const male = {
  firstName: 'Ville',
  lastName: 'Mikkola',
  gender: 'm',
  avatar: faker.image.avatar(),
  id: uuid.v4(),
};

const female = {
  firstName: 'Villelmiina',
  lastName: 'Mikkola',
  gender: 'f',
  avatar: faker.image.avatar(),
  id: uuid.v4(),
};

storiesOf('Person', module)
  .add('Male', () => (
    <Person person={male} deletePerson={action('delete')}/>
  ))
  .add('Female', () => (
    <Person person={female} deletePerson={action('delete')} />
  ))

;
