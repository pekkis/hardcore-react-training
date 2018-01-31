import faker from "faker";
import r from "../utils/random";
import uuid from "uuid";

import axios from "axios";

const createPerson = () => {
  return {
    id: uuid(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    age: r.integer(13, 80),
    gender: r.pick(["m", "f"]),
    email: faker.internet.email()
  };
}

const getPersons = () => {
  return axios
    .get("http://localhost:8889/person")
    .then(ret => ret.data).catch(err => {
      console.log(err);
    })
}

export default {
  createPerson,
  getPersons
};
