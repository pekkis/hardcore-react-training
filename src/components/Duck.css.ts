/*
.duck {
  border: 10px solid rgb(0 0 0);
  margin: 1em 0;
  padding: 1em;
  border-radius: 10px;
}
*/

// - CSS in CSS
// - CSS in JS
//    -- runtime, zero-runtime

// SASS!!
// LESS, PostCSS
// -- blob
// -- BEM
// -- modules!
// Styled Components?!?
// -- joku styled components berversio?
// joku vanha kamala CSS-in-JS ratkaisu?
// vanilla extract
// emotion (vähän sama qu Styled C)
// -- joko objektityylejä tai ``

// TAILWIND

import { style, globalStyle } from "@vanilla-extract/css";

globalStyle("html", {
  fontFamily: "Comic Sans MS"
  // backgroundImage: `url(src/assets/duckling-pattern.png)`
});

export const duckClass = style({
  listStyleType: "none",
  border: "10px solid rgb(0 0 0)",
  margin: "1em 0",
  padding: "1em",
  borderRadius: "10px",
  backgroundColor: "rgb(255 255 255)"
});

export const femaleClass = style({
  backgroundColor: "rgb(255 200 200)"
});

export const maleClass = style({
  backgroundColor: "rgb(200 200 255)"
});
