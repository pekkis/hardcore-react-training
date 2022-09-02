import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const duckClass = style({
  border: "10px solid rgb(0 0 0)",
  padding: vars.spacing[1],
  margin: "1em 0",
  borderRadius: "5px",
  display: "flex",
  flexBasis: "100%"
});

export const maleClass = style({
  backgroundColor: "rgb(200, 200, 255)"
});

export const femaleClass = style({
  backgroundColor: "rgb(255, 200, 200)"
});
