const { List } = require("immutable");

const persons = List(["Pekkis", "Gaylord", "Juha"]);

const persons2 = persons.push("Timo");

const persons3 = persons.concat(["Lasse"]);

console.log(persons);
console.log(persons2);
console.log(persons3);
