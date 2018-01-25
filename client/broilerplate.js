const path = require("path");
const broilerplate = require("./src/utils/broilerplate");
const overrides = require("./src/config/overrides");
const dotenv = require("dotenv");
dotenv.config();

module.exports = target => {
  const buildDir = target === "client" ? "./dist" : "./dist-server";
  const env = process.env.NODE_ENV;
  const paths = {
    root: path.resolve(__dirname),
    src: path.resolve(__dirname, "./src"),
    build: path.resolve(__dirname, buildDir),
    modules: path.resolve(__dirname, "./node_modules"),
    test: path.resolve(__dirname, "./test")
  };

  const bp = broilerplate(env, target, paths, overrides).run();
  return bp;

  // // .removeFeature("codeSplittingFeature")
  // .addFeature("babelMinifyFeature")
  // .removeFeature("codeSplittingFeature")
  //.removeFeature("pekkisHybridCssFeature")
  //.addFeature("assetFeature")
  //.addPlugin(() => new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
  //.removeLoader("externalcssLoader")
};
