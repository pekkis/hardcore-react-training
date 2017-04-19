import faker from 'faker';
import { random } from '../utils/random';
import uuid from 'uuid';
import axios from 'axios';

export function createPerson() {
  return {
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    age: random.integer(18, 70),
    gender: random.pick(['m', 'f']),
    salary: random.integer(500, 1500),
    birthday: faker.date.past(),


  };
}

export function getPersons() {
  return axios
    .get('/api/person')
    .then(ret => ret.data)
    .catch(e => {
      console.log(e, 'errore fatale');
      throw e;
    });
}
