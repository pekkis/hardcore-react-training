import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const grid = style({
  marginBlockStart: theme.spaces.grand,
  display: "grid",
  columnGap: theme.spaces.grand,
  rowGap: theme.spaces.medium,
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "1fr",
  gridTemplateAreas: `
  "main-content main-content aside"
  `
});
