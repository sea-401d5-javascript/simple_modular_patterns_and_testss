const chai = require('chai');
const expect = chai.expect;
const friend = require('../your_new_friend')
const greeter = require('../greet')


describe('Testing your new friend', () => {
  it('Your friend uses your name', () => {
    var testname = 'testname'
    expect(friend.greet(testname)).to.eql('Hello ' + testname);
  })
  it('Your friend does not know your name', () => {
    expect(friend.greet()).to.eql('Hello buddy');
  })
})
