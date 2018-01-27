import r from "../utils/random";
import uuid from "uuid";
import axios from "axios";
import faker from "faker";

export function createPerson() {
  return {
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: r.integer(18, 70),
    email: "gaylord.lohiposki@gmail.com",
    gender: r.pick(["m", "f"])
  };
}

export function getPersons() {
  return axios.get("http://localhost:8889/person").then(ret => ret.data);
}
