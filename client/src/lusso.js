const { List } = require("immutable");

const persons = List(["Mahis", "Sebu"]);
const persons2 = persons.push("Pekkis");
const persons3 = persons.concat(["Gaylord"]);

console.log(persons);
console.log(persons2);
console.log(persons3);
