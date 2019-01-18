const { List, Seq } = require("immutable");

const object = {
  key: "value",
  key2: "value2",
  key3: "value4"
};

const ob2 = Seq(object)
  .map((value, key) => {
    return "bluubluu";
  })
  .toJS();

console.log(ob2);
