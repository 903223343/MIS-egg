'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532656413112_8161';

  // add your config here
  config.middleware = [ 'printDate', 'forbidip', 'auth' ];
  // 中间件传入参数
  config.printDate = {
    aaa: 'aaaaaa',
  };

  // 配置ejs模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };


  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'admin',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };


  // 配置公共的api

  config.api = 'http://www.phonegap100.com/';

  return config;
};
