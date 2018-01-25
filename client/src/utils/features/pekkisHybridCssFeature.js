const { OrderedSet } = require("immutable");

module.exports = {
  plugins: () => OrderedSet.of("cssExtractPlugin"),
  loaders: () => OrderedSet.of("postcssLoader", "externalcssLoader"),
  overrideLoader: (values, env, target, paths, key) => {
    switch (key) {
      case "babelLoader":
        return values.updateIn(["use", 0, "options", "plugins"], p =>
          p.push([
            "babel-plugin-styled-components",
            {
              ssr: true
            }
          ])
        );

      default:
        return values;
    }
  },
  overridePlugin: (values, env, target, paths, key) => values,
  overrideWebpackConfiguration: (values, env, target, paths) => values
};
