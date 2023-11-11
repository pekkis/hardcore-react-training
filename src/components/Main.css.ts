import { style } from "@vanilla-extract/css";
import theme from "./theme.css";

export const main = style({
  paddingInline: theme.spacing.m,
  containerType: "inline-size"
});
