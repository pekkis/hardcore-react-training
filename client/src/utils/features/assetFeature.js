const { OrderedSet } = require("immutable");

module.exports = {
  plugins: () => OrderedSet.of("copyFilesPlugin"),
  loaders: () => OrderedSet.of("imageLoader", "fontLoader"),
  overrideLoader: (values, env, target, paths, key) => values,
  overridePlugin: (values, env, target, paths, key) => values,
  overrideWebpackConfiguration: (values, env, target, paths) => values
};
