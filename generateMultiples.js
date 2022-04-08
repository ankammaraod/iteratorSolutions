//generateMultiples(5,10) => [5,10,....,50]

const generateArray = function (count) {
  const array = [];
  for (let index = 1; index <= count; index++) {
    array.push(index);
  }
  return array;
};

const multiplyWith = function (x) {
  return function (num) {
    return num * x;
  }
};

const generateRow = function (multiplier) {
  return function (multiple, index) {
    return multiplier + " * " + (index + 1) + " = " + multiple;
  }
};

const generateTable = function (multiplier, count) {
  const array = generateArray(count);

  const multiples = array.map(multiplyWith(multiplier));

  return multiples.map(generateRow(multiplier));
};

console.log(generateTable(5, 10));
console.log(generateTable(2, 10));
