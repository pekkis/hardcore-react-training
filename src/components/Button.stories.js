import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary button', () => (
    <Button
      role="primary"
      onClick={action('clixuti')}
    >
      Primary
    </Button>
  ))
  .add('Secondary button', () => (
    <Button
      role="secondary"
      onClick={action('clixuti')}
    >
      Secondary
    </Button>
  ))
  .add('Secondary block button', () => (
    <Button
      role="secondary"
      block
      onClick={action('clixuti')}
    >
      Secondary
    </Button>
  ))

;
