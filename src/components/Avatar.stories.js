import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Avatar from './Avatar';
import faker from 'faker';

const src = faker.image.avatar();

storiesOf('Avatar', module)
  .add('Basic avatar', () => (
    <Avatar src={src} />
  ))
;
