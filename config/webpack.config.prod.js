'use strict';

const baseWebpackConfig = require('./webpack.config.base.js');

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  ...baseWebpackConfig,
};
