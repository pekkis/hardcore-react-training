import r from "../random";
import faker from "faker";
import { v4 as uuid } from "uuid";
import { servicify } from "../util";
import { DateTime } from "luxon";
import { append, range } from "ramda";
//import { augmentPerson } from "./augmentor";
const bcrypt = require("bcryptjs");

const getGenderForNaming = (gender) => {
  if (gender === 0 || gender === 1) {
    return gender;
  }
  return undefined;
};

const createPerson = () => {
  const email = faker.internet.email();
  const password = bcrypt.hashSync(email, 2);

  const gender = r.pick([0, 1, 2]);
  const genderForNaming = getGenderForNaming(gender);

  return {
    id: uuid(),
    firstName: faker.name.firstName(genderForNaming),
    lastName: faker.name.lastName(genderForNaming),
    birthDay: faker.date.past(70, "2006-01-01"),
    gender: gender,
    handedness: r.pick(["l", "r"]),
    salary: r.integer(2000, 10000),
    password,
    email,
    isAdmin: false,
    relatedToCEO: r.pick([
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]),
  };
};

const gaylord = {
  id: uuid(),
  firstName: "Gaylord",
  lastName: "Lohiposki",
  isAdmin: true,
  handedness: "l",
  gender: 0,
  birthDay: faker.date.past(70, "1999-01-01"),
  salary: 100000,
  password: bcrypt.hashSync("gaylordpassu", 2),
  email: "gaylord.lohiposki@dr-kobros.com",
  relatedToCEO: true,
};

const numberOfEmployees = process.env.NUMBER_OF_EMPLOYEES || 50;

console.log(numberOfEmployees, "numero");

const personsWithoutGaylord = range(1, parseInt(numberOfEmployees, 10)).map(
  createPerson
);

const persons = append(gaylord, personsWithoutGaylord);

console.log({
  personsWithoutGaylord,
  persons,
});

const personService = {
  ...servicify(persons, (p) => {
    const bd =
      typeof p.birthDay === "string" ? new Date(p.birthDay) : p.birthDay;

    return {
      ...p,
      birthDay: bd,
      get age() {
        const d = DateTime.fromJSDate(this.birthDay);
        const now = DateTime.local();
        const diff = now.diff(d, "years").toObject();
        return diff.years;
      },
    };
  }),

  auth: (email, password) => {
    const person = persons.find((p) => p.email === email);
    if (!person) {
      return undefined;
    }
    const compared = bcrypt.compareSync(password, person.password);

    if (!compared) {
      return undefined;
    }

    return person;
  },
  createTokenInstance: (id) => {},
};

export default personService;
