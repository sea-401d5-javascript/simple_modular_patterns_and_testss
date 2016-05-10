const chai = require('chai');
const expect = chai.expect;
const cool = require('../object');

describe('Object test', () => {
  it('should have the name Coolman', ()=> {
    expect(cool.name).to.eql('Coolman');
  })
  it('should have the job Beertender', () => {
    expect(cool.job).to.eql('Beertender');
  })
  it('should have the age of 25', ()=> {
    expect(cool.age).to.be.at.least(24);
  })
  it('should be greet', ()=> {
    expect(cool.greet()[0]).to.eql(true);
  })
  it('should have greeted a person by name', ()=> {
    var testPerson = cool.greet('Dan');
    expect(testPerson[1]).to.eql('Dan')
  })
})
