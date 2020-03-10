//Singleton as object created with literal
// const instance1 = {
//   name: "singleton",
// };

// const instance2 = {
//   name: "singleton",
// };

// console.log(instance1 === instance2);
// console.log({} === {});
/////////////////////////////////////////////////////////

// global variable with module
// let instance;
// class Counter {
//   constructor() {
//     if(!instance) instance = this;
//     instance.count = 0;
//     return instance;
//   }

//   getCount() {
//     return instance.count;
//   }

//   increaseCount() {
//     return instance.count++;
//   }
// };

// const myCount1 = new Counter();
// const myCount2 = new Counter();

// myCount1.increaseCount();
// myCount1.increaseCount();
// myCount2.increaseCount();
// myCount2.increaseCount();

// console.log(myCount2.getCount()); // 4
// console.log(myCount1.getCount()); // 4
/////////////////////////////////////////////////////////

// singleton inside class
// class Counter {
//   constructor() {
//     if(typeof Counter.instance === 'object') {
//       return Counter.instance;
//     }
//     this.count = 0;
//     Counter.instance = this;
//     return this;
//   }

//   getCount() {
//     return this.count;
//   }

//   increaseCount() {
//     return this.count++;
//   }
// }

// const myCount1 = new Counter();
// const myCount2 = new Counter();

// myCount1.increaseCount();
// myCount1.increaseCount();
// myCount2.increaseCount();
// myCount2.increaseCount();

// console.log(myCount2.getCount()); // 4
// console.log(myCount1.getCount()); // 4


class Counter {
constructor() {
  if(typeof Counter.instance === 'object') {
    return Counter.instance;
  }
  this.count = 0;
  Counter.instance = this;
  return this;
}

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount2); // 4
console.log(myCount1.getCount()); // 4
