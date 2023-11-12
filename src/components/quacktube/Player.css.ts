import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const player = style({
  marginBlock: theme.spacing.m
});

export const controls = style({
  margin: theme.spacing.s,
  display: "flex",
  flexBasis: "100%",
  alignItems: "stretch",
  gap: theme.spacing.s
});

export const playButton = style({});

export const progress = style({
  flexGrow: 6,
  width: "100%"
});

export const bar = style({
  width: "100%",
  height: "100%"
});

export const video = style({
  width: "100%",
  maxWidth: "100%",
  aspectRatio: 16 / 9,
  border: "5px solid rgb(0 0 0)",
  borderRadius: theme.borderRadius.plump
});
