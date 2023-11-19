import { globalStyle } from "@vanilla-extract/css";

import bg from "../../assets/duckling-pattern.png";

globalStyle("html", {
  backgroundImage: `url(${bg.src})`
});

globalStyle("body", {
  marginBlock: 0,
  marginInline: 0,
  backgroundColor: "rgb(255 255 255 / .50)"
});

globalStyle("*", {
  boxSizing: "border-box"
});
