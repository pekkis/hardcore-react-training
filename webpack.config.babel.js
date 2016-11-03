import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import merge from 'merge';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import serverConf from './config.server';
import { getStyleLoader } from './src/utils/webpack';
import { List } from 'immutable';
import WebpackAssetsManifest from 'webpack-assets-manifest';
import HtmlCreatorPlugin from '@dr-kobros/html-document-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import config from './config.server';

const ENV = process.env.NODE_ENV;
const rootAssetPath = './src/assets';

const PATHS = {
  src: path.resolve(__dirname, './src'),
  build: path.resolve(__dirname, './dist'),
  modules: path.resolve(__dirname, './node_modules'),
  test: path.resolve(__dirname, './test')
};

export function getPostCss() {
  return function () {
    return [autoprefixer, precss];
  }
}

export function getCommonLoaders(ENV) {
  return List([
    getStyleLoader(
      ENV,
      'browser',
      {
        test: /\.p?css$/,
        include: [
          PATHS.src,
        ],
        loaders: [
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
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
        loaders: [
          'css-loader'
        ]
      },
    ),
    {
      test: /\.(png|jpg|gif|ico|svg)$/,
      loaders: [
        'file?name=[path][name]-[hash].[ext]',
        (ENV === 'production ') ? 'img?minimize&optimizationLevel=5&progressive=true' : 'img',
      ],
      include: [
        PATHS.src
      ]
    },
    {
      test: /font.*\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&name=[path][name]-[hash].[ext]',
      include: [
        PATHS.src,
        PATHS.modules
      ]
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
      }
    ).toJS()
  },
  postcss: getPostCss(),
  resolve: {
    modulesDirectories: ['node_modules'],
    root: [
      PATHS.src,
    ],
    extensions: ['', '.js', '.jsx'],
  },
  resolveLoader: {
    root: PATHS.modules
  }
};

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin("styles.[contenthash].css"),
  new webpack.DefinePlugin({
    __DEVELOPMENT__: process.env.NODE_ENV === 'development',
    __DEVTOOLS__: false,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  new CopyWebpackPlugin([
    { from: 'assets/web/*.*', flatten: true },
  ]),
  /*
  new HtmlWebpackPlugin({
    title: 'Trollo',
    template: 'web/index.html',
    favicon: 'web/favicon.ico',
    inject: 'body'
  }),
  */
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
      ]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: 'client.[hash].js'
    },
    plugins: plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new HtmlCreatorPlugin({
        title: 'Hardcore React Training',
        css: [],
        favicon: 'assets/web/favicon.png',
      }),
    ]),
  },
  production: {
    devtool: 'source-map',
    entry: {
      client: './client.js',
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
      new webpack.NoErrorsPlugin(),
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
