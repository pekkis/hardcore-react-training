const { List, Map } = require("immutable");
const Plugin = require("babel-minify-webpack-plugin");

module.exports = {
  isEnabled: (env, target) => env === "production" && target === "client",
  defaults: (env, target, paths) =>
    List.of(
      Map({
        mangle: false
      })
    ),
  plugin: options => new Plugin(...options)
};
