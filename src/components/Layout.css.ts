import { globalStyle } from "@vanilla-extract/css";
import theme from "./theme.css";

import bg from "../assets/duckling-pattern.png";

globalStyle("html", {
  fontFamily: theme.fontFamilies.body,
  fontSize: theme.fontSizes.body,
  backgroundImage: `url(${bg.src})`
});

globalStyle("body", {
  marginBlock: 0,
  marginInline: 0,
  backgroundColor: "rgb(255 255 255 / .50)"
});
