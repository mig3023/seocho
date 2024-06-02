globalThis.name = "GLOBAL";
this.name = "MODULE";

const obj = {
  name: "OBJ",
  f1: function () {
    console.log("f1=", this.name);
  },
  f2: () => {
    console.log("f2=", this.name);
  },
  f3() {
    // method
    console.log("f3=", this.name);
  },
};

obj.f1();
obj.f2();
obj.f3();
const nm = obj.name;
console.log("-----------------", nm);

const f11 = obj.f1;
const f22 = obj.f2; // arrow function
const f33 = obj.f3;
obj = null;
f11();
f22();
f33();
