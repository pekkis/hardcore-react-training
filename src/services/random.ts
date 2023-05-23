import { Random, browserCrypto, nodeCrypto } from "random-js";

export const random = new Random(
  process.env.NODE_ENV === "test" ? nodeCrypto : browserCrypto
);
