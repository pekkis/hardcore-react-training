import Typography from "typography";

const typography = new Typography({
  includeNormalize: true,
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Montserrat", "Comic Sans MS", "serif"],
  bodyFontFamily: ["Merriweather", "Comic Sans MS", "serif"],
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["700"]
    },
    {
      name: "Merriweather",
      styles: ["400", "400i", "700", "700i"]
    }
  ]
});

export default typography;
