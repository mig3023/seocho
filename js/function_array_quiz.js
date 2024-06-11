// p.130 함수를 한번만 실행하게 하는 once 함수를 작성하시오.

// p.132 어떤 함수를 호출하기 전에 before() 함수를, 호출 후에 after() 함수를 항상 실행하는 template() 함수를 만드시오.
// const before = () => console.log('before....');
// const after = () => console.log('after...');

// const someFn = () => console.log('do something...1');

// const template = // 코드를 완성하세요.

// const temp = template(someFn);

// temp();

// p.133 다음과 같은 결과가 출력되도록 이전 장에서 작성한 코드를 수정하세요.

// p.145 다음을 수행하시오.
const arr2 = [1, 2, 3, 4, 5];
const ex1 = arr2.slice(1, 3);
console.log("🚀 ~ ex1:", ex1);

const ex2 = arr2.slice(2);
console.log("🚀 ~ ex2:", ex2);

const ex3 = arr2.splice(1, 3);
console.log("🚀 ~ arr2:", arr2);

const ex4 = arr2.splice(1, 0, 2, 3, 4);
console.log("🚀 ~ arr2:", arr2);

const ex5 = arr2.splice(2);
console.log("🚀 ~ arr2:", arr2);

const ex6 = arr2.splice(2, 0, 3, 4, 5);
console.log("🚀 ~ arr2:", arr2);

// const ex7 = arr2.splice(2, 1, "x", "y", "z");
// console.log("🚀 ~ arr2:", arr2);

const ex8_1 = arr2.slice(0, 2);
const ex8_2 = arr2.slice(3, 5);
console.log([...ex8_1, ..."xyz", ...ex8_2]);

console.log("-------------------------");
// p.147 다음과 같은 push, pop, shift, unshift를 순수함수로 작성하시오. (shift 보류)
// const assert = require("assert");
import assert from "assert"; //ES6 문법으로 변경
// const { clearScreenDown } = require("readline");
const arr = [1, 2, 3, 4];

function push(arr, ...args) {
  return [...arr, ...args];
}
console.log(push(arr, 5, 6));
assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);

function pop(arr) {
  return [...arr].pop();
}
console.log(pop(arr));
assert.deepStrictEqual(pop(arr), 4);

function pop2(arr, x) {
  return [...arr].splice(x);
}
console.log(pop2(arr, 2));
assert.deepStrictEqual(pop2(arr, 2), [3, 4]);

function unshift(arr, ...args) {
  return [...args, ...arr];
}
console.log(unshift(arr, 0));
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);

function unshift2(arr, ...args) {
  return [...args, ...arr];
}
console.log(unshift2(arr, 7, 8));
assert.deepStrictEqual(unshift2(arr, 7, 8), [7, 8, 1, 2, 3, 4]);

console.log("-------------------------");
// p.148 다음과 같은 deleteArray와 deleteObjectArray를 순수함수로 작성하시오.(실패)
let arr3 = [1, 2, 3, 4];

function deleteArray(arr3, ...args) {
  return [...arr3].splice(...args);
}
console.log(">>>>>>>", deleteArray(arr3, 2));
console.log(arr3);
// assert.deepStrictEqual(deleteArray(arr3, 2), [1, 2]);

function deleteArray2(arr3, x, y) {
  return [...arr3].slice(x, y);
}
console.log(deleteArray2(arr3, 1, 3));
// assert.deepStrictEqual(deleteArray2(arr3, 1, 3), [1, 4]);

assert.deepStrictEqual(arr3, [1, 2, 3, 4]);

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
var users = [Hong, Kim, Lee];

console.log("-------------------------");
// 배열의 각 원소를 String으로 변환하시오.

// p.155
// 1) 배열의 각 원소를 String으로 변환하시오.
const arr4 = [1, 2, 3, true];
const ret1 = arr4.map((x) => x.toString());
console.log("🚀 ~ ret1:", ret1);
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);

// p.156
//다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오.
const arr5 = [1, 2, 3, 4, 5];
const ret5 = arr5
  .map((a) => a ** 2)
  .map((a) => Math.sqrt(a))
  .map((a) => a ** 3);
console.log("🚀 ~ ret5:", ret5);

// p.157
//다음과 같은 정수 배열이 주어졌을 때 구간의 합을 구하는 rangeSum 함수를 작성하시오.
const arr6 = [1, 3, 4, 2, 5, 8, 6, 7, 9];

console.log("-------------------------");
// 6.3 실습
const classNames = (...args) => args.filter((a) => !!a.trim()).join(" ");
const ret2 = classNames("", "a b c", "d", "", "e");
console.log("🚀 ~ ret2:", ret2);
assert.strictEqual(ret2, "a b c d e");

function classNames2(...args) {
  return args
    .join(" ")
    .split(" ")
    .filter((a) => !!a)
    .join(" ");
}
const ret3 = classNames2("", "a b  c ", " d", "", " e");
console.log("🚀 ~ ret3:", ret3);
