const chai = require ('chai');
const expect = chai.expect;
const greet = require('../greet');

describe('greet test', () => {
  it('should return "hello " + name as a greeting', () => {
    var testName = 'Dave';
    var result = greet.hello(testName);
    expect(result).to.eql('Hello Dave')
  });
});
