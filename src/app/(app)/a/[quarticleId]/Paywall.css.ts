import { style } from "@vanilla-extract/css";

export const backdrop = style({
  position: "fixed",
  inset: 0,
  zIndex: 66666,
  backdropFilter: "blur(5px)",
  backgroundColor: "rgb(100 100 100 / .5)"
});
