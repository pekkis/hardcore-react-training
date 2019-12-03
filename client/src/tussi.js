const rangeIter = (min, max) => {
  let x = min;

  return {
    [Symbol.iterator]: () => {
      return {
        next: () => {
          if (x > max) {
            return {
              done: true
            };
          }
          return {
            done: false,
            value: x++
          };
        }
      };
    }
  };
};

const rangeGen = function*(min, max) {
  for (let x = min; x <= max; x = x + 1) {
    if (x === 3) {
      yield* rangeIter(1, 10);
    }

    yield x;
  }
};

for (const x of rangeGen(1, 10)) {
  console.log(x);
}
