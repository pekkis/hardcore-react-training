// import { pipe, over, lensPath, append } from "ramda";
import path from "path";
import util from "util";

import { any, pickBy, mapObjIndexed } from "ramda";
import { merge } from "webpack-merge";

import MiniCssExtractPlugin from "mini-css-extract-plugin";

import pkg from "./package.json";
// import { Configuration } from "webpack-dev-server";

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import * as webpack from "webpack";
// import * as webpackDevServer from "webpack-dev-server";

import CopyWebpackPlugin from "copy-webpack-plugin";
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import WatchMissingNodeModulesPlugin from "react-dev-utils/WatchMissingNodeModulesPlugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

// import ReactRefreshPlugin from "@webhotelier/webpack-fast-refresh";
// import ErrorOverlayPlugin from "@webhotelier/webpack-fast-refresh/error-overlay";

const hasPrefix = (prefixes: string[], value: string): boolean => {
  return any((p) => value.startsWith(p), prefixes);
};

const getEnvironmentVariables = (
  env: NodeJS.ProcessEnv,
  prefix: string[],
  whitelisted: string[]
): { [key: string]: string } => {
  // console.log(env, "env");

  const picked = pickBy(
    (_, k) =>
      k === "NODE_ENV" || whitelisted.includes(k) || hasPrefix(prefix, k),
    env
  );

  return mapObjIndexed((v) => {
    return JSON.stringify(v);
  }, picked);
};

const getBundleAnalyzer = (mode: string) => {
  const options: BundleAnalyzerPlugin.Options =
    mode === "development"
      ? {}
      : {
          analyzerMode: "disabled",
          generateStatsFile: true,
          statsFilename: "stats.json"
        };

  const p = new BundleAnalyzerPlugin(options);
  return p;
};

const getCssRule = (mode) => {
  return {
    test: /\.css$/,
    include: [path.resolve("src"), path.resolve("node_modules")],
    use: [
      {
        loader:
          mode === "development"
            ? require.resolve("style-loader")
            : MiniCssExtractPlugin.loader
      },
      {
        loader: require.resolve("css-loader")
      }
    ]
  };
};

const getPcssRule = (mode) => {
  return {
    test: /\.pcss$/,
    include: [path.resolve("src")],
    use: [
      {
        loader:
          mode === "development"
            ? require.resolve("style-loader")
            : MiniCssExtractPlugin.loader
      },
      {
        loader: require.resolve("css-loader")
      },
      {
        loader: require.resolve("postcss-loader")
      }
    ]
  };
};

const mode =
  process.env.NODE_ENV === "development" ? "development" : "production";

const base: webpack.Configuration = {
  mode,
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devtool: false,
  output: {
    path: path.resolve("dist"),
    publicPath: "/"
  },
  devServer: {
    port: 11000,
    hot: true,
    index: "index.html",
    disableHostCheck: true,
    historyApiFallback: true
  },
  resolve: {
    modules: [path.resolve("node_modules")],
    extensions: [".js", ".ts", ".jsx", ".tsx", ".mjs"]
  },
  context: path.resolve("src"),
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: mode === "development",
      __PRODUCTION__: mode === "production",
      "process.env": getEnvironmentVariables(process.env, ["REACT_APP_"], [])
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "assets/web", flatten: false }]
    }),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(path.resolve("node_modules")),
    new HtmlWebpackPlugin({
      template: "assets/index.html",
      favicon: "assets/index.html",
      chunksSortMode: "auto",
      title: "MHM 2000"
    }),
    getBundleAnalyzer(mode)
  ],
  module: {
    rules: [
      getCssRule(mode),
      getPcssRule(mode),
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        include: [path.resolve("src")],
        use: [
          {
            loader: require.resolve("file-loader"),
            options: { name: "[path][name]-[hash].[ext]", emitFile: true }
          },
          {
            loader: require.resolve("image-webpack-loader"),
            options: { disabled: mode !== "production" }
          }
        ]
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              babelrc: false,
              presets: [
                "@babel/preset-typescript",
                [
                  "@babel/preset-env",
                  {
                    debug: true,
                    useBuiltIns: "usage",
                    targets: {
                      browsers: pkg.browserslist[mode]
                    },
                    modules: false,
                    corejs: 3
                  }
                ],
                ["@babel/preset-react", { development: true }],
                "@emotion/babel-preset-css-prop"
              ],
              plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-nullish-coalescing-operator",
                "@babel/plugin-proposal-optional-chaining"
                // "react-refresh/babel"
              ],
              cacheDirectory: true
            }
          }
          // { loader: "@webhotelier/webpack-fast-refresh/loader.js" }
        ],
        exclude: [path.resolve("node_modules")]
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
    ]
  }
};

const prod: webpack.Configuration = {
  entry: {
    client: ["./client.tsx"]
  },
  output: {
    filename: "[name].[contenthash].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[id].[contenthash].css"
    })
  ],
  module: {
    rules: []
  }
};

const dev: webpack.Configuration = {
  entry: {
    client: ["./client.tsx"]
  },
  // plugins: [new ReactRefreshPlugin()],
  module: {
    rules: []
  }
};

const final = mode === "production" ? merge(base, prod) : merge(base, dev);

console.log(util.inspect(final, false, 999));

export default final;

// process.exit();

// export default withBundleAnalyzer;
