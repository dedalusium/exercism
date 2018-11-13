export default function solve(x, y) {
  let res = null;
  const length = Math.sqrt(x ** 2 + y ** 2);
  if (length <= 1) {
    res = 10;
  } else if (length <= 5) {
    res = 5;
  } else if (length <= 10) {
    res = 1;
  } else if (length > 10) {
    res = 0;
  }
  return res;
}
