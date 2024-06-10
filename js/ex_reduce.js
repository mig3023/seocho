const square = (n) => n ** 2;
const sqrt = (n) => Math.sqrt(n);
const cube = (n) => n ** 3;

const arr = [1, 2, 3, 4, 5];

const ret1 = arr
  .map((a) => a ** 2)
  .map((a) => Math.sqrt(a))
  .map((a) => a ** 3);

console.log("🚀 ~ ret1:", ret1);

const ret2 = arr.reduce((acc, v) => [...acc, cube(sqrt(square(v)))], []);
console.log("🚀 ~ ret2:", ret2);

const ret3 = [square, sqrt, cube].reduce((acc, f) => arr.map((v) => f(v)), arr);
console.log("🚀 ~ ret3:", ret3);

// range-sum
const ret5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  .filter((v, i) => i >= 2 && i <= 5)
  .reduce((acc, v) => acc + v, 0);
console.log("🚀 ~ ret5:", ret5);
