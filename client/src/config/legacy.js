const { createFeature } = require("@dr-kobros/broilerplate/lib/extend");

module.exports = config =>
  createFeature({
    name: () => "legacyFeature",
    overrideBase: (values, env, target, paths) => {
      if (target === "server") {
        return values;
      }

      return values.updateIn(["entry", "client"], e =>
        e.unshift("core-js/stable", "regenerator-runtime/runtime")
      );
    }
  });
