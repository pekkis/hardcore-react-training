const { List, Seq, Map } = require("immutable");

const avengers = List(["Iron Man", "Hulk"]);
const avengers2 = avengers.push("Pekkis");
const avengers3 = avengers.concat(["Captain America"]);

console.log(avengers);
console.log(avengers2);
console.log(avengers3);

const theAvengers = {
  rautamies: "Iron Man",
  pekkis: "Pekkis",
  hulkster: "Hulk"
};

const afterThanos = Seq(theAvengers)
  .filter(a => {
    return a !== "Pekkis";
  })
  .toJS();

console.log(afterThanos);
