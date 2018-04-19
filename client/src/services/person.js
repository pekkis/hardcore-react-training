import faker from "faker";
import random from "../utils/random";
import uuid from "uuid";
import { DateTime } from "luxon";
import axios from "axios";

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

const getPersons = async () => {
  try {
    const ret = await axios.get(`${process.env.REACT_APP_API}/person`);
    return ret.data;
  } catch (e) {
    console.log("oh noes");
    throw e;
  }
};

const firePerson = id => {
  return axios
    .delete(`${process.env.REACT_APP_API}/person/${id}`)
    .then(ret => id);
};

const hirePerson = person => {
  return axios
    .post(`${process.env.REACT_APP_API}/person`, person)
    .then(ret => person);
};

export default {
  createPerson,
  getPersons,
  hirePerson,
  firePerson
};
