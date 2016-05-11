const chai = require('chai');
const expect = chai.expect;
const greetModule = require(__dirname + '/../greet_module.js');

describe('greet test', () => {
  it('the greet function should return when BOB is passed in as an argument', () => {
    expect(greetModule.greet('bob')).to.eql('hello bob');
  });
});
