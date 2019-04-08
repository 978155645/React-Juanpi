var faker = require('faker');
var Mock = require('mockjs');
var _ = require('lodash');

module.exports = function() {
  return {
    product: _.times(100, function(n) {
      return {
        id: n,
        title: Mock.Random.ctitle(),
        img: Mock.Random.image('200x100', Mock.Random.color()),
        text: Mock.Random.cparagraph(),
        time: Mock.Random.date('yyyy-MM-dd'),
        price: Mock.mock({
          'number|1-100': 100
        })
      };
    })
  };
};
