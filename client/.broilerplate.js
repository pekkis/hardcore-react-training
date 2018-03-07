const path = require("path");
const util = require("util");
const {
  pipe,
  empty,
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
const babelPolyfillFeature = require("@dr-kobros/broilerplate/lib/features/babelPolyfillFeature");
const nodeExternalsFeature = require("@dr-kobros/broilerplate/lib/features/nodeExternalsFeature");
const styledComponentsFeature = require("@dr-kobros/broilerplate-styled-components");

const dotenv = require("dotenv");
dotenv.config();

const { Map } = require("immutable");

module.exports = target => {
  const env = process.env.NODE_ENV;

  const config = pipe(
    empty,
    defaultPaths(env, target, __dirname),
    defaultBaseConfig(env, target),
    defaultFeatures,
    addFeatures(
      postCssFeature,
      styledComponentsFeature,
      babelPolyfillFeature,
      nodeExternalsFeature({
        whitelist: [/^react-fa/, /^font-awesome/]
      })
    ),
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
