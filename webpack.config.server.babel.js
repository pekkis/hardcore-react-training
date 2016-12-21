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
        loader: [
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 2, localIdentName: '[name]__[local]__[hash:base64:5]' }
          },
          {
            loader: 'postcss-loader'
          },
        ]
      },
    ),
    {
      test: /\.css$/,
      loader: [
        'null-loader'
      ],
    },
    {
      test: /\.(png|jpg|gif|ico|svg)$/,
      loader: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name]-[hash].[ext]',
            emitFile: false,
          }
        },
        {
          loader: 'img-loader',
          options: {
            minimize: false,
          }
        }
      ],
      include: [
        PATHS.src
      ]
    },
    {
      test: /font.*\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[path][name]-[hash].[ext]',
          emitFile: false,
        }
      }],
    },
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
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  }
};

const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
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
