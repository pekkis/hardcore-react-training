const { List } = require("immutable");
const Plugin = require("stats-webpack-plugin");

module.exports = {
  isEnabled: (env, target) => target === "client",
  defaults: (env, target, paths) => List.of("stats.json"),
  plugin: options => new Plugin(...options)
};
