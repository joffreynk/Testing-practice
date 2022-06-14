const reverse = require('./task2.js');

test('reverse the string hello', () => {
  const hello = 'olleh';
  expect(reverse('hello')).toBe(hello)
})

test('reverse the string racecar', () => {
  const racecar = 'racecar';
  expect(reverse('racecar')).toBe(racecar);
})