import Random from 'random-js';
import uuid from 'node-uuid';
import faker from 'faker';

export const random = new Random(Random.engines.mt19937().autoSeed());

export function generatePerson(postProcessor) {

  return () => {
    const generated = {
      id: uuid.v4(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      title: faker.name.jobTitle(),
      email: faker.internet.email(),
      gender: random.pick(['m', 'f']),
      avatar: faker.image.avatar(),
      age: random.integer(20, 80),
    };
    return postProcessor ? postProcessor(generated) : generated;
  };

};
