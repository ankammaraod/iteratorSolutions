const reduce = function (array, reducer, context) {
  let index = 0;

  if (context === undefined) {
    context = array[index];
    index++;
  }

  for (; index < array.length; index++) {
    context = reducer(context, array[index]);
  }
  return context;
};

const min = function (x, y) {
  return Math.min(x, y);
};

const add = function (x, y) {
  return y + x;
};

const numbers = [1, 2, 3, 4, 5, -10];
const string = ['h', 'e', 'l', 'l', 'o'];

console.log(reduce(numbers, min, -11));
console.log(reduce(numbers, min));
console.log(reduce(string, add));