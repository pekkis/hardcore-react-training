import r from "./random";
import faker from "faker";
import uuid from "uuid";

const createPerson = () => {
  return {
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthDay: faker.date.past(60, '1995-01-01'),
    gender: r.pick(["m", "f"]),
    handedness: r.pick(["l", "r"]),
    email: faker.internet.email(),
    relatedToCEO: r.pick([true, false, false, false, false, false, false, false]),
  }
};

export default {
  createPerson
}
