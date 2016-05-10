const chai = require('chai');
const expect = chai.expect;
const greet = require(__dirname + '/../greet')

describe('greet test', () => {
  it('should ask for your name and say hello', () => {
    expect(greet.greeting()).to.eql('Hello ' + name);
  });
  it('should be a greet', () => {
    expect(greet.type).to.eql('greet');
  });
});
