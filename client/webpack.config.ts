import path from "path";
import { any } from "ramda";
import { merge } from "webpack-merge";
import { Configuration as WebpackConfiguration, DefinePlugin } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import WatchMissingNodeModulesPlugin from "react-dev-utils/WatchMissingNodeModulesPlugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import pkg from "./package.json";

import "dotenv/config";

type Mode = "development" | "production";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const hasPrefix = (prefixes: string[], value: string): boolean => {
  return any((p) => value.startsWith(p), prefixes);
};

const getEnvironmentVariables = (
  env: NodeJS.ProcessEnv,
  prefix: string[]
  //whitelisted: string[]
) => {
  const ret = Object.keys(env).reduce((a, key) => {
    if (hasPrefix(prefix, key)) {
      a[key] = env[key];
    }
    return a;
  }, {});

  // Todo: fix, this just a quick kludge because TS types broke everything.
  console.log("ret", ret);

  return ret;

  /*
  const picked = pickBy(
    (_, k) =>
      k === "NODE_ENV" || whitelisted.includes(k) || hasPrefix(prefix, k),
    env
  );
  return mapObjIndexed((v) => {
    return JSON.stringify(v);
  }, picked);
  */
};

const getBundleAnalyzer = (mode: Mode) => {
  const options: BundleAnalyzerPlugin.Options =
    mode === "development"
      ? {
          analyzerPort: 8890,
          openAnalyzer: false
        }
      : {
          analyzerMode: "disabled",
          generateStatsFile: true,
          statsFilename: "stats.json"
        };

  const p = new BundleAnalyzerPlugin(options);
  return p;
};

const getCssRule = (mode: Mode) => {
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

const getPcssRule = (mode: Mode) => {
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

const mode: Mode =
  process.env.NODE_ENV === "development" ? "development" : "production";

const isDevelopment = mode === "development";

const base: Configuration = {
  mode,
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 500
    }
  },
  output: {
    path: path.resolve("dist"),
    publicPath: "/"
  },
  devServer: {
    // host: "tussi.tunk.io", // if you have SSL problems in localhost, this helps
    port: 8888,
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
    new DefinePlugin({
      __DEVELOPMENT__: mode === "development",
      __PRODUCTION__: mode === "production",
      "process.env": getEnvironmentVariables(process.env, ["REACT_APP_"])
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "assets/web", flatten: false }]
    }),
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: "assets/index.html",
      favicon: "assets/favicon.png",
      chunksSortMode: "auto",
      title: "Training"
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
                require.resolve("@babel/preset-typescript"),
                [
                  require.resolve("@babel/preset-env"),
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
                [
                  require.resolve("@babel/preset-react"),
                  {
                    development: true,
                    runtime: "classic"
                    // importSource: "@emotion/react"
                  }
                ],
                //"@babel/preset-react"
                require.resolve("@emotion/babel-preset-css-prop")
              ],
              plugins: [
                require.resolve("@babel/plugin-syntax-dynamic-import"),
                require.resolve("@babel/plugin-proposal-class-properties"),
                require.resolve(
                  "@babel/plugin-proposal-nullish-coalescing-operator"
                ),
                require.resolve("@babel/plugin-proposal-optional-chaining"),
                isDevelopment && require.resolve("react-refresh/babel")
              ].filter(Boolean),
              cacheDirectory: true
            }
          }
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

const prod: Configuration = {
  devtool: "source-map",
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

const dev: Configuration = {
  devtool: "eval-source-map",
  entry: {
    client: ["./client.tsx"]
  },
  plugins: [
    new WatchMissingNodeModulesPlugin(path.resolve("node_modules")),
    new ReactRefreshWebpackPlugin()
  ],
  module: {
    rules: []
  }
};

const final = mode === "production" ? merge(base, prod) : merge(base, dev);

export default final;
