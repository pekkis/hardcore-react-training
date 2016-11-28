import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PersonList from './PersonList';
import { generatePerson, random } from '../utils/random';

const randoms = Array.from('tussi').map(generatePerson());
const oldWomen = Array.from('vanhoinaisii').map(generatePerson(
  person => ({
    ...person,
    gender: 'f',
    age: random.integer(75, 100),
  })
));

storiesOf('PersonList', module)
  .add('Random persons', () => (
    <PersonList persons={randoms} />
  ))
  .add('Old women', () => (
    <PersonList persons={oldWomen} />
  ))
;
