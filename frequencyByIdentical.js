const isArray = Array.isArray;

const isEqual = function (lhs, rhs) {
  const stack = [[lhs, rhs]];
  while (stack.length > 0) {
    const element = stack.pop();
    const bothElementsAreArrays = isArray(element[0]) && isArray(element[1]);
    if (!bothElementsAreArrays) {
      if (element[0] !== element[1]) {
        return false;
      }
    }
    const array1 = element[0];
    const array2 = element[1];
    if (array1.length !== array2.length) {
      return false;
    }
    for (let index = 0; index < array1.length; index++) {
      stack.push([array1[index], array2[index]]);
    }
  }
  return true;
};

const countByOccurrence = function (occurrenceGroup, element) {
  for (let index = 0; index < occurrenceGroup.length; index++) {
    if (isArray(occurrenceGroup[index]) && isEqual(occurrenceGroup[index][0], element)) {
      occurrenceGroup[index][1]++;
      return occurrenceGroup;
    }
  }
  occurrenceGroup.push([element, 1]);
  return occurrenceGroup;
}

const numbers = [1, 2, 3, 1];
const expected = [[1, 2], [2, 1], [3, 1]];

const actual = numbers.reduce(countByOccurrence, []);

console.log(actual, '==', expected);
console.log(isEqual(actual, expected));
