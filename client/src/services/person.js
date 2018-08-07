import faker from "faker";
import random from "../utils/random";
import uuid from "uuid";
import axios from "axios";

const createPerson = () => {
  return {
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthDay: faker.date.between("1900-01-01", "2008-08-01"),
    gender: random.pick(["m", "f"]),
    handedness: random.pick(["l", "r"])
  };
};

const getPersons = () => {
  return axios.get(`${process.env.REACT_APP_API}/person`).then(res => res.data);
};

const firePerson = id => {
  return axios
    .delete(`${process.env.REACT_APP_API}/person/${id}`)
    .then(res => res.data);
};

export default {
  createPerson,
  getPersons,
  firePerson
};
