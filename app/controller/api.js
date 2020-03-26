'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async login() {
    
  }
  async relay() { // 转发消息

  }
}

module.exports = ApiController;
