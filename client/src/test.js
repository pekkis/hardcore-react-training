import { List } from "immutable";

const persons = ["Ville", "Ville2", "Ville3"];
const persons2 = persons.push("Jälleen uusi Ville");
const persons3 = persons.concat(["Ville Mark 5"]);

const personList = List.of("Ville", "Ville2", "Ville3");
const personList2 = personList.push("Taas Ville");

console.log(personList.toJS());
console.log(personList2.toJS());
