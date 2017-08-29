const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { List } = require('immutable');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { getStyleLoader } = require('./src/utils/webpack');
const pkg = require('./package.json');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const {
  processCommonLoaders,
  processEnvLoaders,
  processCommonPlugins,
  processEnvPlugins
} = require('./src/config/webpack');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');

const { getEnvironmentVariables } = require('./src/utils/env');
const dotenv = require('dotenv');
dotenv.config();

const envVars = getEnvironmentVariables();


console.log('environment variables', envVars);


const ENV = process.env.NODE_ENV;

const PATHS = {
  src: path.resolve(__dirname, './src'),
  build: path.resolve(__dirname, './dist'),
  modules: path.resolve(__dirname, './node_modules'),
  test: path.resolve(__dirname, './test'),
};

function getCommonLoaders() {
  const commonLoaders = List([
    getStyleLoader(
      ENV,
      'browser',
      {
        test: /\.pcss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ),
    getStyleLoader(
      ENV,
      'browser',
      {
        test: /\.css$/,
        include: [
          PATHS.modules,
        ],
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: false,
              importLoaders: 2,
            },
          },
        ],
      },
    ),
    {
      test: /\.(png|jpg|gif|ico|svg)$/,
      include: [
        PATHS.src,
      ],
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name]-[hash].[ext]',
          },
        },
        {
          loader: 'img-loader',
          options: {
            enabled: ENV === 'production'
          },
        },
      ],
    },
    {
      test: /font.*\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      include: [
        PATHS.src,
        PATHS.modules,
      ],
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[path][name]-[hash].[ext]',
        },
      }],
    },
    {
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader'
      }],
      exclude: [
        PATHS.modules,
      ],
    },
  ]);
  return processCommonLoaders(commonLoaders);
}

const common = {
  context: path.join(__dirname, 'src'),
  resolve: {
    modules: [
      PATHS.src,
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
};

function getCommonPlugins() {
  const commonPlugins = List.of(
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(PATHS.modules),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('styles.[contenthash].css'),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: process.env.NODE_ENV === 'development',
      __DEVTOOLS__: false,
      'process.env': getEnvironmentVariables(),
    }),
    new CopyWebpackPlugin([
      { from: 'assets/web/*.*', flatten: true },
    ]),
    new HtmlWebpackPlugin({
      title: 'Hardcorest React App',
      template: 'assets/index.html',
      favicon: 'assets/favicon.png',
      inject: 'body',
      chunksSortMode: 'dependency',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash].js',
      minChunks(module, count) {
        var context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'meta',
      chunks: ['vendor'],
      filename: 'meta.[hash].js',
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  );

  return processCommonPlugins(commonPlugins);
}

const envs = {
  test: {
    module: {
      rules: processEnvLoaders(
        'test',
        getCommonLoaders()
      ).toJS()
    },
    devtool: 'eval',
  },

  development: {
    module: {
      rules: processEnvLoaders(
        'development',
        getCommonLoaders()
      ).toJS()
    },
    devtool: '#eval-source-map',
    entry: {
      client: [
        './client.js',
      ],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: 'client.[chunkhash].js',
      // devtoolModuleFilenameTemplate: '/[absolute-resource-path]',
    },
    plugins: processEnvPlugins(
      'development',
      getCommonPlugins()
    ).toJS(),
  },
  production: {
    module: {
      rules: processEnvLoaders(
        'production',
        getCommonLoaders()
      ).toJS()
    },
    devtool: 'source-map',
    entry: {
      client: [
        './client.js',
      ],
    },

    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].[chunkhash].js',
      devtoolModuleFilenameTemplate: '/[absolute-resource-path]',
    },
    plugins: processEnvPlugins(
      'production',
      getCommonPlugins().concat([
        new BabelMinifyPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new WebpackAssetsManifest({
          output: 'manifest.json',
          writeToDisk: true,
          sortManifest: true,
          merge: true,
        }),
      ])
    ).toJS(),
  },
};

module.exports = merge(common, envs[ENV]);
