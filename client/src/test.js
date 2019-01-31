const { List } = require("immutable");

const persons = List(["Pekkis", "Thor", "Iron Man"]);
const persons2 = persons.push("Hulk");
const persons3 = persons.concat(["Black Widow"]);

console.log(persons);
console.log(persons2);
console.log(persons3);
