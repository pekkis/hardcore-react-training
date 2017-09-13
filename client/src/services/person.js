import faker from "faker";
import uuid from "uuid";
import random from "../utils/random";
import axios from "axios";
import moment from 'moment';

function createPerson() {
  return {
    id: uuid(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    age: random.integer(19, 70),
    gender: random.pick(["m", "f"])
  };
}

function getPersons() {
  return axios
    .get(`${process.env.REACT_APP_API}/person`)
    .then(ret => ret.data)
    .then(ret => ret.map(p => {
      return {
        ...p,
        age: moment().diff(moment(p.birthday), 'years', true),
      };
    }));
}

export default {
  createPerson,
  getPersons
};
