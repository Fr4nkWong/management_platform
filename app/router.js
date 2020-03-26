'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('*', controller.home.index);
  router.post('/login', controller.api.login);
  router.post('/api', controller.api.index);
};
