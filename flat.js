const isArray = Array.isArray;

const flat = function (elements) {
  let flattedElements = [];
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];

    const elementToBePushed = isArray(element) ? element : [element];
    flattedElements = flattedElements.concat(elementToBePushed);
  }
  return flattedElements;
};

console.log(flat([1, 2, 3, 4]));
console.log(flat([1, 2, 3, [4]]));
console.log(flat([1, 2, 3, [[4]]]));