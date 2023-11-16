import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  backgroundColor: theme.color.yellow,
  color: theme.color.black,
  padding: theme.spacing.m
});
