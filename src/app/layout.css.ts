import { globalStyle } from "@vanilla-extract/css";

import bg from "@/assets/duckling-pattern.png";

globalStyle("html", {
  fontFamily: "Comic Sans MS",
  fontSize: "18px",
  backgroundImage: `url(${bg.src})`
});

globalStyle("body", {
  padding: 0
});
