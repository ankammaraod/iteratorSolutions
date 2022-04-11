const sort = function (elements) {
  i = 0;
  for (let outer = 0; outer < elements.length; outer++) {
    for (let inner = outer + 1; inner < elements.length; inner++) {
      i++;
      if (elements[inner] < elements[outer]) {
        const smallest = elements[inner];
        elements[inner] = elements[outer];
        elements[outer] = smallest;
      }
    }
  }
  console.log(i);
  return elements;
};

console.log(sort([3, 4, 1, 2]));
console.log(sort([1, 2, 3, 4]));
console.log(sort([3, 4, 4, 2, 1]));