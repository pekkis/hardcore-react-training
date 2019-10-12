const { createFeature } = require("@dr-kobros/broilerplate/lib/extend");
const { List, Map } = require("immutable");

module.exports = config =>
  createFeature({
    name: () => "emotionFeature",
    overrideLoader: loader => {
      if (loader.name() !== "babelLoader") {
        return loader;
      }

      return {
        ...loader,
        options: (env, target, paths, options) => {
          return loader
            .options(env, target, paths, options)
            .updateIn(["use", 0, "options", "presets"], p => {
              return p.push(
                List.of(
                  "@emotion/babel-preset-css-prop",
                  Map({
                    sourceMap: env === "development"
                  })
                )
              );
            });
        }
      };
    }
  });
