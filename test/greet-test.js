const chai = require('chai');
const expect = chai.expect;
const greeting = require('../greet.js');

describe('Greeting test', () => {
  it('should return a greeting with the name passed', () => {
    expect(greeting.greet('Stefanie')).to.eql('Hello Stefanie');
  })
})

describe('Greeting test via command line utility', () => {
  it('should return a greeting with the name passed in the command line', () => {
    process.argv = ['node', 'Users/Stefanie/cf/401/class-01/stefanie-hansen/greet.js', 'Stefanie'];
    expect(greeting.greet(process.argv.slice(2))).to.eql('Hello Stefanie');
  })
})
