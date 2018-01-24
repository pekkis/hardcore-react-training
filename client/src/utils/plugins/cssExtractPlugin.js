const { List } = require("immutable");
const Plugin = require("extract-text-webpack-plugin");

module.exports = {
  isEnabled: (env, target) => env === "production",
  defaults: (env, target, paths) => List.of("styles.[contenthash].css"),
  plugin: options => new Plugin(...options)
};
