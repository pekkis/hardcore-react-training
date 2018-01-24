const ExtractTextPlugin = require("extract-text-webpack-plugin");

function getStyleLoader(env, target, options) {
  if (target === "browser") {
    if (env === "development") {
      return options.update("use", u => u.unshift("style-loader"));
    }
    return options.update("use", u =>
      ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: u.toJS()
      })
    );
  }

  return options;
}

module.exports = {
  getStyleLoader
};
