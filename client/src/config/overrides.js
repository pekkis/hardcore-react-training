const loaderOverrides = {
  babelLoader: (loader, env, target, paths, options) => {
    return {
      ...loader,
      options: (env, target, path, options) => {
        return loader
          .options(env, target, paths, options)
          .setIn(["use", 0, "options", "cacheDirectory"], true)
          .updateIn(["use", 0, "options", "plugins"], plugins => {
            return plugins.push("universal-import");
          });
      }
    };
  }
};

const pluginOverrides = {
  htmlPlugin: (plugin, env, target, paths) => {
    return plugin;
  }
};

const overrideLoader = (loader, env, target, paths, options) => {
  return loaderOverrides[loader.name()]
    ? loaderOverrides[loader.name()](loader, env, target, paths, options)
    : loader;
};

const overridePlugin = (plugin, env, target, paths) => {
  return pluginOverrides[plugin.name()]
    ? pluginOverrides[plugin.name()](plugin, env, target, paths)
    : plugin;
};

const overrideBase = (base, env, target, paths, options) => {
  console.log(base.get("optimization"));
  // process.exit();

  return base.delete("optimization");
};

module.exports = {
  overrideLoader,
  overridePlugin,
  overrideBase
};
