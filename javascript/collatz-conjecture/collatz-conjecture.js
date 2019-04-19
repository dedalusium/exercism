export const steps = number => {
  if (number <= 0) {
    throw new Error('Only positive numbers are allowed');
  }
  let count = 0;
  let next;
  if (number !== 1) {
    if (isEven(number)) {
      next = computeEven(number);
    } else {
      next = computeOdd(number);
    }
    count = steps(next) + 1;
  }
  return count;
};

const computeEven = even => even / 2;

const computeOdd = odd => odd * 3 + 1;

const isEven = number => number % 2 === 0;
