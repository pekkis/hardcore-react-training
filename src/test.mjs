import { produce } from "immer";

const tussi = {
  naama: {
    haa: "hii",
    naama2: {
      naama3: {
        xoo: "foo",
        lus: "haa"
      }
    }
  }
};

const tussi2 = {
  ...tussi,
  naama: {
    ...tussi.naama,
    naama2: {}
  }
};

const tussi3 = produce(tussi, (draft) => {
  draft.naama.naama2.naama3.lus = "hiphei";
});
