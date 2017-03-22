import faker from 'faker';
import uuid from 'uuid';
import axios from 'axios';
import { random } from '../utils/random';

export function createPerson() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    id: uuid(),
    age: random.integer(15, 100),
    gender: random.pick(['m', 'f']),
  };
}

export function getPersons() {
  return axios
    .get('/person')
    .then(ret => ret.data);
}
