import faker from 'faker';
import uuid from 'uuid';
import random from './random';
import moment from 'moment';

function createPerson() {

  const agefy = random.integer(0, 365 * 70);

  return {
    id: uuid(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    email: faker.internet.email(),
    birthday: moment().subtract(16, 'years').subtract(agefy, 'days'),
    salary: random.integer(500, 2000),
    gender: random.pick(['m', 'f']),
    intelligence: random.integer(60, 90),
    beauty: random.integer(1, 10),
  };
}

export default {
  createPerson,
}
