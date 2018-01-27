const loaderOverrides = {};

const pluginOverrides = {
  htmlPlugin: (values, env, target, paths) => {
    return values.setIn([0, "title"], "Fraktio ERP 3000");
  }
};

function processCommonPlugins(plugins) {
  return plugins;
}

function processEnvPlugins(env, plugins) {
  return plugins;
}

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
}

module.exports = {
  processCommonPlugins,
  processEnvPlugins,
  overrideLoader,
  overridePlugin,
  overrideWebpackConfiguration
};
