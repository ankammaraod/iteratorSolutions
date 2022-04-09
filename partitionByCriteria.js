const isEven = function (x) {
  return x % 2 === 0;
};

const addToChunks = function (partitions, element, predicate) {
  const lastElement = partitions[partitions.length - 1];
  const areEqual = predicate(lastElement[0]) === predicate(element);
  if (areEqual) {
    lastElement.push(element);
    return partitions;
  }
  partitions.push([element]);
  return partitions;
};

const partitionBy = function (numbers, predicate) {
  if (numbers.length === 0) {
    return [];
  }
  return numbers.reduce(
    function (partitions, element) {
      return addToChunks(partitions, element, predicate)
    }, [[]]);
};

console.log(partitionBy([1, 2, 3, 4, 5], isEven));
console.log(partitionBy([1, 2, 2, 4, 5], isEven));
console.log(partitionBy([1, 2, 2, 7, 5], isEven));
console.log(partitionBy([1, 1, 2, 4, 5], isEven));