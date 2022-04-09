const fibonacciGenerator = function () {
  let previous = 0;
  let current = 1;
  return function () {
    next = previous;
    previous = current;
    current = previous + next;
    return next;
  };
};

const generateFibonacciSeries = function (count) {
  const elements = Array(count).fill(0);
  const fibonacciStarter = fibonacciGenerator();
  return elements.map(fibonacciStarter);
};

console.log(generateFibonacciSeries(10));
