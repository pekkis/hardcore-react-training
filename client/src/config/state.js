export function getInitialState() {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const stateElm = document.getElementById("state");
    if (!stateElm) {
      return undefined;
    }
    return JSON.parse(stateElm.textContent);
  } catch (e) {
    return undefined;
  }
}
