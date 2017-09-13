const Immutable = require("immutable");
const { List } = Immutable;

const fraktio = List([
  {
    name: "Ville Mikkola",
    age: 29
  },
  {
    name: "Mikko Forsström",
    age: 39,
    protected: true
  }
]);

const fraktio2 = fraktio.push({
  name: "Ville Harvala",
  age: 33
});

console.log(fraktio.toJS());
console.log(fraktio2.toJS());
