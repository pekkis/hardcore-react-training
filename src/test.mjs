// const { produce } = require("immer");

import { produce } from "immer";

const avengers = ["Iron Man", "Hulk", "Captain America"];

const avengers2 = produce(avengers, (draft) => {
  draft.push("Pekkis");
});

console.log(avengers, "A1");
console.log(avengers2, "A2");
