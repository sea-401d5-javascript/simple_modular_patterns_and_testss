const chai = require('chai');
const expect = chai.expect;
const dude = require('../object');

describe('Dude Tests', () => {
  it('His name should be Dudemang', () => {
    expect(dude.name).to.eql("Dudemang");
  })
  it('His job should be "Devvin\' it up"', () => {
    expect(dude.job).to.eql("Devvin' it up");
  })
  it('He should be hella old. Like 99', () => {
    expect(dude.age).to.be.at.least(98);
  })
  it('He should be chillin\'', () => {
    expect(dude.chill()).to.be.true;
  })
  it('He should have greeted a person', () => {
    expect(dude.greet()[0]).to.be.true;
  })
  it('He should have greeted a person by name', () => {
    var testGreeting = dude.greet('Jim');
    expect(testGreeting[1]).to.eql('Jim');
  })
})
