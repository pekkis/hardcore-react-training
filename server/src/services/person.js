import raw from "./raw/person.js";
import { asyncronifyAll, slowify } from "./util";

const persons = asyncronifyAll(raw);

const personService = {
  ...persons,
  remove: slowify(500, 10000)(persons.remove),
};

export default personService;
