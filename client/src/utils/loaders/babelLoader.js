const path = require("path");
const fs = require("fs");
const { fromJS } = require("immutable");

const getBrowsers = root => {
  const browserFile = fs.readFileSync(path.resolve(root, ".browserslistrc"), {
    encoding: "utf-8"
  });
  return browserFile.split("\n").map(b => b.trim()).filter(b => b);
};

module.exports = {
  isEnabled: (env, target) => true,
  defaults: (env, target, paths) => {
    return fromJS({
      test: /\.jsx?$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: [
              [
                "env",
                {
                  debug: env === "development",
                  useBuiltIns: "entry",
                  targets: {
                    browsers: getBrowsers(paths.root)
                  },
                  modules: false
                }
              ]
            ],
            plugins: [
              "syntax-dynamic-import",
              "transform-flow-strip-types",
              "babel-plugin-transform-class-properties",
              "babel-plugin-transform-object-rest-spread",
              "babel-plugin-transform-decorators",
              "babel-plugin-transform-react-jsx"
            ]
          }
        }
      ],
      exclude: [paths.modules]
    });
  }
};
