'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // this.ctx.body = '首页';
    /*
        1.名称
        2.value
        3.配置
    */
    this.ctx.cookies.set('username', 'zhangsan', {
      maxAge: 1000 * 3600 * 24,
      httpOnly: true,
      // signed: true, // 签名防止修改
      encrypt: true, // 加密
    });


    // 调用extend里面扩展的controller
    // 当用户访问页面时生成一个密钥
    await this.ctx.render('home');


  }

  async add() {
    // this.ctx.body = '首页';

    console.log(11111111, this.ctx.request.body);

    // 接收表单传值
    await this.ctx.render('home');


  }
}

module.exports = HomeController;
