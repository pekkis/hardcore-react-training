import uuid from "uuid/v4";
import { List } from "immutable";
import customerService from "./customer";
import r from "../random";
import { servicify } from "../util";
const projects = List.of(
  "Fraktio ERP",
  "Embezzlement",
  "Suckling of a Duckling",
  "Apotti",
  "Super Secret Project",
  "Lussutus Maximus",
  "Losotus Decimus",
  "Unnamed Project",
  "Project X",
  "Project Y",
  "Donald Trump's Homepage"
).map(name => {
  const customers = customerService.all();

  let customer;
  if (["Embezzlement", "Fraktio ERP"].includes(name)) {
    customer = customers.find(c => c.name === "Fraktio");
  } else {
    customer = customers.get(r.integer(1, customers.count()) - 1);
  }

  return {
    name,
    id: uuid(),
    priority: name === "Embezzlement" ? true : false,
    customer: customer.id
  };
});

export default servicify(projects);
