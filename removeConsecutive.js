const isArray = function (content) {
  return Array.isArray(content);
};

const isEqual = function (content1, content2) {
  if (content1 === content2) {
    return true;
  }
  if (isArray(content1) && isArray(content2)) {
    return areArraysEqual(content1, content2);
  }
  return false;
};

const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (!isEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
};

const removeConsecutiveDuplicates = function (list, element) {
  if (!isEqual(element, list[list.length - 1])) {
    list.push(element);
  }
  return list;
};

console.log([1, [1, 2], [1, 2], 1, 2, 2, 3].reduce(removeConsecutiveDuplicates, []));
console.log([1, 1, 2, 2, 3].reduce(removeConsecutiveDuplicates, []));
console.log('hello'.split('').reduce(removeConsecutiveDuplicates, []).join(''));