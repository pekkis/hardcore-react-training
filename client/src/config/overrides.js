const loaderOverrides = {
  babelLoader: (env, target, paths, defaults) => {
    return defaults;
    /*
    return defaults.setIn(
      ["use", 0, "options", "presets", 0, 1, "targets", "browsers"],
      "tussihovi"
    );
    */
  }
};

const pluginOverrides = {
  htmlPlugin: (env, target, paths, values) =>
    values.setIn([0, "title"], "Fraktio ERP 3000")
};

function processCommonPlugins(plugins) {
  return plugins;
}

function processEnvPlugins(env, plugins) {
  return plugins;
}

function overrideLoader(defaults, env, target, paths, configKey) {
  return loaderOverrides[configKey]
    ? loaderOverrides[configKey](env, target, paths, defaults)
    : defaults;
}

function overridePlugin(defaults, env, target, paths, configKey) {
  return pluginOverrides[configKey]
    ? pluginOverrides[configKey](env, target, paths, defaults)
    : defaults;
}

function overrideWebpackConfiguration(env, target, paths, config) {
  return config;
}

module.exports = {
  processCommonPlugins,
  processEnvPlugins,
  overrideLoader,
  overridePlugin,
  overrideWebpackConfiguration
};
