// babel.config.js

const pkg = require("./package.json");

module.exports = (api) => {
  const env = api.env();

  console.log("ENVIRONMENT", env);

  api.cache(true);

  return {
    presets: [
      require.resolve("@babel/preset-typescript"),
      [
        require.resolve("@babel/preset-env"),
        {
          debug: true,
          useBuiltIns: "usage",
          targets: {
            browsers: pkg.browserslist[env]
          },
          modules: "auto",
          corejs: 3
        }
      ],
      [
        require.resolve("@babel/preset-react"),
        {
          development: process.env.NODE_ENV === "development",
          runtime: "automatic",
          importSource: "react"
        }
      ]
    ],
    plugins: [
      require.resolve("@babel/plugin-syntax-dynamic-import"),
      require.resolve("@babel/plugin-proposal-class-properties"),
      [
        require.resolve("@babel/plugin-proposal-decorators"),
        { decoratorsBeforeExport: true }
      ],
      require.resolve("@babel/plugin-proposal-nullish-coalescing-operator"),
      require.resolve("@babel/plugin-proposal-optional-chaining"),
      env === "development" && require.resolve("react-refresh/babel")
    ].filter(Boolean)
  };
};
