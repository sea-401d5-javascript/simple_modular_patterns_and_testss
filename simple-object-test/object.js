exports = module.exports = {};

exports.name = 'Coolman';
exports.job = 'Beertender';
exports.age = '25';
exports.greet = function (name){
  return 'hello ' + name;
};
///class review below
// 'use strict'
// const greet = module.exports = function() {
//   let name = "dave";
//   if(process.argv[2]) name = process.argv[2];
//
//   or
//
//   let name =process.argv[2] || 'Dave';
//
//   return 'Hi ' + name;
// };
// console.log(greet());
