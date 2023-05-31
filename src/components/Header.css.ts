import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  backgroundColor: theme.color.black,
  color: theme.color.white,
  position: "sticky",
  top: 0,
  padding: theme.spacing.s,
  margin: 0
});

export const image = style({
  verticalAlign: "middle",
  display: "inline-block",
  marginInlineEnd: theme.spacing.m
});
