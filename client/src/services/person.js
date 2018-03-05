import r from "../utils/random";
import faker from "faker";
import uuid from "uuid";
import axios from "axios";
import { DateTime } from "luxon";

const createPerson = () => {
  return calculateAge({
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthDay: faker.date.past(60, "1995-01-01").toISOString(),
    gender: r.pick(["m", "f"]),
    handedness: r.pick(["l", "r"]),
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
  });
};

const calculateAge = p => {
  const now = DateTime.local();
  const bd = DateTime.fromISO(p.birthDay);
  const age = now.diff(bd, "years").toObject().years;
  return {
    ...p,
    age
  };
};

const getPersons = () => {
  return axios
    .get(`${process.env.REACT_APP_API}/person`)
    .then(ret => ret.data)
    .then(persons => persons.map(calculateAge));
};

const firePerson = id => {
  return new Promise((resolve, reject) => {
    const timeout = r.integer(1000, 60000);
    setTimeout(() => {
      resolve(id);
    }, timeout);
  });
};

export default {
  createPerson,
  getPersons,
  firePerson
};
