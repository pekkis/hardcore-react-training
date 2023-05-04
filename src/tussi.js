console.log("TUSSI");

const { DateTime } = require("luxon");
const { produce } = require("immer");

const avengers = [
  {
    name: "Iron Man",
    alive: true,
    active: true,
    isLeader: true
  },
  {
    name: "Captain America",
    alive: true,
    active: false,
    isLeader: false
  }
];

const peksuBoi = {
  name: "Peksu The Bestest",
  alive: true,
  active: true,
  isLeader: false
};

// const avengers2 = avengers.concat(peksuBoi);
const avengers2 = produce(avengers, (draft) => {
  draft.push(peksuBoi);
});

const avengers3 = produce(avengers2, (draft) => {
  const oldLeader = draft.find((a) => a.name === "Iron Man");
  const newLeader = draft.find((a) => a.name === "Peksu The Bestest");
  oldLeader.isLeader = false;
  newLeader.isLeader = true;
});

console.log(avengers2, avengers3);
