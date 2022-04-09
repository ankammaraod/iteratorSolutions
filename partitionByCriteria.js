const isEven = function (x) {
  return x % 2 === 0;
};

const addToChunks = function (partitions, element, criteria) {
  const lastChunk = partitions[partitions.length - 1];
  const areEqual = criteria(lastChunk[0]) === criteria(element);
  if (areEqual) {
    lastChunk.push(element);
    return partitions;
  }
  partitions.push([element]);
  return partitions;
};

const partitionBy = function (numbers, criteria) {
  if (numbers.length === 0) {
    return [];
  }
  return numbers.reduce(
    function (partitions, element) {
      return addToChunks(partitions, element, criteria)
    }, [[]]);
};

console.log(partitionBy([1, 2, 3, 4, 5], isEven));
console.log(partitionBy([1, 2, 2, 4, 5], isEven));
console.log(partitionBy([1, 2, 2, 7, 5], isEven));
console.log(partitionBy([1, 1, 2, 4, 5], isEven));