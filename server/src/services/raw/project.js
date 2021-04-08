import { v4 as uuid } from "uuid";
import customerService from "./customer";
import r from "../random";
import { servicify } from "../util";

const projects = [
  "Giga ERP",
  "Embezzlement",
  "Suckling of a Duckling",
  "Apotti",
  "Super Secret Project",
  "Lussutus Maximus",
  "Losotus Decimus",
  "Unnamed Project",
  "Project X",
  "Project Y",
  "Donald Trump's Homepage",
].map((name) => {
  const customers = customerService.all();

  let customer;
  if (["Embezzlement", "Giga ERP"].includes(name)) {
    customer = customers.find((c) => c.name === "Dr. Kobros Foundation");
  } else {
    customer = customers.get(r.integer(1, customers.count()) - 1);
  }

  return {
    name,
    id: uuid(),
    priority: name === "Embezzlement" ? true : false,
    customer: customer.id,
  };
});

export default servicify(projects);
