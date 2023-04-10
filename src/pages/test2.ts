// const name = 'dom';
// function double(n: number) {
//   return n * 2;
// }

// export { name, double };

//import {name,double} from ''
//import * as Util from ''

// export default function () {
//   let fn = () => {
//     console.log('aabb杀杀杀aba');
//   };
//   fn();
// }

//import ddd from ..

// const aa = () => 100;

// export default () => 100;

let obj = {
  name: '下坡美国',
  age: 23,

  sayName: () => {
    console.log(`this is${{ name }}`);
  },
  sayName2() {
    console.log(`this is ${this.name}`);
    console.log('this');
  },
};

const a = () => {
  let aba = {
    name: '按不出',
    sex: 23,
    address: '谁知道爱的色放了就爱上了对方',
  };

  let { sex, address } = aba;

  console.log(address);

  console.log('a');
};

export default a;
