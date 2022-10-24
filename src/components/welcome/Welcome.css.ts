import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";
import vars from "./theme.css";
// import ducklings from "../../assets/duckling-pattern.png";

export const flexClass = style({
  display: "block",
  backgroundColor: "hotpink",

  "@media": {
    "screen and (min-width: 720px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      width: "100%",
      gap: vars.space.small,
      alignItems: "center",
      height: "auto",
      backgroundColor: "hotpink"
    }
  }
});

export const contentClass = style({
  padding: vars.space.small
});

export const welcomeClass = style({
  padding: vars.space.medium
});

export const headerClass = style({
  padding: vars.space.medium,
  textAlign: "center"
});

export const paddedClass = style({
  padding: vars.space.medium
});

export const duckImageClass = style({
  maxWidth: "100%",
  display: "block"
  // mb: [-4, -4],
  // mt: [0, -4]
});

export const codeClass = style({
  wordBreak: "break-all"
});

globalStyle("*", {
  boxSizing: "border-box"
});

globalStyle("html", {
  // backgroundColor: "rgb(0 0 0)",
  fontFamily: vars.fontFamily.main,
  fontSize: vars.fontSize.medium,
  backgroundImage: `url("/src/assets/duckling-pattern.png")`
});

export const headingClass = styleVariants({
  primary: {},
  cute: {
    fontFamily: "acuta, sans-serif"
  }
});
