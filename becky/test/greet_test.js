const chai = require('chai');
const expect = chai.expect;
const ourModule = require(__dirname + '/../greet');
console.log(__dirname);
console.log(ourModule('becky'));


describe('first test ',() => {
  it("should greet becky", ()=> {
    expect(ourModule('becky')).to.eql("Hello becky")
  })

});
