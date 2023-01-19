import { style } from "@vanilla-extract/css";

export const buttonClass = style({
  border: "10px solid rgb(0 0 0)",
  padding: "0.3rem",
  margin: "0",
  backgroundColor: "rgb(255 255 255 / 80%)",
  borderRadius: "10px",
  cursor: "pointer",

  ":hover": {
    borderRadius: "15px"
  }
});
