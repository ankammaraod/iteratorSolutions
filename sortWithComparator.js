const ascending = function (a, b) {
  return a - b;
};

const descending = function (a, b) {
  return b - a;
};

const sort = function (elements, comparator) {
  for (let outer = 0; outer < elements.length; outer++) {
    for (let inner = outer + 1; inner < elements.length; inner++) {
      if (comparator(elements[inner], elements[outer]) < 0) {
        const elementToMove = elements[inner];
        elements[inner] = elements[outer];
        elements[outer] = elementToMove;
      }
    }
  }
  return elements;
};

console.log(sort([3, 4, 1, 2], ascending));
console.log(sort([3, 4, 1, 2], descending));
console.log(sort([3, 4, 5, 2, 1], ascending));
console.log(sort([3, 4, 5, 2, 1], descending));