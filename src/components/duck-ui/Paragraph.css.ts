import { style } from "@vanilla-extract/css";

export const paragraph = style({
  marginBlock: "1em",

  ":last-child": {
    marginBlockEnd: 0
  }
});
