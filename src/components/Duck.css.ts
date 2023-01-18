import { style } from "@vanilla-extract/css";

export const duckClass = style({
  border: "10px solid rgb(0 0 0)",
  padding: "1rem",
  margin: "1rem 0",
  backgroundColor: "rgb(255 255 255 / 80%)",
  borderRadius: "10px",

  ":hover": {
    borderRadius: "15px"
  }
});

export const femaleClass = style({
  backgroundColor: "rgb(255 200 200 / 80%)"
});

export const maleClass = style({
  backgroundColor: "rgb(200 200 255 / 80%)"
});
