import { v4 as uuid } from "uuid";

import { List } from "immutable";
import { servicify } from "../util";

const offices = List.of(
  "Kamppi Head Office",
  "Keilaniemi",
  "Ostrava",
  "Tukholma",
  "Pune"
).map((name) => {
  return {
    name,
    id: uuid(),
  };
});

export default servicify(offices);
