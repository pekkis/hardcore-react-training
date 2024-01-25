import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const clock = style({
  padding: "1rem",
  border: "10px solid rgb(0 0 0)",
  borderRadius: "10px",
  marginBlock: "1rem",
  backgroundColor: theme.color.white,
  color: theme.color.black
});

export const nightTime = style({
  color: theme.color.white,
  backgroundColor: theme.color.black
});
