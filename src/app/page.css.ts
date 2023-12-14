import { style } from "@vanilla-extract/css";

export const container = style({
  containerType: "inline-size"
});

export const puuppa = style({
  width: "25em",
  containerType: "inline-size"
});

export const clocks = style({
  "@container": {
    "(width > 30em)": {
      border: "5px rgb(255 0 0) solid"
    }
  }
});
