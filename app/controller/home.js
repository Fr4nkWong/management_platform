'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const Vue = require('vue');
const VueSSR = require('vue-server-renderer');

const appRoot = path.resolve(__dirname, '../');

class HomeController extends Controller {
  /*
    # 1.判断输入的url；2.判断是否存在登陆态；3.判断渲染方式
  */
  async index() {
    const { ctx, config } = this;
    if (config.renderType === 1) {
      this.serverRender();
    } else {
      this.clientRender();
    }
  }

  async serverRender() {
    // const renderer = VueSSR.createRenderer({
    //   template: fs.readFileSync(`${__dirname}/../public/dist/main.html`, {
    //     encoding: 'utf-8',
    //   }),
    // });
    // renderer.renderToString(app, (err, html) => {
    //   console.log(html);
    // });
  }

  async clientRender() {
    const { ctx } = this;
    const html = fs.readFileSync(`${appRoot}/public/dist/index.html`, {
      encoding: 'utf-8',
    });
    ctx.body = html;
  }
}

module.exports = HomeController;
