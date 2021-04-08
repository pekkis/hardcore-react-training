import { Theme } from "theme-ui";
import { funk } from "@theme-ui/presets";

const theme: Theme = {
  ...funk,
  colors: {
    background: "rgb(255, 255, 255)",
    text: "rgb(0, 0, 0)"
  },
  space: [0, 8, 16, 32, 64]
};

export default theme;
