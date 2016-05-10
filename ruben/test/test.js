const chai = require('chai');
const expect = chai.expect;
const Ruben = require('../myName');
const myObject = require('../name');

describe('Assignment test', () => {
  it('should have the correct name', () => {
    expect(myObject.greet('Ruben')).to.eql('Hello Ruben')
  });
})
