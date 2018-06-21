import r from "../random";
import faker from "faker";
import uuid from "uuid/v4";
import { augmentPerson } from "./augmentor";
import { Range } from "immutable";
import { servicify } from "../util";

const createPerson = () => {
  return {
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthDay: faker.date.between("1900-01-01", "2008-12-31"),
    gender: r.pick(["m", "f"]),
    email: faker.internet.email()
  };
};

const persons = Range(10, 30)
  .map(createPerson)
  //.map(augmentPerson)
  .toList();

export default servicify(persons);
