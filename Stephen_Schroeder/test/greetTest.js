const expect = require('chai').expect;
const greeting = require(__dirname + '/../lib/greeting');
const greet = greeting.greet;
const greetMe = greeting.greetMe;

describe('It\'s a greet function', () => {
  it('should log greeting', () => {
    expect(greet('larry')).to.equal('hello larry');
  });
});
