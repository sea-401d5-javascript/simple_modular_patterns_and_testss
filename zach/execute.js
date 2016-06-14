'use strict';

module.exports = exports = {};

var greeter = require("./lib/greet.js");
var somename = process.argv[2];
exports.somename = somename;

console.log(greeter.greet(somename));
