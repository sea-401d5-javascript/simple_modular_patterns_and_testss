'use strict';

const expect = require('chai').expect;
const greet = require('../greet.js');

describe('Greeting test', () => {
  it('should return a greeting with friend if no argument given', function() {
    expect(greet()).to.eql('Hello friend');
  });
});

describe('Greeting test via command line utility', function() {
  it('should return a greeting with the name passed in the command line', function() {
    process.argv = ['node', 'Users/Stefanie/cf/401/class-01/stefanie-hansen/greet.js', 'Stefanie'];
    expect(greet(process.argv[2])).to.eql('Hello Stefanie');
  });
});
