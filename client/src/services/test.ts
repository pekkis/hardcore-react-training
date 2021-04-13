import { Random, nodeCrypto } from "random-js";
import faker from "faker";
import { v4 } from "uuid";
import { DateTime } from "luxon";

const r = new Random(nodeCrypto);

const getGenderForNaming = (gender) => {
  if (gender === 0 || gender === 1) {
    return gender;
  }
  return undefined;
};

export const createPerson = () => {
  const email = faker.internet.email();

  const gender = r.pick([0, 1, 2]);
  const genderForNaming = getGenderForNaming(gender);

  return {
    id: v4(),
    firstName: faker.name.firstName(genderForNaming),
    lastName: faker.name.lastName(genderForNaming),
    birthDay: faker.date.past(70, "2006-01-01").toString(),
    gender,
    handedness: r.pick(["l", "r"]) as "l" | "r",
    salary: r.integer(2000, 10000),
    email,
    isAdmin: false,
    relatedToCEO: r.pick([true, false]),
    get age() {
      const d = DateTime.fromJSDate(new Date(this.birthDay));
      const now = DateTime.local();
      const diff = now.diff(d, "years").toObject();
      return diff.years as number;
    }
  };
};
