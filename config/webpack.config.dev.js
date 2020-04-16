'use strict';

const baseWebpackConfig = require('./webpack.config.base.js');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  ...baseWebpackConfig,
};
