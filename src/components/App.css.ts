import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../services/theme.css";

// import bg from "../jonnekin"

globalStyle("html", {
  fontFamily: "'Comic Sans MS'",
  backgroundImage: "url('/src/assets/duckling-pattern.png')"
});

globalStyle("body", {
  padding: vars.space.medium
});
