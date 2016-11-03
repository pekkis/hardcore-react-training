import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Example from './Example';

storiesOf('Example', module)
  .add('Example', () => (
    <Example
      example="Ankan lipaisu!!!"
      setExample={action('set example')}
    />
  ))
;
