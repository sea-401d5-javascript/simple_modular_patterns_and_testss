
const greetfn = function(name){
  return "Hello " + (name || "World");
};
// module.exports = function(name){
//   return "Hello " + (name || "World");
// };

module.exports = greetfn;
