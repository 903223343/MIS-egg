
'use strict';
module.exports = options => {
  console.log(options);
  return async function getPrintDate(ctx, next) {
    await next();
  };

};
