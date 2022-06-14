const capitalize = require('./task4.js');

test('capitalizse string', () => {
  const capitalized = 'Hello Testing With Jest';
  expect(capitalize('hello testing with jest')).toBe(capitalized);
})