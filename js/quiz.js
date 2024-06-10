//p.50
// 내 답
for (let i = 0.1; i < 1; i = i + 0.1) console.log(Number(i.toFixed(1)));
//강사님 답
for (let i = 0.1; i < 1; i = i + 0.1) console.log(+i.toFixed(1)); //number 대신 + 써도됨. 숫자로 인식함

//p.51
//내 답(무리수만 출력 못함)
for (let i = 1; i <= 10; i = i + 1)
  console.log(i, Number(Math.sqrt(i).toFixed(3)));

// 강사님 답(무리수만 출력!)
function p51() {
  for (let i = 1; i <= 10; i = i + 1) {
    const sq = +Math.sqrt(i).toFixed(3);
    if (sq % 1) console.log(i, sq);
  }
}
p51();

// p.52
// 1. switch문 사용
//내 답
const WEEK_NAMES = "일월화수목금토";
const today = new Date();
let dow = today.getDay();
switch (dow) {
  case 0:
    console.log("오늘은 일요일입니다.");
    break;
  case 1:
    console.log("오늘은 월요일입니다.");
    break;
  case 2:
    console.log("오늘은 화요일입니다.");
    break;
  case 3:
    console.log("오늘은 수요일입니다.");
    break;
  case 4:
    console.log("오늘은 목요일입니다.");
    break;
  case 5:
    console.log("오늘은 금요일입니다.");
    break;
  case 6:
    console.log("오늘은 토요일입니다.");
    break;
}
// 2. switch문 사용x
//내 답
// const WEEK_NAMES = "일월화수목금토";
// const today = new Date();
let d = WEEK_NAMES[today.getDay()];
console.log(`${"오늘은 "}${d}${"요일입니다."}`);

//강사님 답
// const WEEK_NAMES = '일월화수목금토';
function p52() {
  const day = new Date().getDay();
  // 간단한 방법
  console.log("🚀>>  day:", WEEK_NAMES[day]);
  let wname;
  switch (day) {
    case 0:
      wname = "일";
      break;
    case 1:
      wname = "월";
      break;
    case 2:
      wname = "화";
      break;
    case 3:
      wname = "수";
      break;
    case 4:
      wname = "목";
      break;
    case 5:
      wname = "금";
      break;
    case 6:
      wname = "토";
      break;
  }
  console.log(`오늘은 ${wname}요일입니다.`);
}
// p52();

// p.53
function addPoints(a, b) {}
console.log(0.21354 + 0.1);

// 내 답 (실패)
function addPoints(a, b) {
  return a + b;
}
console.log(addPoints(0.21354, 0.1));
console.log(addPoints(0.14, 0.28));
console.log(addPoints(0.34, 0.226));

//강사님 답
function getLen(s) {
  return (s ?? "").toString().length;
}
function addPoints(a, b) {
  // let len = getLen(a);
  // if (getLen(b) > len) len = getLen(b);

  // const aLen = getLen(a);
  // const bLen = getLen(b);
  // const len = aLen > bLen ? aLen : bLen;

  const len = Math.max(getLen(a), getLen(b));

  const ret = (a + b).toFixed(len - 2);
  console.log("🚀>>", ret);

  return +ret;
}
console.log(addPoints(0.21354, 0.1) === 0.31354);
console.log(addPoints(0.14, 0.28) === 0.42);
console.log(addPoints(0.34, 0.226) === 0.566);
