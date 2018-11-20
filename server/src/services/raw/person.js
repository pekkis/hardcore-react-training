import r from "../random";
import faker from "faker";
import uuid from "uuid/v4";
import { Range } from "immutable";
import { servicify } from "../util";
import { DateTime } from "luxon";
//import { augmentPerson } from "./augmentor";

const createPerson = () => {
  return {
    get age() {
      const d = DateTime.fromJSDate(this.birthDay);
      const now = DateTime.local();
      const diff = now.diff(d, "years").toObject();
      return diff.years;
    },

    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthDay: faker.date.past(70, "1999-01-01"),
    gender: r.pick(["m", "f"]),
    handedness: r.pick(["l", "r"]),
    salary: r.integer(2000, 10000),
    email: faker.internet.email(),
    relatedToCEO: r.pick([
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ])
  };
};

const persons = Range(1, 201)
  .map(createPerson)
  //.map(augmentPerson)
  .toList();

export default servicify(persons);
