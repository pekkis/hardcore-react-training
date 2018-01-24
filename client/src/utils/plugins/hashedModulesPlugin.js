const { List } = require("immutable");
const webpack = require("webpack");
const Plugin = webpack.HashedModuleIdsPlugin;

module.exports = {
  isEnabled: (env, target) => true,
  defaults: (env, target, paths) => List.of(undefined),
  plugin: options => new Plugin(...options)
};
