const sort = function (elements) {
  for (let outer = 0; outer < elements.length; outer++) {
    for (let inner = outer + 1; inner < elements.length; inner++) {
      if (elements[inner] < elements[outer]) {
        const smallest = elements[inner];
        elements[inner] = elements[outer];
        elements[outer] = smallest;
      }
    }
  }
  return elements;
};

console.log(sort([3, 4, 1, 2]));
console.log(sort([3, 4, 5, 2, 1]));