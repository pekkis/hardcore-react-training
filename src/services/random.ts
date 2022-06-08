import { Random, browserCrypto, nodeCrypto } from "random-js";
import { v4 } from "uuid";
import { DuckProspectType, DuckType } from "./duck";

export const random = new Random(
  process.env.NODE_ENV === "test" ? nodeCrypto : browserCrypto
);

export const createRandomDuck = (): DuckProspectType => {
  const email = "testi@testi.io";

  const gender = random.pick([0, 1, 2]) as 0 | 1 | 2;

  const duck: DuckProspectType = {
    firstName: "X",
    lastName: "X",
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
