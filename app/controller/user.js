'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    await this.ctx.render('user');
  }
  async getUserList() {
    const userlist = await this.service.user.getUserList();
    this.ctx.body = userlist;

  }
}

module.exports = UserController;
