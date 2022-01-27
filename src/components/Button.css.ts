import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const buttonClass = style({
  borderRadius: "10px",
  backgroundColor: vars.color.button,
  padding: "5px",

  ":disabled": {
    opacity: 0.2
  }
});
