import { List } from "immutable";

const coders = List(["Johan", "Pekkis", "Viljami"]);
const coders2 = coders.push("Tussinaama");
const coders3 = coders.concat(["Losofeie"]);

console.log(coders);
console.log(coders2);
console.log(coders3);

const strinkula = {
  strinku: "tussi"
};

strinkula.strinku = "naama";
