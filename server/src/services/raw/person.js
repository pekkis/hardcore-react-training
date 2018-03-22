import r from "../random";
import faker from "faker";
import uuid from "uuid/v4";
import { augmentPerson } from "./augmentor";
import { Range } from "immutable";
import { servicify } from "../util";

export const createPerson = () => {
  return {
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    age: r.integer(10, 70),
    gender: r.pick(["m", "f"]),
    handedness: r.pick(["l", "r"])
  };
};

const persons = Range(1, 201)
  .map(createPerson)
  //.map(augmentPerson)
  .toList();

export default servicify(persons);
