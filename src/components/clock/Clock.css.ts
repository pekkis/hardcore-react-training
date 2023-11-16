import { theme } from "../../theme.css";
import { style } from "@vanilla-extract/css";

export const clock = style({
  border: "10px solid rgb(0 0 0)",
  borderRadius: "10px",
  padding: theme.spacing.m,
  marginBlock: "1rem",
  backgroundColor: "rgb(255 255 255)",
  color: "rgb(0 0 0)"
});

export const nightTime = style({
  color: "rgb(255 255 255)",
  backgroundColor: theme.color.black
});
