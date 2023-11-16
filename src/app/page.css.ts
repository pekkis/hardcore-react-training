import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const grid = style({
  display: "grid",
  gap: theme.spacing.m,

  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "auto",

  gridTemplateAreas: `
  "welcome welcome welcome"
  "clock clock clock"
  "quackcast quacktube quacktube"
  "latest latest currency"
  `,

  "@container": {
    "(width <= 50rem)": {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto",

      gridTemplateAreas: `
      "welcome"
      "clock"
      "quackcast"
      "quacktube"
      "latest"
      "currency"
      `
    }
  }
});

export const welcome = style({
  gridArea: "welcome"
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

export const quackcast = style({
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s,
  backgroundColor: "rgb(0 255 255 / .10)",
  gridArea: "quackcast"
});

export const quacktube = style({
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s,
  backgroundColor: "rgb(255 0 255 / .10)",
  gridArea: "quacktube"
});
