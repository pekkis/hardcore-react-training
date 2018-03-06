import raw from "./raw/person.js";
import { asyncronifyAll, slowify } from "./util";

const persons = asyncronifyAll(raw);

export default {
  ...persons,
  remove: slowify(3000, 10000)(persons.remove)
};
