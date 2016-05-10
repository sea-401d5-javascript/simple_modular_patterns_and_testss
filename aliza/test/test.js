const chai = require('chai');
const expect = chai.expect;
const hello = require('../greet');

describe('greeting name test ', () => {
  it('should greet my name ', () => {
    var name = 'Aliza'
    expect(hello.greet(name)).to.eql('Hello Aliza');
  })
});
