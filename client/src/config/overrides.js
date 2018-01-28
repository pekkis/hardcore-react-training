const loaderOverrides = {};

const pluginOverrides = {
  /*
  htmlPlugin: (values, env, target, paths) => {
    return values.setIn([0, "favicon"], "favicon.ico");
  }
  */
};

function overrideLoader(defaults, env, target, paths, configKey) {
  return loaderOverrides[configKey]
    ? loaderOverrides[configKey](defaults, env, target, paths)
    : defaults;
}

function overridePlugin(defaults, env, target, paths, configKey) {
  return pluginOverrides[configKey]
    ? pluginOverrides[configKey](defaults, env, target, paths)
    : defaults;
}

function overrideWebpackConfiguration(defaults, env, target, paths) {
  return defaults;

  /*
  if (target === "server") {
    return defaults;
  }
  return defaults.updateIn(["entry", "client"], e =>
    e.unshift("babel-polyfill")
  );
  */
}

module.exports = {
  overrideLoader,
  overridePlugin,
  overrideWebpackConfiguration
};
