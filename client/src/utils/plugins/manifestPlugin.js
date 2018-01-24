const Plugin = require("webpack-assets-manifest");
const { List, Map } = require("immutable");

module.exports = {
  isEnabled: (env, target) => true,
  defaults: (env, target) =>
    List.of(
      Map({
        output: "manifest.json",
        writeToDisk: true,
        sortManifest: true,
        merge: true
      })
    ),
  plugin: options => new Plugin(...options)
};
