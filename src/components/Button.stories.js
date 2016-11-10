import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
  .add('Most simplest button', () => (
    <Button onClick={action('clixuti')}>
      Hello
    </Button>
  ))
  .add('Block button', () => (
    <Button block onClick={action('clixuti')}>
      I am a block button.
    </Button>
  ))

;
