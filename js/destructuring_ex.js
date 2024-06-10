//p. 65
//강사님 답
function f0(user) {
  console.log(user.id, user.name);
}

function f1_1({ id, name }) {
  console.log(id, name);
}

const f1_2 = function ({ id, name }) {
  console.log(id, name);
};

const f1 = ({ id, name }) => console.log(id, name);

const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };
f1(user);
f1(hong);
f1(lee);

//p. 66
// 내 답
const { passwd, ...userInfo } = user;
console.log(userInfo);
//강사님 답
function p66(user) {
  const { passwd, ...userInfo } = user;
  console.log("🚀>>  userInfo:", userInfo);
}
p66(user);

//p. 67
//내 답
const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
console.log(id1, id2, id3);
//강사님 답
function p67() {
  const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];

  // const [[id1], [id2, id3]] = arr;
  const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
  console.log(id1, id2, id3);
}
p67();
