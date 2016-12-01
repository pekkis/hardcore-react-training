import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Person from './Person';
import personService from '../services/person';

storiesOf('Person', module)
  .add('Random person', () => (
    <Person person={personService.generatePerson()} />
  ))
;
