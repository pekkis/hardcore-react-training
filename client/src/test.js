const range = (min, max) => {
  let current = min;

  return {
    [Symbol.iterator]: () => {
      return {
        next: () => {
          if (current <= max) {
            return { value: current++, done: false };
          }

          return { done: true };
        }
      };
    }
  };
};

const rangeGen = function*(min, max) {
  for (let x = min; x <= max; x = x + 1) {
    const ret = yield x;
    if (ret === "pekkis on paras!") {
      yield "niinhän se on!!!";
      yield* [100, 200, 300];
      yield* range(1000, 2000);
    }
  }
};

const iter = rangeGen(0, 10);

const tussi = iter.next();
const tussi2 = iter.next();
console.log(tussi);
console.log(tussi2);
const tussi3 = iter.next("pekkis on paras!");
console.log(tussi3);
const tussi4 = iter.next();
console.log(tussi4);

for (let xoo of iter) {
  console.log(xoo);
}
