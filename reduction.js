const reduction = function (reductionedElements, element) {
  if (reductionedElements.length === 0) {
    reductionedElements.push(element);
    return reductionedElements;
  }
  const lastElement = reductionedElements[reductionedElements.length - 1];
  reductionedElements.push(lastElement + element);
  return reductionedElements;
};

console.log([1, 2, 3, 4].reduce(reduction, []));