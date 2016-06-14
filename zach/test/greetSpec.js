//tester
var expect = require("chai").expect;
var greeter = require("../lib/greet.js")
var execute = require("../execute.js")

describe("Greeter", function(){
  it("should return 'hello' + name", function(){
    var results = greeter.greet("example name");
    var expected = "hello example name";

    expect(results).to.deep.equal(expected);
  });
  it("should take the name inputted", function(){
    var results = execute.somename;
    var expected = process.argv[2];

    expect(results).to.deep.equal(expected);
  })
})
