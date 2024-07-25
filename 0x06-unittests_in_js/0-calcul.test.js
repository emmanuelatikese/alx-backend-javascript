const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('it should add two numbers', () => {
  it('should add two integers', () => {
    const a = 1;
    const b = 3;
    assert.strictEqual(calculateNumber(a, b), 4);
  });

  it('should round and add a whole number and a decimal', () => {
    const a = 1;
    const b = 3.7;
    assert.strictEqual(calculateNumber(a, b), 5);
  });

  it('should round and add two decimals', () => {
    const a = 1.2;
    const b = 3.7;
    assert.strictEqual(calculateNumber(a, b), 5);
  });

  it('should round up and add two decimals', () => {
    const a = 1.5;
    const b = 3.7;
    assert.strictEqual(calculateNumber(a, b), 6);
  });
});
