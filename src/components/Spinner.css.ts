import { style, keyframes } from "@vanilla-extract/css";

export const spinnerClass = style({
  position: "fixed",
  top: 0,
  right: 0,
  fontSize: "1.5em",
  color: "rgb(0 0 0)",
  margin: ".3em",
  zIndex: 100000
});

const spinKeyframes = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(359deg)"
  }
});

export const spinClass = style({
  animationDuration: "5s",
  animationName: spinKeyframes,
  MozAnimationIterationCount: "infinite",
  animationTimingFunction: "linear"
});
