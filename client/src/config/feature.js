const { OrderedSet, fromJS, List } = require("immutable");

const rawLoader = {
  name: () => "rawLoader",
  isEnabled: (env, target) => true,
  supportedFeatures: () => OrderedSet.of(),
  options: (env, target, paths, options) => {
    return fromJS({
      test: /\.txt$/,
      use: "raw-loader"
    });
  }
};

const feature = {
  name: () => "feature",
  files: paths => List.of(),
  plugins: () => OrderedSet.of(),
  loaders: () => OrderedSet.of(rawLoader),
  overrideLoader: (loader, env, target, paths) => loader,
  overridePlugin: (plugin, env, target, paths) => plugin,
  overrideBase: (values, env, target, paths) => values
};

module.exports = feature;
