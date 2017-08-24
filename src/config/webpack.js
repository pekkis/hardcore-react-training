const BabiliPlugin = require('babili-webpack-plugin');

function processCommonLoaders(loaders) {
  return loaders;
}

function processEnvLoaders(env, loaders) {
  return loaders;
}

function processCommonPlugins(plugins) {
  return plugins;
}

function processEnvPlugins(env, plugins) {
  if (env === 'production') {
    return plugins.update(-3, plugin => {
      // Still experimenting with this :)
      return new BabiliPlugin();
    });
  }
  return plugins;
}

module.exports = {
  processCommonLoaders,
  processEnvLoaders,
  processCommonPlugins,
  processEnvPlugins,
}
