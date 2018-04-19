import random from "../random";
import faker from "faker";
import uuid from "uuid/v4";
import { augmentPerson } from "./augmentor";
import { Range } from "immutable";
import { servicify } from "../util";
import { DateTime } from "luxon";

const createPerson = () => {
  return {
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthDay: faker.date.between("1950-01-01", "2008-01-01"),
    get age() {
      const d = DateTime.fromJSDate(this.birthDay);
      const now = DateTime.local();
      var diff = now.diff(d, "years").toObject();
      return diff.years;
    },
    gender: random.pick(["m", "f"]),
    email: faker.internet.email()
  };
};

const persons = Range(1, 201)
  .map(createPerson)
  //.map(augmentPerson)
  .toList();

export default servicify(persons);
