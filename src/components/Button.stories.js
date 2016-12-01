import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
  .add('Basic Button', () => (
    <Button onClick={action('kliksuti')}>Lipaiseppa ankkaa</Button>
  ))
  .add('Block Button', () => (
    <Button block onClick={action('kliksuti')}>Blokkiankka</Button>
  ))
  .add('Disabled Block Button', () => (
    <Button disabled block onClick={action('kliksuti')}>Blokkiankka</Button>
  ))

;
