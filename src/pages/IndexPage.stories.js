import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import IndexPage from './IndexPage';
import faker from 'faker';
import { generatePerson } from '../utils/random';
import { Range } from 'immutable';

const persons = Range(1, 50).map(generatePerson()).toList();

storiesOf('IndexPage', module)
  .add('Index Page', () => (
    <IndexPage
      persons={persons}
      deletePerson={action('deletePerson')}
    />
  ))
;
