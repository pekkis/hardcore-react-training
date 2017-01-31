import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import merge from 'merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import serverConf from './config.server';
import { getStyleLoader } from './src/utils/webpack';
import { List } from 'immutable';
import WebpackAssetsManifest from 'webpack-assets-manifest';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import config from './config.server';
import pkg from './package.json';

const ENV = process.env.NODE_ENV;
const rootAssetPath = './src/assets';

const PATHS = {
  src: path.resolve(__dirname, './src'),
  build: path.resolve(__dirname, './dist'),
  modules: path.resolve(__dirname, './node_modules'),
  test: path.resolve(__dirname, './test')
};

export function getCommonLoaders(ENV) {

  return List([
    getStyleLoader(
      ENV,
      'browser',
      {
        test: /\.pcss$/,
        loader: [
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 2, localIdentName: '[name]__[local]__[hash:base64:5]' }
          },
          {
            loader: 'postcss-loader'
          },
        ]
      }
    ),
    getStyleLoader(
      ENV,
      'browser',
      {
        test: /\.css$/,
        include: [
          PATHS.modules,
        ],
        loader: [
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 2, localIdentName: '[name]__[local]__[hash:base64:5]' }
          }
        ]
      }
    ),
    {
      test: /\.(png|jpg|gif|ico|svg)$/,
      include: [
        PATHS.src
      ],
      loader: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name]-[hash].[ext]',
          }
        },
        {
          loader: 'img-loader',
          options: {
            minimize: true,
            optimizationLevel: 5,
            progressive: true,
          }
        }
      ],
    },
    {
      test: /font.*\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      include: [
        PATHS.src,
        PATHS.modules
      ],
      loaders: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[path][name]-[hash].[ext]'
        }
      }]
    }
  ]);
}

const common = {
  context: path.join(__dirname, 'src'),
  module: {
    loaders: getCommonLoaders(ENV).concat(
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [
          PATHS.modules,
        ]
      },
    ).toJS()
  },
  resolve: {
    modules: [
      PATHS.src,
      'node_modules'
    ],
    extensions: ['.js', '.jsx'],
  },
};

const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new ExtractTextPlugin("styles.[contenthash].css"),
  new webpack.DefinePlugin({
    __DEVELOPMENT__: process.env.NODE_ENV === 'development',
    __DEVTOOLS__: false,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  new CopyWebpackPlugin([
    { from: 'assets/web/*.*', flatten: true },
  ]),
  new HtmlWebpackPlugin({
    title: 'Hardcorest React App',
    template: 'index.html',
    favicon: 'favicon.png',
    inject: 'body',
    chunksSortMode: 'dependency',
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    filename: 'vendor.[chunkhash].js',
    minChunks: Infinity,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'meta',
    chunks: ['vendor'],
    filename: 'meta.[hash].js'
  }),
];

const envs = {
  test: {
    devtool: '#inline-source-map' //just do inline source maps instead of the default
  },

  development: {
    devtool: '#eval-source-map',
    entry: {
      client: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './client.js'
      ],
      vendor: [
        // 'babel-polyfill' // de-comment if polyfill is needed
      ].concat(
        Object.keys(pkg.dependencies)
      ),
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: 'client.[chunkhash].js'
    },
    plugins: plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
    ]),
  },
  production: {
    devtool: 'source-map',
    entry: {
      client: [
        './client.js',
      ],
      vendor: [
        // 'babel-polyfill' // de-comment if polyfill is needed
      ].concat(
        Object.keys(pkg.dependencies)
      ),
    },

    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].[chunkhash].js'
    },
    plugins: plugins.concat([
      new webpack.optimize.UglifyJsPlugin({
        'mangle': false,
        'compress': {
          dead_code: true,
          unsafe: false,
          unused: false,
          hoist_vars: false,
          side_effects: false,
          global_defs: {}
        }
      }),
      new webpack.NoEmitOnErrorsPlugin(),
      new WebpackAssetsManifest({
        output: 'manifest.json',
        writeToDisk: true,
        sortManifest: true,
        merge: true,
      }),
    ])
  }
}

export default merge(common, envs[ENV]);
