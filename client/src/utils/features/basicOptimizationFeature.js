const { OrderedSet } = require("immutable");

module.exports = {
  plugins: () =>
    OrderedSet.of("occurrenceOrderPlugin", "moduleConcatenationPlugin"),
  loaders: () => OrderedSet.of(),
  overrideLoader: (values, env, target, paths, key) => values,
  overridePlugin: (values, env, target, paths, key) => values
};
