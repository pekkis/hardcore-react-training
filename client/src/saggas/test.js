function* aatu() {
  yield "aatu";
  yield "on";
  yield "herrkupeppu";
  return "losonaama";
}

const lussuttaja = aatu();

const naama = lussuttaja.next();
const naama2 = lussuttaja.next();
const naama3 = lussuttaja.next();
const naama4 = lussuttaja.next();
const naama5 = lussuttaja.next();

console.log(naama);
console.log(naama2);
console.log(naama3);
console.log(naama4);
console.log(naama5);

console.log(lussuttaja);
