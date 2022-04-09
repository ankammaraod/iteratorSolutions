const addToChunks = function (partitions, element, count) {
  const lastElementLength = partitions[partitions.length - 1].length;

  if (lastElementLength !== count) {
    partitions[partitions.length - 1].push(element);
    return partitions;
  }
  partitions.push([element]);
  return partitions;
};


const partitionBySize = function (numbers, count) {
  if (numbers.length === 0 || count === 0) {
    return [];
  }
  return numbers.reduce(
    function (partitions, element) {
      return addToChunks(partitions, element, count)
    }, [[]]);
};

console.log(partitionBySize([1, 2, 3, 4, 5], 0));
console.log(partitionBySize([1, 2, 3, 4, 5], 1));
console.log(partitionBySize([1, 2, 3, 4, 5], 2));
console.log(partitionBySize([1, 2, 3, 4, 5], 3));
console.log(partitionBySize([1, 2, 3, 4, 5], 4));
console.log(partitionBySize([1, 2, 3, 4, 5], 5));
console.log(partitionBySize([1, 2, 3, 4, 5], 6));