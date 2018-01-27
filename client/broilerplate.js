const { broilerplate, defaultPaths } = require("@dr-kobros/broilerplate");
const overrides = require("./src/config/overrides");
const dotenv = require("dotenv");
dotenv.config();

module.exports = target => {
  const env = process.env.NODE_ENV;
  const paths = defaultPaths(env, target, __dirname);

  const bp = broilerplate(env, target, paths, overrides)
    .removeFeature("codeSplittingFeature")
    .run();
  return bp;

  // // .removeFeature("codeSplittingFeature")
  // .addFeature("babelMinifyFeature")
  // .removeFeature("codeSplittingFeature")
  //.removeFeature("pekkisHybridCssFeature")
  //.addFeature("assetFeature")
  //.addPlugin(() => new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
  //.removeLoader("externalcssLoader")
};
