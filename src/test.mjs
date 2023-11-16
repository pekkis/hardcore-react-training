import { produce } from "immer";
import util from "util";

const kvaakku = {
  kvaak: {
    kvaak: {
      kvaak: {
        kvaak: false
      }
    }
  }
};

const kvaakku2 = produce(kvaakku, (draft) => {
  draft.kvaak.kvaak.kvaak.kvaak = true;
});

console.log(util.inspect(kvaakku2, false, 666));

const avengers = ["Iron Man", "Captain EU", "Hulk"];

const avengers2 = produce(avengers, (draft) => {
  draft.push("Peksu");
});

console.log(avengers2);
