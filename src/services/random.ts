import { Random, browserCrypto, nodeCrypto } from "random-js";
import faker from "@faker-js/faker";
import { v4 } from "uuid";
import { DateTime } from "luxon";
import { DuckGenderType, DuckType } from "./duck";

export const random = new Random(
  process.env.NODE_ENV === "test" ? nodeCrypto : browserCrypto
);

const getGenderForNaming = (gender: number) => {
  if (gender === 0 || gender === 1) {
    return gender;
  }
  return undefined;
};

export const createRandomDuck = (): DuckType => {
  const email = faker.internet.email();

  const gender = random.pick([0, 1, 2]) as DuckGenderType;
  const genderForNaming = getGenderForNaming(gender);

  const duck: DuckType = {
    id: v4(),
    firstName: faker.name.firstName(genderForNaming),
    lastName: faker.name.lastName(genderForNaming),
    birthDay: faker.date.past(70, "2006-01-01").toString(),
    gender,
    wingedness: random.pick(["l", "r"]) as "l" | "r",
    migratesForWinters: random.pick([true, true, false]),
    email,
    isAdmin: false,
    relatedToCEO: random.pick([true, false]),
    get age(): number {
      const d = DateTime.fromJSDate(new Date(this.birthDay));
      const now = DateTime.local();
      const diff = now.diff(d, "years").toObject();
      return diff.years as number;
    }
  };

  return duck;
};
