const { List } = require("immutable");

const persons = List(["Pekkis", "Thanos", "Hulk"]);
const persons2 = persons.push("Captain America");
const persons3 = persons.concat(["Thor"]);

console.log(persons);
console.log(persons2);
console.log(persons3);
