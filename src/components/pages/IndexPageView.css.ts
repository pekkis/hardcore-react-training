import { style } from "@vanilla-extract/css";
import theme from "../theme.css";

export const grid = style({
  display: "grid",
  gap: theme.spacing.m,

  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "auto",

  gridTemplateAreas: `
  "clock clock clock"
  "latest latest currency"
  `,

  "@container": {
    "(width <= 50rem)": {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto",

      gridTemplateAreas: `
      "clock"
      "latest"
      "currency"
      `
    }
  }
});

export const clock = style({
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s,
  backgroundColor: "rgb(0 255 0 / .10)",
  gridArea: "clock"
});

export const currencies = style({
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s,
  backgroundColor: "rgb(255 0 0 / .10)",
  gridArea: "currency"
});

export const latest = style({
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s,
  backgroundColor: "rgb(0 0 255 / .10)",
  gridArea: "latest"
});
