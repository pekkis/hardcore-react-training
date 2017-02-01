import axios from 'axios';
import faker from 'faker';
import uuid from 'uuid';
import { random } from '../utils/random';

export default {
  all: () => axios.get('/person').then(ret => ret.data),

  createPerson: () => {
    return {
      id: uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: random.integer(10, 100),
      gender: random.pick(['m', 'f']),
    };
  },

};
