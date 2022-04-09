const addToChunks = function (partitions, element, count, overlap) {
  const lastElement = partitions[partitions.length - 1];

  if (lastElement.length !== count) {
    partitions[partitions.length - 1].push(element);
    if (lastElement.length === count && overlap > 0) {
      const overlappingElements = lastElement.slice(-overlap);
      partitions.push(overlappingElements);
    }
    return partitions;
  }
  partitions.push([element]);
  return partitions;
};


const partitionBySize = function (numbers, count, overlap) {
  if (numbers.length === 0 || count === 0) {
    return [];
  }
  return numbers.reduce(
    function (partitions, element) {
      return addToChunks(partitions, element, count, overlap)
    }, [[]]);
};


console.log(partitionBySize([1, 2, 3, 4, 5], 2, 1));
console.log(partitionBySize([1, 2, 3, 4, 5], 2, 2));
console.log(partitionBySize([1, 2, 3, 4, 5], 3, 1));
console.log(partitionBySize([1, 2, 3, 4, 5], 3, 2));
console.log(partitionBySize([1, 2, 3, 4, 5], 3, 0));
