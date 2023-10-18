import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const clock = style({
  border: "20px solid rgb(0 0 0)",
  borderRadius: "10px",
  // borderRadius: theme.borderRadius.plump
  padding: theme.spacing.m,
  marginBlock: theme.spacing.m
});
