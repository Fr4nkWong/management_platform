'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const rootPath = path.resolve(__dirname, '../');

module.exports = {
  entry: {
    main: `${rootPath}/app/view/src/app.js`,
  },
  output: {
    path: `${rootPath}/app/public/dist`,
    filename: '[name].js',
    pathinfo: true,
  },
  resolve: {
    alias: {
      view: `${rootPath}/app/view/src`,
    },
  },
  module: {
    rules: [
      {
        test: /.(js|jsx|vue)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [ // 转码规则
                [ '@babel/preset-env', {
                  useBuiltIns: 'usage',
                  targets: {
                    browsers: [ '>1%', 'last 2 versions', 'not ie<=8' ],
                  },
                }],
              ],
              plugins: [ // 插件
                [ '@babel/plugin-transform-runtime', {
                  corejs: 2,
                }],
              ],
            },
          },
          'vue-loader',
        ],
      },
      {
        test: /\.(less|css)$/,
        use: [ // 从后往前执行
          // MiniCssExtractPlugin.loader,
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 引入样式也要走下面2个loader
              modules: true, // css模块化打包，css引入解耦
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                autoprefixer({
                  browsers: [ 'Android >= 4', 'iOS >= 7' ],
                }),
              ],
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(jpg|svg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'img/',
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
  plugins: [ // 最好按执行时间戳进行编排
    // new HtmlWebpackPlugin({
    //   filename: 'main.html',
    //   template: `${rootPath}/app/view/src/main.html`,
    // }),
    new VueLoaderPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    // }),
  ],
};
