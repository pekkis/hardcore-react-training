import faker from 'faker';
import uuid from 'uuid';
import random from './random';

function createPerson() {
  return {
    id: uuid(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    email: faker.internet.email(),
    age: random.integer(16, 70),
  };
}

export default {
  createPerson,
}
