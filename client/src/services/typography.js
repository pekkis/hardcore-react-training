import Typography from "typography";

const typography = new Typography({
  includeNormalize: true,
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Noto Serif SC", "serif"],
  bodyFontFamily: ["Noto Serif SC", "serif"],
  googleFonts: [
    {
      name: "Noto Serif SC",
      styles: ["400", "400i", "700", "700i"]
    }
  ]
});

export default typography;
