'use strict';

const sd = require('silly-datetime');

module.exports = {
  formatTime(param) {
    // 格式化日期
    return sd.format(param * 1000, 'YYYY-MM-DD HH:mm');

  },
  getHelperData() {
    return '我是helper里的数据';
  },
};

