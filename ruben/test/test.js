'use strict'
const expect = require('chai').expect;
const greet = require('../name');

describe('Assignment test', () => {
  it('should have the correct name', () => {
    expect(greet()).to.eql('HI Ruben')
  });
})
