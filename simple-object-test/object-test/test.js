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
  it('should have greeted a person by name', ()=> {
    var testPerson = cool.greet('Dan');
    expect(testPerson).to.eql('hello Dan')
  })
})
//class review below

// const expect = require('chia').expect;
// const greet = require('../boject');
//
// describe('greet tests', () => {
//   it('should greet Dave by default', () => {
//     expect(greet()).to.eql('Hi Dave');
//   })
//   it('should greet from process', () => {
    // let backupProcess = process.argv;
//     process.argv = ['node', 'test_path', 'test'];
//     expect(greet()).to.eql('HI test');
    // process.argv = backupProcess;
//   })
// })
