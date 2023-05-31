import { globalStyle } from "@vanilla-extract/css";

import pattern from "../assets/duckling-pattern.png";
import { theme } from "@/theme.css";

globalStyle("*", {
  boxSizing: "border-box"
});

globalStyle("html", {
  fontFamily: "Comic Sans MS",
  backgroundImage: `url(${pattern.src})`
});

globalStyle("body", {
  backgroundColor: "rgb(255 255 255 / .75)",
  fontSize: theme.fontSize.body
});
