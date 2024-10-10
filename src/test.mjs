import { produce } from "immer";

const avengers = ["Iron Man", "Hulk"];

const tussi = {
  model: "Stabilo",
  color: "Pink"
};

const tussi2 = produce(tussi, (draft) => {
  draft.color = "Blue";
  draft.inner.xoo = 'foo'
});

const tussi2 = {
  ...tussi,
  inner: {
    ...tussi.inner,
    xoo: 'foo',

  }

  color: "Green"
};


// "Pekkis"

const a2 = produce(avengers, (draft) => {
  draft.push("Thor");
  draft.push("Captain America");
  draft.push("PEKKIS!!!");
});

const a2 = [...avengers, "Black Widow"];
const a3 = avengers.concat("Black Widow");

tussi.color = "Blue";

