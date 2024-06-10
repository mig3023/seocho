const obj = {
  values: [1, 2, 3, 4, 5],

  // [Symbol.iterator]() {
  //   // iterator를 반환한다.
  //   const self = this;
  //   return {
  //     currIdx: -1, // current cursor(index)
  //     next() {
  //       this.currIdx += 1;
  //       return {
  //         value: self.values[this.currIdx],
  //         done: this.currIdx >= self.values.length,
  //       };
  //     },
  //   };
  // },

  *[Symbol.iterator]() {
    for (const a of this.values) yield a;
  },

  iterator() {
    return this[Symbol.iterator]();
  },
};
console.log("🚀>>  obj:", obj.values);
