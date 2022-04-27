import { Random, browserCrypto, nodeCrypto } from "random-js";
import { v4 } from "uuid";
import { DuckType } from "./duck";
import { DuckProspectType } from "./duck";

export const random = new Random(
  process.env.NODE_ENV === "test" ? nodeCrypto : browserCrypto
);

const getGenderForNaming = (gender: number) => {
  if (gender === 0) {
    return "male";
  }

  if (gender === 1) {
    return "female";
  }

  return undefined;
};

export const createRandomDuck = (): DuckType => {
  const email = "testi@testi.io";

  const gender = random.pick([0, 1, 2]) as DuckGenderType;
  const genderForNaming = getGenderForNaming(gender);

  const duck: DuckProspectType = {
    id: v4(),
    birthDay: "2020-02-02",
    gender,
    wingedness: random.pick(["l", "r"]) as "l" | "r",
    migratesForWinters: random.pick([true, true, false]),
    email,
    isAdmin: false,
    relatedToCEO: random.pick([true, false])
  };

  return duck;
};
