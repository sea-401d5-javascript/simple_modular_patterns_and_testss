module.exports = exports = {};

exports.greet = name => 'hello ' + name;

exports.greetMe = args => exports.greet(args[2]);
