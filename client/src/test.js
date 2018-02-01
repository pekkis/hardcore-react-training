import { List } from "immutable";

const arr = [1, 2, 3, 5];
const arr2 = arr.push(4);

console.log(arr);
console.log(arr2);

const list = List.of(1, 2, 3, 5);
const list2 = list.push(4);

console.log(list.toJS());
console.log(list2.toJS());
