//generateMultiples(5,10) => [5,10,....,50]

const generateArray = function (count) {
  const array = [];
  for (let index = 1; index <= count; index++) {
    array.push(index);
  }
  return array;
};

const multiplyWithFive = function (x) {
  return x * 5;
}

const multiplyWith = function (x) {
  return function (num, index) {
    return (index + 1) * x;
  }
}

const generateMultiple = function (multiplier, count) {
  const multiplyWithFive = multiplyWith(multiplier);
  const multiples = generateArray(count);
  return multiples.map(multiplyWithFive);
};

console.log(generateMultiple(5, 10));
