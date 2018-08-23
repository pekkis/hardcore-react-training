const { List } = require("immutable");

const persons = List(["Pekkis", "Losonaama", "Tussikasvo"]);
const persons2 = persons.push("Dudeson");
const persons3 = persons.concat(["Larva"]);
