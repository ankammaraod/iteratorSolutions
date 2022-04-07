const map = function (array, mapper) {
  const mappedArray = [];
  for (let index = 0; index < array.length; index++) {
    mappedArray.push(mapper(array[index]));
  }
  return mappedArray;
};

const square = function (x) {
  return x * x;
};

const addTwo = function (x) {
  return x + 2;
};

const numbers = [1, 2, 3, 4, 5];

console.log(map(numbers, square));
console.log(map(numbers, addTwo));