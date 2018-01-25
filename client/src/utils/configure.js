const path = require("path");
const isString = require("lodash.isstring");
const isFunction = require("lodash.isfunction");
const { fromJS, List } = require("immutable");

const defaultPlugin = {
  defaults: () => List.of(undefined),
  plugin: () => {
    throw new Error("Can not instantiate plugin");
  },
  isEnabled: () => true
};

const getFeatures = (env, target, paths, specs) => {
  // TODO: recursive adding of features by feature?
  return specs.map(s => getFeature(s));
};

const getObjectFromSpec = directory => spec => {
  if (isString(spec)) {
    return require(path.resolve(__dirname, directory, spec));
  }

  return spec;
};

const getLoader = getObjectFromSpec("loaders");
const getFeature = getObjectFromSpec("features");

const getPlugin = (...specs) => {
  if (specs.length > 1 || isFunction(specs[0])) {
    const [plugin, isEnabled, defaults] = specs;
    return {
      plugin: plugin || defaultPlugin.plugin,
      isEnabled: isEnabled || defaultPlugin.isEnabled,
      defaults: defaults || defaultPlugin.defaults
    };
  }

  const [spec] = specs;

  if (isString(spec)) {
    const plugin = require(path.resolve(__dirname, "plugins", spec));
    return {
      ...defaultPlugin,
      ...plugin
    };
  }

  return {
    ...defaultPlugin,
    ...spec
  };
};

const isLoaderEnabled = (env, target, spec) => {
  const loader = getLoader(spec);
  return loader.isEnabled ? loader.isEnabled(env, target) : true;
};

const isPluginEnabled = (env, target, spec) => {
  const plugin = getPlugin(spec);
  return plugin.isEnabled(env, target);
};

const configureLoader = (env, target, paths, loaderName, overrides) => {
  const loader = getLoader(loaderName);
  const defaults = loader.defaults(env, target, paths);

  const options = overrides.reduce(
    (v, o) => o(v, env, target, paths, loaderName),
    defaults
  );
  return loader.post ? loader.post(env, target, options) : options;
};

const configurePlugin = (env, target, paths, pluginName, overrides) => {
  const plugin = getPlugin(pluginName);
  const defaults = plugin.defaults(env, target, paths);

  const options = overrides.reduce(
    (v, o) => o(v, env, target, paths, pluginName),
    defaults
  );

  const toPlugin = options.toJS();
  return plugin.plugin(toPlugin);
};

const configureWebpack = (env, target, paths, loaders, plugins) => {
  return baseConfig(env, target, paths)
    .setIn(["module", "rules"], loaders)
    .set("plugins", plugins);
};

const getEntry = (env, target) => {
  return target === "client" ? "./client.js" : "./server.js";
};

const getFilename = (env, target) => {
  if (env === "development" || target === "server") {
    return "[name].js";
  }

  return "[name].[chunkhash].js";
};

const baseConfig = (env, target, paths) => {
  let baseConfig = fromJS({
    devtool: env === "development" ? "#eval-source-map" : "source-map",
    context: paths.src,
    module: {
      rules: []
    },
    externals: [],
    resolve: {
      modules: [paths.src, "node_modules"],
      extensions: [".js", ".jsx"]
    },
    entry: {
      [target]: [getEntry(env, target)]
    },

    output: {
      path: paths.build,
      publicPath: "/",
      filename: getFilename(env, target),
      devtoolModuleFilenameTemplate: "/[absolute-resource-path]"
    },
    plugins: []
  });

  if (target === "server") {
    baseConfig = baseConfig
      .set("target", "node")
      .setIn(["output", "library"], "app")
      .setIn(["output", "libraryTarget"], "commonjs2");
  }

  return baseConfig;
};

module.exports = {
  configureLoader,
  isLoaderEnabled,
  configurePlugin,
  isPluginEnabled,
  configureWebpack,
  getFeatures
};
