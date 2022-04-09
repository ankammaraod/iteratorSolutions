const isEven = function (number) {
  return number % 2 === 0;
};

const every = function (elements, predicate) {
  for (let index = 0; index < elements.length; index++) {
    if (!predicate(elements[index])) {
      return false;
    }
  }
  return true;
};

console.log(every([1, 2, 3, 4], isEven));
console.log(every([1, 7, 3, 5], isEven));
console.log(every([2, 4, 6, 8], isEven));
