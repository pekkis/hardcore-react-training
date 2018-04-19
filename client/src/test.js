import { List, Seq } from "immutable";

const persons = List(["Kalle Lamminpää"]);
const persons2 = persons.push("Kalle Lamanpää").toJS();

console.log(persons);
console.log(persons2);
