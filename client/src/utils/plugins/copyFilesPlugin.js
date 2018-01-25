const { List, fromJS } = require("immutable");
const Plugin = require("copy-webpack-plugin");

module.exports = {
  isEnabled: (env, target) => target === "client",
  defaults: (env, target, paths) =>
    List.of(fromJS([{ from: "assets/web/*.*", flatten: true }])),
  plugin: options => new Plugin(...options)
};
