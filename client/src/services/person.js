import faker from "faker";
import random from "../utils/random";
import uuid from "uuid";

const createPerson = () => {
  return {
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthDay: faker.date.between("1900-01-01", "2008-12-31"),
    gender: random.pick(["m", "f"]),
    email: faker.internet.email()
  };
};

export default {
  createPerson
};
