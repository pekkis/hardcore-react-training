import faker from "faker";
import uuid from "uuid";
import random from "./random";

function createPerson() {
  return {
    id: uuid(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    email: faker.internet.email(),
    age: random.integer(16, 70),
    gender: random.pick(["m", "f"]),
    relatedToCEO: (random.integer(0, 100) > 90),
  };
}

export default {
  createPerson
};
