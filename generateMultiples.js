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
    return (num) * x;
  }
};

// const generateRow = function (multiplier, multiples) {
// const table = [];
// for (let index = 1; index <= multiples.length; index++)
// table.push(multiplier + "*" + index + "=" + multiples[index - 1]);
// return table;
// };

const generateRow = function (multiplier) {
  return function (multiple, index) {
    return multiplier + "*" + (index + 1) + "=" + multiple;
  }
};

const generateMultiple = function (multiplier, count) {
  const array = generateArray(count);

  const multiplyWithFive = multiplyWith(multiplier);
  const multiples = array.map(multiplyWithFive);

  const generateTable = generateRow(multiplier);
  return multiples.map(generateTable);
};

console.log(generateMultiple(5, 10));
