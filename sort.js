const sort = function (elements) {
  for (let inner = 0; inner < elements.length; inner++) {
    for (let outer = inner; outer < elements.length; outer++) {
      if (elements[outer] < elements[inner]) {
        const smallest = elements[outer];
        elements[outer] = elements[inner];
        elements[inner] = smallest;
      }
    }
  }
  return elements;
};

console.log(sort([3, 4, 1, 2]));
console.log(sort([3, 4, 4, 2, 1]));