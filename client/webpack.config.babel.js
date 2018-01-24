const dotenv = require("dotenv");
const path = require("path");

const broilerplate = require("./src/utils/broilerplate");
const overrides = require("./src/config/overrides");

// const webpack = require("webpack");

dotenv.config();

const ENV = process.env.NODE_ENV;
const TARGET = "browser";
const PATHS = {
  root: path.resolve(__dirname),
  src: path.resolve(__dirname, "./src"),
  build: path.resolve(__dirname, "./dist"),
  modules: path.resolve(__dirname, "./node_modules"),
  test: path.resolve(__dirname, "./test")
};

module.exports = broilerplate(ENV, TARGET, PATHS, overrides)
  .addFeature("babelMinifyFeature")
  // .removeFeature("codeSplittingFeature")
  //.removeFeature("pekkisHybridCssFeature")
  //.addFeature("assetFeature")
  //.addPlugin(() => new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
  //.removeLoader("externalcssLoader")
  .run();
