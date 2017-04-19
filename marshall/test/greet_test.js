const expect = require('chai').expect;
const greet = require(__dirname + '/../greet')

describe('greet test', () => {
  it('should ask for your name and say hello', () => {
    expect(greet()).to.eql('Hello Mars');
  });
  it('should be a greet', () => {
    expect(greet.type).to.eql('greet');
  });
});
