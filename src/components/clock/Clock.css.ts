import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const clock = style({
  border: "10px solid rgb(0 0 0)",
  padding: "1rem",
  marginBlock: "1rem",
  borderRadius: "10px"
});

export const daytime = style({
  backgroundColor: theme.color.white,
  color: theme.color.black
});

export const nighttime = style({
  backgroundColor: theme.color.black,
  color: theme.color.white
});
