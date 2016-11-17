(function() {
  exports = module.exports = {};
  exports.greet = function(name) {
    return 'Hello ' + name;
  };

  if (!module.parent) {
    console.log(exports.greet(process.argv.slice(2)));
  };

})();
