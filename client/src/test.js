import { List } from "immutable";

const tussi = List.of(1, 2, 5);
const tussi2 = tussi.push(4);
const tussi3 = tussi.concat([4]);

console.log(tussi);
console.log(tussi2);
console.log(tussi3);
