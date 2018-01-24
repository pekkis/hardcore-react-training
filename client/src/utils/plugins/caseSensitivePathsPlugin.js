const Plugin = require("case-sensitive-paths-webpack-plugin");
const { List } = require("immutable");

module.exports = {
  isEnabled: (env, target) => env === "development",
  defaults: (env, target) => List.of(undefined),
  plugin: options => new Plugin(...options)
};
