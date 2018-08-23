const history = require("connect-history-api-fallback");
const convert = require("koa-connect");
const { fromJS } = require("immutable");

const loaderOverrides = {
  babelLoader: (loader, env, target, paths) => {
    return loader;
  }
};

const pluginOverrides = {
  htmlPlugin: (plugin, env, target, paths) => {
    return plugin;
  }
};

const overrideLoader = (loader, env, target, paths) => {
  return loaderOverrides[loader.name()]
    ? loaderOverrides[loader.name()](loader, env, target, paths)
    : loader;
};

const overridePlugin = (plugin, env, target, paths) => {
  return pluginOverrides[plugin.name()]
    ? pluginOverrides[plugin.name()](plugin, env, target, paths)
    : plugin;
};

const overrideBase = (base, env, target, paths) => {
  return base;

  if (env !== "development") {
    return base;
  }

  return base.set(
    "serve",
    fromJS({
      content: [__dirname],
      add: (app, middleware, options) => {
        const historyOptions = {
          // ... see: https://github.com/bripkens/connect-history-api-fallback#options
        };

        app.use(convert(history(historyOptions)));
      }
    })
  );
};

module.exports = {
  overrideLoader,
  overridePlugin,
  overrideBase
};
