const { List, Map } = require("immutable");
const webpack = require("webpack");
const Plugin = webpack.DefinePlugin;
const { getEnvironmentVariables } = require("../env");

module.exports = {
  isEnabled: (env, target) => true,
  defaults: (env, target, paths) =>
    List.of(
      Map({
        __DEVELOPMENT__: process.env.NODE_ENV === "development",
        "process.env": getEnvironmentVariables()
      })
    ),
  plugin: options => new Plugin(...options)
};
