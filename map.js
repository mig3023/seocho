// ex) [1, 2, 1, 2, 3, 5] 중복하세요.
const arr = [1, 2, 1, 2, 3, 5];
const s3 = new Set(arr);
console.log("🚀>>  s3:", s3);
// const ret = s3.values(); // iterator
const ret = [...s3];
console.log("🚀>>  ret:", ret);

console.log("정답>>", [...new Set(arr)]);
