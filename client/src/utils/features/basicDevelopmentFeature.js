const { OrderedSet } = require("immutable");

module.exports = {
  plugins: () =>
    OrderedSet.of(
      "caseSensitivePathsPlugin",
      "watchMissingNodeModulesPlugin",
      "noEmitOnErrorsPlugin",
      "definePlugin",
      "namedModulesPlugin",
      "namedChunksPlugin"
    ),
  loaders: () => OrderedSet.of(),
  overrideLoader: (values, env, target, paths, key) => values,
  overridePlugin: (values, env, target, paths, key) => values
};
