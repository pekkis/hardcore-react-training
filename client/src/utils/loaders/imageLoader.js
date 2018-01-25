const { fromJS } = require("immutable");

module.exports = {
  isEnabled: (env, target) => true,
  defaults: (env, target, paths) => {
    return fromJS({
      test: /\.(png|jpg|gif|ico|svg)$/,
      include: [paths.src],
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[path][name]-[hash].[ext]",
            emitFile: target === "client"
          }
        },
        {
          loader: "img-loader",
          options: {
            enabled: env === "production"
          }
        }
      ]
    });
  }
};
