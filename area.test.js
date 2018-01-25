const getArea = require('./area.js');

var arrayTest = [2,3];
test('area right parameters', () => {
  expect(getArea(arrayTest)).toBe(6);
});

var arrayTest2 = [-1,-1];
test('negative parameters', () => {
  expect(getArea(arrayTest2)).toBe(-1);
});

var arrayTest3 = [0,1];
test('test zero right case', () => {
  expect(getArea(arrayTest3)).toBe(0);
});

var arrayTest4 = [0,-11];
test('test zero not valid case', () => {
  expect(getArea(arrayTest4)).toBe(-1);
});

var arrayTestNotNumber = [2,"a"];
test('error one number one string into array', () => {
  expect(getArea(arrayTestNotNumber)).toBe(-1);
});

var arrayTestNotNumber2 = ["a","a"];
test('error not a number array element', () => {
  expect(getArea(arrayTestNotNumber2)).toBe(-1);
});


test('error not array and different number of parameters', () => {
  expect(getArea("a", "b")).toBe(-1);
});
