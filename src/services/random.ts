import { Random, browserCrypto } from "random-js";
import faker from "faker";
import { v4 } from "uuid";
import { DateTime } from "luxon";

export const random = new Random(browserCrypto);

const getGenderForNaming = (gender: number) => {
  if (gender === 0 || gender === 1) {
    return gender;
  }
  return undefined;
};

export const createRandomPerson = () => {
  const email = faker.internet.email();

  const gender = random.pick([0, 1, 2]);
  const genderForNaming = getGenderForNaming(gender);

  return {
    id: v4(),
    firstName: faker.name.firstName(genderForNaming),
    lastName: faker.name.lastName(genderForNaming),
    birthDay: faker.date.past(70, "2006-01-01").toString(),
    gender,
    handedness: random.pick(["l", "r"]) as "l" | "r",
    salary: random.integer(2000, 10000),
    email,
    isAdmin: false,
    relatedToCEO: random.pick([true, false]),
    get age() {
      const d = DateTime.fromJSDate(new Date(this.birthDay));
      const now = DateTime.local();
      const diff = now.diff(d, "years").toObject();
      return diff.years as number;
    }
  };
};
