import { v4 as uuid } from "uuid";

import { servicify } from "../util";

const offices = [
  "Oslo Head Office",
  "Keilaniemi",
  "Ostrava",
  "Tukholma",
  "Pune",
].map((name) => {
  return {
    name,
    id: uuid(),
  };
});

export default servicify(offices);
