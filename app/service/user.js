'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserList() {
    const result = await this.app.mysql.query('select * from user');
    // const org = {
    //   code: 0,
    //   success: true,
    //   list: result,
    // };
    return result;
  }
}

module.exports = UserService;
