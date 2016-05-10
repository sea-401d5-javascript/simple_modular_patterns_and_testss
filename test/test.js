const chai = require('chai');
const expect = chai.expect;
const hello = require('../greet.js');

describe('Greet Tests', () => {
  it ('should say my name', () => {
    var name = 'Maddie'
    expect(hello.greet(name)).to.eql('Hello Maddie');
  });
});
