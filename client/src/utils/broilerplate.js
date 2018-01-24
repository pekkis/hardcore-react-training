const { OrderedSet, List } = require("immutable");
const {
  configureLoader,
  isLoaderEnabled,
  configurePlugin,
  getFeatures,
  isPluginEnabled,
  configureWebpack
} = require("./configure");

const { compose } = require("recompose");

const broilerplate = (env, target, paths, overrides) => {
  let features = OrderedSet.of(
    "babelFeature",
    "basicDevelopmentFeature",
    "basicOptimizationFeature",
    "clientRenderFeature",
    "codeSplittingFeature",
    "manifestFeature",
    "pekkisHybridCssFeature",
    "assetFeature"
  );

  let loaders = OrderedSet.of();
  let plugins = OrderedSet.of();

  const broilerplate = {
    addPlugin: plugin => {
      plugins = plugins.add(plugin);
      return broilerplate;
    },

    removePlugin: plugin => {
      plugins = plugins.filterNot(p => p === plugin);
      return broilerplate;
    },

    addLoader: loader => {
      loaders = loaders.add(loader);
      return broilerplate;
    },

    removeLoader: loader => {
      loaders = loaders.filterNot(l => l === loader);
      return broilerplate;
    },

    addFeature: feature => {
      features = features.add(feature);
      return broilerplate;
    },

    removeFeature: feature => {
      features = features.filterNot(f => f === feature);
      return broilerplate;
    },

    run: () => {
      const {
        overrideLoader,
        overridePlugin,
        overrideWebpackConfiguration
      } = overrides;

      features = getFeatures(env, target, paths, features);

      loaders = features.reduce(
        (loaders, f) => loaders.concat(f.loaders()),
        loaders
      );

      plugins = features.reduce(
        (plugins, f) => plugins.concat(f.plugins()),
        plugins
      );

      const overrideForLoaders = List.of(
        overrideLoader,
        (values, env, target, paths, name) =>
          features.reduce(
            (r, f) => f.overrideLoader(r, env, target, paths, name),
            values
          )
      );

      const overrideForPlugins = List.of(
        overridePlugin,
        (values, env, target, paths, name) =>
          features.reduce(
            (r, f) => f.overridePlugin(r, env, target, paths, name),
            values
          )
      );

      const runLoaders = loaders
        .filter(l => isLoaderEnabled(env, target, l))
        .map(l => configureLoader(env, target, paths, l, overrideForLoaders))
        .map(config => config.toJS());

      const runPlugins = plugins
        .filter(p => isPluginEnabled(env, target, p))
        .map(p => configurePlugin(env, target, paths, p, overrideForPlugins));

      const config = overrideWebpackConfiguration(
        env,
        target,
        paths,
        configureWebpack(env, target, paths, runLoaders, runPlugins)
      );

      return config.toJS();
    }
  };

  return broilerplate;
};

module.exports = broilerplate;
