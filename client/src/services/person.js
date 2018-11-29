import faker from "faker";
import r from "./random";
import { DateTime } from "luxon";
import uuid from "uuid";
import axios from "axios";

const createPerson = () => {
  return {
    get age() {
      const d = DateTime.fromJSDate(this.birthDay);
      return Math.abs(d.diff(DateTime.local(), "years").toObject().years);
    },
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthDay: faker.date.between("1960-01-01", "2005-12-31"),
    gender: r.pick(["m", "f"]),
    handedness: r.pick(["l", "r"]),
    relatedToCEO: r.pick([true, false])
  };
};

const getPersons = async () => {
  try {
    const ret = await axios.get(`${process.env.REACT_APP_API}/person`);
    return ret.data;
  } catch (e) {
    console.log(e);
    throw e;
  }

  /*
  return axios
    .get(`${process.env.REACT_APP_API}/person`)
    .then(ret => ret.data)
    .catch(e => {
      console.log(e);
      throw e;
    });
  */
};

export default {
  createPerson,
  getPersons
};
