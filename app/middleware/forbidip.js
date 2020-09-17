'use strict';
module.exports = options => {
  return async function forbidip(ctx, next) {
    const forbidip = '127.0.0.11';

    if (ctx.request.ip === forbidip) {
      ctx.status = 403;
      ctx.body = '<h1>您的请求被屏蔽了</h1>';
    } else {
      await next();
    }

  };
};
