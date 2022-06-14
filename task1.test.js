const stringLength = require('./task1.js');

test('test count', () => {
  const count = {j:1, o:1, f:2, r:1, e:1, y:1}
  expect(stringLength('joffrey')).toEqual(count)
})