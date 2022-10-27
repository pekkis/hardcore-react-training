import { style } from "@vanilla-extract/css";
import { vars } from "../services/theme.css";

export const duckClass = style({
  border: "10px solid rgb(0 0 0)",
  padding: vars.space.small,
  margin: "1em 0",
  borderRadius: "15px",
  backgroundColor: "rgb(255 255 255 / .5)",
  display: "flex"
});

export const maleClass = style({
  backgroundColor: "rgb(200 200 255 / .5)"
});

export const femaleClass = style({
  backgroundColor: "rgb(255 200 200 / .5)"
});
