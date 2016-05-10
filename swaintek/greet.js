exports = module.exports = {};

exports.hello = function (name) {
  return ('Hello ' + name);
};

if (process.argv[2] != 'undefined') {
  console.log('Hello ' + process.argv[2]);
};
