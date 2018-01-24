const { fromJS } = require("immutable");
const { getStyleLoader } = require("../webpack");

module.exports = {
  isEnabled: (env, target) => true,

  post: (env, target, options) => {
    return getStyleLoader(env, target, options);
  },

  defaults: (env, target, paths) => {
    return fromJS({
      test: /\.pcss$/,
      use: [
        {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 2,
            localIdentName: "[name]__[local]__[hash:base64:5]"
          }
        },
        {
          loader: "postcss-loader"
        }
      ]
    });
  }
};
