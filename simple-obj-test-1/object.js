exports = module.exports = {}

exports.name = 'Dudemang';

exports.job = 'Devvin\' it up';

exports.age = 99;

exports.chill = function() {
  var cool = true;
  console.log('I don\'t even give a fudge, mang.');
  return cool;
};

exports.greet = function(name) {
  var greeted = true;
  console.log('hello ' + name);
  return [greeted, name];
};
