const range = (min, max) => {
  let current = min;

  const iteratore = {
    next: () => {
      if (current > max) {
        return { done: true };
      }

      return {
        done: false,
        value: current++
      };
    }
  };

  return {
    [Symbol.iterator]: () => iteratore
  };
};

const rangeGen = function*(min, max) {
  for (let x = min; x <= max; x = x + 1) {
    yield x;
  }
};

const hellurei = rangeGen(1, 10);

for (const val of hellurei) {
  console.log(val);
}
