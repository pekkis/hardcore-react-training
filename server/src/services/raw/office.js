import uuid from "uuid/v4";
import { List } from "immutable";
import { servicify } from "../util";

const offices = List.of(
  "Kamppi Head Office",
  "Keilaniemi",
  "Ostrava",
  "Tukholma",
  "Pune"
).map(name => {
  return {
    name,
    id: uuid()
  };
});

export default servicify(offices);
