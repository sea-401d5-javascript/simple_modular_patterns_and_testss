'use strict';

exports.type = 'greet';

const greet = module.exports = function() {
  let name = 'Mars'
  return 'Hello ' + name;
};
