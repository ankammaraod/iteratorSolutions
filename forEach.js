const log = console.log;
const even = function (x) { return x % 2 === 0; };

const forEach = function (elements, functionName) {
  for (let index = 0; index < elements.length; index++) {
    functionName(elements[index]);
  }
};

console.log(forEach([1, 2, 3, 4], log));
console.log(forEach([1, 2, 3, 4], even));