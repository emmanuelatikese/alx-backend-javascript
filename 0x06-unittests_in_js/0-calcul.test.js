const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should add two integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and add a whole number and a decimal', () => {
    assert.strictEqual(calculateNumber(3.7, 1), 5);
  });

  it('should round and add two decimals', () => {
    assert.strictEqual(calculateNumber(3.7, 1.2), 5);
  });

  it('should round up and add two decimals', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
