import r from "../random";
import faker from "faker";
import { v4 as uuid } from "uuid";
import { Range } from "immutable";
import { servicify } from "../util";
import { DateTime } from "luxon";
//import { augmentPerson } from "./augmentor";
const bcrypt = require("bcryptjs");

const createPerson = () => {
  const email = faker.internet.email();
  const password = bcrypt.hashSync(email, 2);

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
  get age() {
    const d = DateTime.fromJSDate(this.birthDay);
    const now = DateTime.local();
    const diff = now.diff(d, "years").toObject();
    return diff.years;
  },
  id: uuid(),
  firstName: "Gaylord",
  lastName: "Lohiposki",
  isAdmin: true,
  handedness: "l",
  gender: "m",
  birthDay: faker.date.past(70, "1999-01-01"),
  salary: 100000,
  password: bcrypt.hashSync("gaylordpassu", 2),
  email: "gaylord.lohiposki@dr-kobros.com",
  relatedToCEO: true,
};

const persons = Range(1, process.env.NUMBER_OF_EMPLOYEES)
  .map(createPerson)
  //.map(augmentPerson)
  .toList()
  .push(gaylord);

const personService = {
  ...servicify(persons),
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
