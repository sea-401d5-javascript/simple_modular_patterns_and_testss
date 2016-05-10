exports = module.exports = {};

exports.name = 'Coolman';
exports.job = 'Beertender';
exports.age = '25';
exports.greet = function (name){
  var hello = true;
  console.log('Hello' + name);
  return [hello, name];
};
