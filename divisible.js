const divide = function (divisor) {
  return function (x) {
    return x / divisor;
  }
};
const divisibleWith = function (array, divisor) {
  const divisibleWithTwo = divide(divisor);
  return array.map(divisibleWithTwo);
};

const array = [1, 2, 3, 4, 5];
console.log(divisibleWith(array, 2));