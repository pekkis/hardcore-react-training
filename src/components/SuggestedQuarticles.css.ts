import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const suggested = style({
  marginBlock: theme.spaces.medium,

  ":first-of-type": {
    marginBlockStart: 0
  }
});

export const headline = style({
  marginBlockStart: 0,
  marginBlockEnd: theme.spaces.medium
});
