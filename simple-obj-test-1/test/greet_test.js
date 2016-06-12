'use strict';

const expect = require('chai').expect;
const greet = require('../greet');

describe('greet tests', () => {
  it('should greet "gorgeous" by default', () => {
    expect(greet()).to.eql('Hello gorgeous');
  });
  it('should greet from process', () => {
    let backupProcess = process.argv; //backup the original meaning of process.argv
    process.argv = ['node', 'test_path', 'test'];
    expect(greet()).to.eql('Hello test');
    process.argv = backupProcess; //reset process.argv to its original meaning so other tests are not fucked up.
  });
});
