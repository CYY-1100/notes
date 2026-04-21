### 1. 根据下面 _ES6_ 构造函数的书写方式，要求写出 _ES5_ 的

```js
class Example {
  constructor(name) {
    this.name = name;
  }
  init() {
    const fun = () => {
      console.log(this.name);
    };
    fun();
  }
}
const e = new Example("Hello");
e.init();
```

### 3. 描述下列代码的执行结果

```js
foo(typeof a);
function foo(p) {
  console.log(this);
  console.log(p);
  console.log(typeof b);
  let b = 0;
}
```

### 4. 描述下列代码的执行结果

```js
class Foo {
  constructor(arr) {
    this.arr = arr;
  }
  bar(n) {
    return this.arr.slice(0, n);
  }
}
var f = new Foo([0, 1, 2, 3]);
console.log(f.bar(1));
console.log(f.bar(2).splice(1, 1));
console.log(f.arr);
```

### 5. 描述下列代码的执行结果

```js
01 function f(count) {
02    console.log(`foo${count}`);
03    setTimeout(() => { console.log(`bar${count}`); });
04 }
05 f(1);
06 f(2);
07 setTimeout(() => { f(3); });
```

### 6. 描述下列代码的执行结果

```js
var a = 2;
var b = 5;
console.log(a === 2 || (1 && b === 3) || 4);
```

### 7. 描述下列代码的执行结果

```js
export class ButtonWrapper {
  constructor(domBtnEl, hash) {
    this.domBtnEl = domBtnEl;
    this.hash = hash;
    this.bindEvent();
  }
  bindEvent() {
    this.domBtnEl.addEventListener("click", this.clickEvent, false);
  }
  detachEvent() {
    this.domBtnEl.removeEventListener("click", this.clickEvent);
  }
  clickEvent() {
    console.log(`The hash of the button is: ${this.hash}`);
  }
}
```

### 38. 描述下列代码的执行结果

```js
const first = () =>
  new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(1);
      }, 0);
      setTimeout(() => {
        console.log(2);
        resolve(3);
      }, 0);
      resolve(4);
    });
    resolve(2);
    p.then((arg) => {
      console.log(arg, 5); // 1 bb
    });
    setTimeout(() => {
      console.log(6);
    }, 0);
  });
first().then((arg) => {
  console.log(arg, 7); // 2 aa
  setTimeout(() => {
    console.log(8);
  }, 0);
});
setTimeout(() => {
  console.log(9);
}, 0);
console.log(10);
```

### 42. 说说 _instanceof_ 原理，并回答下面的题目（美团 19 年）

```js
function A() {}
function B() {}
A.prototype = new B();
let a = new A();
console.log(a instanceof B); // true of false ?
```

### 62. promise 代码题

```js
new Promise((resolve, reject) => {
  reject(1);
  console.log(2);
  resolve(3);
  console.log(4);
})
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log("reject1");
  });
try {
  new Promise((resolve, reject) => {
    throw "error";
  })
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log("reject2");
    });
} catch (err) {
  console.log(err);
}
```

### 107. 情人节福利题，如何实现一个 _new_ （字节）

```js
let Parent = function (name, age) {
  this.name = name;
  this.age = age;
};
Parent.prototype.sayName = function () {
  console.log(this.name);
};
//自己定义的 new 方法
let newMethod = function (Parent, ...rest) {
  // 1.以构造器的 prototype 属性为原型，创建新对象；
  let child = Object.create(Parent.prototype);
  // 2.将 this 和调用参数传给构造器执行
  let result = Parent.apply(child, rest);
  // 3.如果构造器没有手动返回对象，则返回第一步的对象
  return typeof result === "object" ? result : child;
};
//创建实例，将构造函数 Parent 与形参作为参数传入
const child = newMethod(Parent, "echo", 26);
child.sayName(); //'echo';
//最后检验，与使用 new 的效果相同
console.log(child instanceof Parent); //true
console.log(child.hasOwnProperty("name")); //true
console.log(child.hasOwnProperty("age")); //true
console.log(child.hasOwnProperty("sayName")); //false
```

### 175. 写出代码的执行结果，并解释为什么？

```js
function a() {
  console.log(1);
}
(function () {
  if (false) {
    function a() {
      console.log(2);
    }
  }
  console.log(typeof a);
  a();
})();
```

### 176. 写出代码的执行结果，并解释为什么？

```js
alert(a);
a();
var a = 3;
function a() {
  alert(10);
}
alert(a);
a = 6;
a();
```

### 177. 写出下面程序的打印顺序，并简要说明原因

```js
setTimeout(function () {
  console.log("set1");
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log("then4");
    });
    console.log("then2");
  });
});
new Promise(function (resolve) {
  console.log("pr1");
  resolve();
}).then(function () {
  console.log("then1");
});

setTimeout(function () {
  console.log("set2");
});
console.log(2);

new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log("then3");
});
```

### 184. 下列代码的执行结果

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");
```

### 212. 下列代码执行结果

```js
console.log(1);
setTimeout(() => {
  console.log(2);
  process.nextTick(() => {
    console.log(3);
  });
  new Promise((resolve) => {
    console.log(4);
    resolve();
  }).then(() => {
    console.log(5);
  });
});
new Promise((resolve) => {
  console.log(7);
  resolve();
}).then(() => {
  console.log(8);
});
process.nextTick(() => {
  console.log(6);
});
setTimeout(() => {
  console.log(9);
  process.nextTick(() => {
    console.log(10);
  });
  new Promise((resolve) => {
    console.log(11);
    resolve();
  }).then(() => {
    console.log(12);
  });
});
```

### 215. 下列代码执行结果

```js
Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
```

### 244. 下面代码的输出是什么？（ _D_ ）

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

### 301. 下面的代码输出什么？

```js
var a = function () {
  return 5;
};
a.toString = function () {
  return 3;
};
console.log(a + 7);
```

### 285. 下面代码的返回值是什么？（ _A_ ）

```js
[..."Lydia"];
```

### 284. _setInterval_ 方法的返回值什么？（ _A_ ）

```js
setInterval(() => console.log("Hi"), 1000);
```

### 283. 下面代码的输出是什么？（ _B_ ）

```js
!!null;
!!"";
!!1;
```

### 292. 分析以下代码的执行结果并解释为什么。

```js
// example 1
var a = {}, b = '123', c = 123;
a[b] = 'b';
a[c] = 'c';
console.log(a[b]);

// example 2
var a = {}, b = Symbol('123'), c = Symbol('123');
a[b] = 'b';
a[c] = 'c';
console.log(a[b]);

// example 3
var a = {}, b = { key: '123' }, c = { key: '456' };
a[b] = 'b';
a[c] = 'c';
console.log(a[b]);
```



### 293. 下面的代码打印什么内容？为什么？

```js
var b = 10;
(function b() {
  b = 20;
  console.log(b);
})();
```

### 294. 下面代码中，_a_ 在什么情况下会执行输出语句打印 _1_ ？

```js
var a = ?;
if(a == 1 && a == 2 && a == 3){
 	console.log(1);
}
```

### 280. 下面代码的输出是什么？（ _A_ ）

```js
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```

- A: _1_ _undefined_ _2_
- B: _undefined_ _undefined_ _undefined_
- C: _1_ _1_ _2_
- D: _1_ _undefined_ _undefined_

### 279. 下面代码的输出是什么？（ _C_ ）

```js
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: _[1, 2, 3, 7 x null, 11]_
- B: _[1, 2, 3, 11]_
- C: _[1, 2, 3, 7 x empty, 11]_
- D: _SyntaxError_

### 278. 下面代码的输出是什么？（ _B_ ）

```js
console.log(typeof typeof 1);
```

- A: _"number"_
- B: _"string"_
- C: _"object"_
- D: _"undefined"_

### 276. 下面这些值哪些是假值？（ _A_ ）

```js
0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;
```

- A: _0_ _""_ _undefined_
- B: _0_ _new Number(0)_ _""_ _new Boolean(false)_ _undefined_
- C: _0_ _""_ _new Boolean(false)_ _undefined_
- D: 所有都是假值。

### 275. 下面代码的输出是什么？（ _B_ ）

```js
function sayHi() {
  return (() => 0)();
}

typeof sayHi();
```

- A: _"object"_
- B: _"number"_
- C: _"function"_
- D: _"undefined"_

### 274. 下面代码的输出是什么？（ _D_ ）

```js
const person = { name: 'Lydia' };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```

- A: _undefined is 21_ _Lydia is 21_
- B: _function_ _function_
- C: _Lydia is 21_ _Lydia is 21_
- D: _Lydia is 21_ _function_

### 273. 单击下面的 _html_ 片段打印的内容是什么？（ _A_ ）

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">Click here!</p>
</div>
```

- A: _p_ _div_
- B: _div_ _p_
- C: _p_
- D: _div_


### 272. 单击按钮时 _event.target_ 是什么？（ _C_ ）

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">Click!</button>
  </div>
</div>
```

- A: _div_ 外部
- B: _div_ 内部
- C: _button_
- D: 所有嵌套元素的数组

### 271. 下面代码的输出是什么？（ _B_ ）

```js
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar();
foo();
baz();
```

- A: _First_ _Second_ _Third_
- B: _First_ _Third_ _Second_
- C: _Second_ _First_ _Third_
- D: _Second_ _Third_ _First_

### 270. 下面代码的输出是什么？（ _B_ ）

```js
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

- A: _123_
- B: _456_
- C: _undefined_
- D: _ReferenceError_

### 269. 下面代码的输出是什么？（ _A_ ）

```js
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

name.giveLydiaPizza();
```

- A: _"Just give Lydia pizza already!"_
- B: _TypeError: not a function_
- C: _SyntaxError_
- D: _undefined_

### 268. 下面代码的输出是什么？（ _C_ ）

```js
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

- A: _1 2_
- B: _1 2 3_
- C: _1 2 4_
- D: _1 3 4_

### 267. 下面代码的输出是什么？（ _C_ ）

```js
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```

- A: _{ a: "one", b: "two" }_
- B: _{ b: "two", a: "three" }_
- C: _{ a: "three", b: "two" }_
- D: _SyntaxError_

### 266. 下面代码的输出是什么？（ _C_ ）

```js
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);
```

- A: _false_ _true_ _false_ _true_
- B: _false_ _true_ _true_ _true_
- C: _true_ _true_ _false_ _true_
- D: _true_ _true_ _true_ _true_

### 265. 下面代码的输出是什么？（ _B_ ）

```js
var num = 8;
var num = 10;

console.log(num);
```

- A: _8_
- B: _10_
- C: _SyntaxError_
- D: _ReferenceError_

### 264. _cool_secret_ 可以访问多长时间？（ _B_ ）

```js
sessionStorage.setItem('cool_secret', 123);
```

- A：永远，数据不会丢失。
- B：用户关闭选项卡时。
- C：当用户关闭整个浏览器时，不仅是选项卡。
- D：用户关闭计算机时。

### 262. 下面代码的输出是什么？（ _C_ ）

```js
function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}

getAge();
```

- A: _21_
- B: _undefined_
- C: _ReferenceError_
- D: _TypeError_

### 263. 下面代码的输出是什么？（ _A_ ）

```js
const sum = eval('10*10+5');
```

- A: _105_
- B: _"105"_
- C: _TypeError_
- D: _"10\*10+5"_

### 261. 下面代码的输出是什么？（ _C_ ）

```js
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```

- A: _"number"_
- B: _"array"_
- C: _"object"_
- D: _"NaN"_

### 260. 下面代码的输出是什么？（ _C_ ）

```js
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!');
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.');
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
```

- A: _You are an adult!_
- B: _You are still an adult._
- C: _Hmm.. You don't have an age I guess_



### 259. 下面代码的输出是什么？（ _B_ ）

```js
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```

- A: _Lydia_ _21_ _["", "is", "years old"]_
- B: _["", "is", "years old"]_ _Lydia_ _21_
- C: _Lydia_ _["", "is", "years old"]_ _21_

### 258. 下面代码的输出是什么？（ _C_ ）

```js
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

- A: _1 1 2_
- B: _1 2 2_
- C: _0 2 2_
- D: _0 1 2_

### 256. 事件传播的三个阶段是什么？（ _D_ ）

- A: 目标 > 捕获 > 冒泡
- B: 冒泡 > 目标 > 捕获
- C: 目标 > 冒泡 > 捕获
- D: 捕获 > 目标 > 冒泡

### 257. 下面代码的输出是什么？（ _C_ ）

```js
function sum(a, b) {
  return a + b;
}

sum(1, '2');
```

- A: _NaN_
- B: _TypeError_
- C: _"12"_
- D: _3_

### 255. 下面代码的输出是什么？（ _A_ ）

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);
```

- A: _Person { firstName: "Lydia", lastName: "Hallie" }_ 和 _undefined_
- B: _Person { firstName: "Lydia", lastName: "Hallie" }_ 和 _Person { firstName: "Sarah", lastName: "Smith" }_
- C: _Person { firstName: "Lydia", lastName: "Hallie" }_ 和 _{}_
- D: _Person { firstName: "Lydia", lastName: "Hallie" }_ 和 _ReferenceError_

### 254. 下面代码的输出是什么？（ _A_ ）

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = () => this.firstName + this.lastName;

console.log(member.getFullName());
```

- A: _TypeError_
- B: _SyntaxError_
- C: _Lydia Hallie_
- D: _undefined_ _undefined_

### 253. 当我们执行以下代码时会发生什么？（ _A_ ）

```js
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```

- A 什么都不会发生
- B: _SyntaxError. You cannot add properties to a function this way._
- C: _undefined_
- D: _ReferenceError_

> **分析：**
>
> 因为函数也是对象！（原始类型之外的所有东西都是对象）
>
> 函数是一种特殊类型的对象，我们可以给函数添加属性，且此属性是可调用的。

### 252. 下面代码的输出是什么？（ _A_ ）

```js
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: _{}_
- B: _ReferenceError: greetign is not defined_
- C: _undefined_

### 251. 下面代码的输出是什么？（ _D_ ）

```js
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
freddie.colorChange('orange');
```

- A: _orange_
- B: _purple_
- C: _green_
- D: _TypeError_

### 250. 下面代码的输出是什么？（ _C_ ）

```js
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

- A: _true_ _false_ _true_
- B: _false_ _false_ _true_
- C: _true_ _false_ _false_
- D: _false_ _true_ _true_

### 249. 下面代码的输出是什么？（ _A_ ）

```javascript
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);
```

- A: _Hello_
- B: _undefined_
- C: _ReferenceError_
- D: _TypeError_

### 248. 哪个选项是不正确的？（ _A_ ）

```javascript
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
```

- A: _mouse.bird.size_
- B: _mouse[bird.size]_
- C: _mouse[bird["size"]]_
- D: 以上选项都对

### 246. 下面代码的输出是什么？（ _B_ ）

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

shape.diameter();
shape.perimeter();
```

- A: _20_ 和 _62.83185307179586_
- B: _20_ 和 _NaN_
- C: _20_ 和 _63_
- D: _NaN_ 和 _63_

### 247. 下面代码的输出是什么？（ _A_ ）

```
+true;
!"Lydia";
```

- A: _1_ 和 _false_
- B: _false_ 和 _NaN_
- C: _false_ 和 _false_

### 244. 下面代码的输出是什么？（ _D_ ）

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

- A: _Lydia_ 和 _undefined_
- B: _Lydia_ 和 _ReferenceError_
- C: _ReferenceError_ 和 _21_
- D: _undefined_ 和 _ReferenceError_

### 245. 下面代码的输出是什么？（ _C_ ）

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: _0 1 2_ 和 _0 1 2_
- B: _0 1 2_ 和 _3 3 3_
- C: _3 3 3_ 和 _0 1 2_


### 291. 分析以下代码的执行结果并解释为什么。

```js
var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };

console.log(a.x);
console.log(b.x);
```

### 282. 下面代码的输出是什么?

```js
[
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
```

- A: _[0, 1, 2, 3, 1, 2]_
- B: _[6, 1, 2]_
- C: _[1, 2, 0, 1, 2, 3]_
- D: _[1, 2, 6]_
