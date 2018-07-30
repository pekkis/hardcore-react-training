import { List, Map } from "immutable";

const arr = List(["Janet", "Pekkis", "Tommi"]);
const arr2 = arr.push("Tussi");
const arr3 = arr.concat(["Naama"]);

console.log(arr, "arr");
console.log(arr2, "arr2");
console.log(arr3, "arr3");
