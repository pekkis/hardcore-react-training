const path = require("path");
const util = require("util");
const {
  pipe,
  ensureFiles,
  defaultFeatures,
  defaultPaths,
  defaultBaseConfig,
  addFeatures,
  compile,
  override,
  run,
  toJS
} = require("@dr-kobros/broilerplate");

const postCssFeature = require("@dr-kobros/broilerplate-postcss");
const styledComponentsFeature = require("@dr-kobros/broilerplate-styled-components");

const dotenv = require("dotenv");
dotenv.config();

const { Map } = require("immutable");

const babelPolyfill = build => {
  return build.updateIn(["base", "entry", "client"], e =>
    e.unshift("babel-polyfill")
  );
};

module.exports = target => {
  const env = process.env.NODE_ENV;

  const config = pipe(
    defaultPaths(env, target, __dirname),
    defaultBaseConfig(env, target),
    babelPolyfill,
    defaultFeatures,
    addFeatures(postCssFeature, styledComponentsFeature),
    ensureFiles(false),
    compile(env, target),
    override(path.join(__dirname, "./src/config/overrides")),
    run,
    toJS
  )(Map());

  console.log("config", util.inspect(config, { depth: 666 }));
  // process.exit();

  return config;
};
