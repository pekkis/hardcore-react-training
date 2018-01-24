const { List, fromJS } = require("immutable");
const webpack = require("webpack");
const Plugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  isEnabled: (env, target) => true,
  defaults: (env, target, paths) =>
    List.of(
      fromJS({
        name: "meta",
        chunks: ["vendor"],
        filename: env === "production" ? "meta.[hash].js" : "meta.js"
      })
    ),
  plugin: options => new Plugin(...options)
};
