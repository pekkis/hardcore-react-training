const { List } = require("immutable");

const persons = List(["Markku", "Pekkis", "Simo"]);
const persons2 = persons.push("Gaylord");
const persons3 = persons.concat(["Jukkis"]);

console.log(persons);
console.log(persons2);
console.log(persons3);
