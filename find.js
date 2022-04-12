const isEven = function (x) {
  return x % 2 === 0;
};

const log = console.log;

const yes = function () { return true; };

const find = function (elements, predicate) {
  for (let index = 0; index < elements.length; index++) {
    if (predicate(elements[index])) {
      return elements[index];
    }
  }
};

console.log(find([1, 2, 3, 4, 5], isEven));
console.log(find([1, 2, 3, 4, 5], log));
console.log(find([1, 2, 3, 4, 5], yes));