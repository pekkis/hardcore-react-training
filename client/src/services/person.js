import axios from "axios";

import r from "./random";
import faker from "faker";
import uuid from "uuid/v4";
import { DateTime } from "luxon";

const getPersons = () => {
  return axios.get(`${process.env.REACT_APP_API}/person`).then(ret => ret.data);
};

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

export default {
  getPersons,
  createPerson
};
