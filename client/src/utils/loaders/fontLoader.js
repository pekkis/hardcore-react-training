const { fromJS } = require("immutable");

module.exports = {
  isEnabled: (env, target) => true,
  defaults: (env, target, paths) => {
    return fromJS({
      test: /font.*\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      include: [paths.src, paths.modules],
      use: [
        {
          loader: "url-loader",
          options: {
            emitFile: target === "client",
            limit: 10000,
            name: "[path][name]-[hash].[ext]"
          }
        }
      ]
    });
  }
};
