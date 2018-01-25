const ExtractTextPlugin = require("extract-text-webpack-plugin");

function getStyleLoader(env, target, options) {
  if (env === "development" && target === "client") {
    return options.update("use", u => u.unshift("style-loader"));
  }

  return options.update("use", u =>
    ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: u.toJS()
    })
  );
}

module.exports = {
  getStyleLoader
};
