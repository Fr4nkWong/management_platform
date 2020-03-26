/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1582552957134_8805';

  // add your middleware config here
  config.middleware = [
    'robot',
  ];

  // add your user config here
  const userConfig = {
    renderType: 'csr' // 渲染方式
  };

  return {
    ...config,
    ...userConfig,
  };
};
