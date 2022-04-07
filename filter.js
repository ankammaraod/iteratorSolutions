const filter = function (array, predicate) {
  const filteredArray = [];
  for (let index = 0; index < array.length; index++) {
    if (predicate(array[index])) {
      filteredArray.push(array[index]);
    }
  }
  return filteredArray;
};

const names = ['ankamma', 'nitin', 'prajakta'];

const isLengthOdd = function (x) {
  return x.length % 2 !== 0;
};

const isEndsWithA = function (x) {
  return x.endsWith('a');
};

console.log(filter(names, isLengthOdd));
console.log(filter(names, isEndsWithA));
