import webpack from 'webpack';
import path from 'path';
import merge from 'merge';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import clientConf from './config.client';
import { getStyleLoader } from './src/utils/webpack';
import { List } from 'immutable';

import fs from 'fs';

function getExternals() {
  const exceptions = [
    'react-fa',
    'font-awesome',
  ];
  const nodeModules = fs.readdirSync('node_modules')
    .filter(x => ['.bin'].indexOf(x) === -1)
    .filter(m => !exceptions.includes(m))
    .reduce((r, mod) => {
      r[mod] = 'commonjs ' + mod;
      return r;
    }, {});

    return nodeModules;
}

const ENV = process.env.NODE_ENV;

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
      'development',
      'node',
      {
        test: /\.pcss$/,
        include: [
          PATHS.src,
        ],
        loaders: [
          'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
    ),
    {
      test: /\.css$/,
      loaders: [
        'null-loader'
      ],
    },
    {
      test: /\.(png|jpg|gif|ico|svg)$/,
      loaders: [
        'file?emitFile=false&name=[path][name]-[hash].[ext]',
        'img',
      ],
      include: [
        PATHS.src
      ]
    },
    {
      test: /font.*\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?emitFile=false&limit=10000&name=[path][name]-[hash].[ext]',
      include: [
        PATHS.src,
        PATHS.modules
      ]
    },
    {
      test: /\.(json)$/,
      loader: 'json-loader',
    }
  ]);
}

const common = {
  context: path.join(__dirname, 'src'),
  externals: getExternals(),
  target: "node",
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
  new webpack.DefinePlugin({
    __DEVELOPMENT__: process.env.NODE_ENV === 'development',
    __DEVTOOLS__: false,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'window': {},
  })
];

const envs = {
  production: {
    devtool: 'source-map',
    entry: {
      server: './server.js',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js'
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
      new webpack.NoErrorsPlugin()
    ])
  }
}

export default merge(common, envs[ENV]);
