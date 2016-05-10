const chai = require('chai');
const expect = chai.expect;
const hello = require('../greet');

describe('greeting name test ', () => {
  it('should greet my name ', () => {
    expect(hello.greet('Aliza')).to.eql('Hello Aliza');
  })
  it('should greet no name ', () => {
    expect(hello.greet()).to.eql('Hello there!');
  })
});
