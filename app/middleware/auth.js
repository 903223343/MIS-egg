'use strict';


module.exports = option => {

  return async function auth(ctx, next) {


    ctx.state.csrf = ctx.csrf;

    await next();
  };
};
