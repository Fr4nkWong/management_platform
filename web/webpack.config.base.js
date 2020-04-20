'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const rootPath = path.resolve(__dirname, '../');

module.exports = {
  entry: {
    main: `${rootPath}/app/view/src/main.js`,
  },
  output: {
    path: `${rootPath}/app/public/dist`,
    filename: '[name].js',
    pathinfo: true,
    publicPath: '/public/dist/',
  },
  resolve: {
    alias: {
      '@': `${rootPath}/app/view/src`,
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
        test: /\.(css)$/i,
        use: [
          'style-loader',
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
        test: /.(less)$/i,
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
};
