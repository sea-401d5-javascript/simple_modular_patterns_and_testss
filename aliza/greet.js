exports = module.exports = {};

exports.greet = function(name) {
  if (name){
    return 'Hello ' + name;
  } else{
    return 'Hello there!';
  }
};
