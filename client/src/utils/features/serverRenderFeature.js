const { OrderedSet } = require("immutable");
// const nodeExternals = require("webpack-node-externals");

module.exports = {
  plugins: () => OrderedSet.of(),
  loaders: () => OrderedSet.of(),
  overrideLoader: (values, env, target, paths, key) => values,
  overridePlugin: (values, env, target, paths, key) => values,
  overrideWebpackConfiguration: (values, env, target, paths, key) => {
    return values;
    // TODO: why dis not work with font-awesome (dep of dep, maybe)
    /*
    if (target === "client") {
      return values;
    }
    return values.update("externals", e =>
      e.push(
        nodeExternals({
          whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i]
        })
      )
    );
    */
  }
};
