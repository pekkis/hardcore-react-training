import { style } from "@vanilla-extract/css";
import theme from "@/theme.css";

export const image = style({
  width: "100%",
  maxWidth: "100%",
  display: "block",
  marginBlock: theme.spacing.m
});
