import transit from "transit-immutable-js";

export function getInitialState() {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const stateElm = document.getElementById("state");
    if (!stateElm) {
      return undefined;
    }
    return transit.fromJSON(stateElm.textContent);
  } catch (e) {
    return undefined;
  }
}
