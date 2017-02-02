// @flow

import axios from 'axios';
import faker from 'faker';
import uuid from 'uuid';
import { random } from '../utils/random';
import { List } from 'immutable';

export default {
  all: (): Promise<List<PersonType>> => axios.get('/person').then((ret: Object) => List(ret.data)),

  createPerson: () => ({
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: random.integer(10, 100),
    gender: random.pick(['m', 'f']),
  }),

};
