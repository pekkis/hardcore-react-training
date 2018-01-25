const { List, fromJS } = require("immutable");
const Plugin = require("html-webpack-plugin");

module.exports = {
  isEnabled: (env, target) => target === "client",
  defaults: (env, target, paths) =>
    List.of(
      fromJS({
        title: "Hardcorest React App",
        template: "assets/index.html",
        favicon: "assets/favicon.png",
        inject: "body",
        chunksSortMode: "dependency"
      })
    ),
  plugin: options => new Plugin(...options)
};
