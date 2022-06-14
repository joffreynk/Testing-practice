const {add, substruct, multiply, devide} = require('./task3.js');

describe('calculate with the calculator class', () => {
  test('add ', () => {
    expect(add(7,7)).toBe(14);
  })
  test('substruct ', () => {
    expect(substruct(7,7)).toBe(0);
  })
  test('multiply ', () => {
    expect(multiply(7,7)).toBe(49);
  })
  test('devide ', () => {
    expect(devide(7,7)).toBe(1);
  })
})