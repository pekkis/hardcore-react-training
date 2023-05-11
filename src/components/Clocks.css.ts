import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const flexxer = style({
  display: "flex",
  alignSelf: "stretch",
  alignItems: "stretch",
  flexBasis: "100%",
  flexWrap: "wrap",
  gap: theme.spaces.medium
});

export const item = style({
  borderRadius: theme.borderRadius.grand,
  backgroundColor: theme.color.black,
  color: theme.color.white,
  padding: theme.spaces.small,
  flexGrow: 1,
  flexShrink: 1
});
