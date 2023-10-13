export const doNothing = (forHowLong: number) => {
  const startTime = performance.now();
  while (performance.now() - startTime < forHowLong) {
    // Do nothing to emulate slow code
  }
};
