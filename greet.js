'use strict';

const greet = module.exports = function() {
  let name = process.argv[2] || 'friend';
  return 'Hello ' + name;
};
console.log(greet());
