import { style, keyframes } from "@vanilla-extract/css";

export const spinnerClass = style({
  color: "rgb(0 0 0)",
  display: "inline-block"
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
