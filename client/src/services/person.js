import faker from "faker";
import uuid from "uuid";
import r from "../utils/random";
import axios from "axios";

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

const getPersons = () => {
  return axios
    .get("http://localhost:8889/person")
    .then(ret => ret.data)
    .catch(e => {
      console.log(e);
      throw e;
    });
};

const hirePerson = person => {
  return axios
    .post("http://localhost:8889/person")
    .then(() => person)
    .catch(e => {
      console.log(e);
      throw e;
    });
};

const firePerson = id => {
  return axios
    .delete("http://localhost:8889/person/" + id)
    .then(() => id)
    .catch(e => {
      console.log(e);
      throw e;
    });
};

export default {
  createPerson,
  getPersons,
  hirePerson,
  firePerson
};
