'use strict';

//====LONG VERSION====//
// const greet = module.exports = function(){
//   let name = 'gorgeous';
//   if(process.argv[2]) name = process.argv[2];
//   return 'Hello ' + name;
// };
//
// console.log(greet());

//====SHORT VERSION====//
const greet = module.exports = function(){
  return `Hello ${process.argv[2] || 'gorgeous'}`;
};

console.log(greet());
