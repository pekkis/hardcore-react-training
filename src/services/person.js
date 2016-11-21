import axios from 'axios';
import faker from 'faker';
import r from '../utils/random';
import uuid from 'node-uuid';

export default {

  generatePerson: () => {
    return {
      id: uuid.v4(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      gender: r.pick(['m', 'f']),
      age: r.integer(15, 100),
    };
  },

  getPersons: () => {
    return axios
      .get('/person')
      .then(res => res.data);
  },

};
