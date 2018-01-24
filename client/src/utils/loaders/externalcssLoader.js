const { fromJS } = require("immutable");
const { getStyleLoader } = require("../webpack");

module.exports = {
  isEnabled: (env, target) => true,

  post: (env, target, options) => {
    return getStyleLoader(env, target, options);
  },

  defaults: (env, target, paths) => {
    return fromJS({
      test: /\.css$/,
      include: [paths.modules],
      use: [
        {
          loader: "css-loader",
          options: {
            modules: false,
            importLoaders: 2
          }
        }
      ]
    });
  }
};
