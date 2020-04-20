'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const rootPath = path.resolve(__dirname, '../');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: `${rootPath}/web/src/main.js`,
  },
  output: {
    path: `${rootPath}/app/public/dist`,
    filename: '[name].js',
    pathinfo: true,
    publicPath: '/public/dist/',
  },
  resolve: {
    extensions: [ '.vue', '.js' ],
    alias: {
      '@': `${rootPath}/web/src`,
    },
  },
  module: {
    rules: [
      {
        test: /.(vue)$/,
        loader: 'vue-loader',
      },
      {
        test: /.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@vue/cli-plugin-babel/preset',
              ],
            },
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // 引入样式也要走下面2个loader
              modules: true, // css模块化打包，css引入解耦
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                autoprefixer(),
              ],
            },
          },
        ],
      },
      {
        test: /.(less)$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // css模块化打包，css引入解耦
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                autoprefixer(),
              ],
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|svg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]',
            limit: 10240,
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${rootPath}/web/src/index.html`,
      inject: true,
    }),
    new ScriptExtHtmlWebpackPlugin({
      custom: [
        {
          test: /\.js$/,
          attribute: 'type',
          value: 'text/javascript',
        },
      ],
    }),
    new VueLoaderPlugin(),
  ],
};
