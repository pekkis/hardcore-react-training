const { List } = require("immutable");

const persons = List(["Pekkis", "Gaylord"]);
const persons2 = persons.push("Jaakko");
const persons3 = persons.concat(["Jali"]);

console.log(persons);
console.log(persons2);
console.log(persons3);
