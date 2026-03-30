# 一、 基础
## typeof 和 instanceof 的区别是什么？
- typeof用于判断原始数据类型,返回一个代表数据类型的字符串
- instanceof用于判断一个复杂数据类型的实例, 返回一个布尔值
- 对于更精确的对象类型判断，可以使用 Object.prototype.toString.call() 方法。

## null 和 undefined 有什么不同？
- undefined: 表示一个变量被声明了，但是没有被赋值。
- null: 表示一个变量有值，这个值就是“空值”或“无对象”。

## var, let, const 的区别
| 特性 | var | let | const |
| :--- | :--- | :--- | :--- |
| 作用域 | 函数作用域 | 块级作用域 | 块级作用域 |
| 变量提升 | 有 (初始化为 `undefined`) | 有 (存在暂时性死区 TDZ) | 有 (存在暂时性死区 TDZ) |
| 重复声明 | 允许 | 不允许 | 不允许 |
| 重新赋值 | 允许 | 允许 | 不允许 (引用地址不可变) |
| 初始值要求 | 不要求 | 不要求 | 必须初始化 |
> 变量提升： 变量声明会被提升到其作用域的顶部，并初始化为 undefined。
> 暂时性死区 (TDZ)： 变量虽然也被提升，但在声明语句执行之前，它们处于“暂时性死区”，无法被访问。
> 默认使用 const, 需要修改时使用 let, 不要使用 var
> 函数提升 > 变量提升

## 在全局环境、函数内部、对象方法中，this 分别指向什么？
- 全局环境: this 指向 全局对象 window。严格模式下：this 的值为 undefined。
- 函数：this 默认指向 全局对象 window。严格模式下：this 的值为 undefined。
- 对象方法：this 指向 该对象。

## 词法作用域是什么
- 一个 函数 或 变量 的 作用域 是在定义的时候就确定了，而不是在函数运行的时候。

## 事件循环
1. 检查调用栈是否为空。 如果调用栈不为空，则执行栈顶的任务，直到清空。
2. 检查微任务队列。 如果微任务队列中有任务，就全部执行完，直到微任务队列变空。（重要：它会持续执行微任务队列中的所有任务）
3. 执行一个宏任务。 从回调队列（宏任务队列）中取出第一个任务执行。
4. 再次检查微任务队列。 如果此时微任务队列又有任务了，继续全部执行完。
5. 重复步骤 3 和 4，然后回到步骤 1，如此往复。
```js
// 1
setTimeout(() => {
    // 4
    setTimeout(() => {
        // 7
        setTimeout(() => console.log('a1'), 0);
        Promise.resolve().then(() => console.log('a2'));
        console.log('a3')
    }, 0);
    Promise.resolve().then(() => {
        // 5
        setTimeout(() => console.log('b1'), 0);
        Promise.resolve().then(() => console.log('b2'));
        console.log('b3')
    });
    console.log('c1')
}, 0);

Promise.resolve().then(()=>{
    // 2
    setTimeout(() => {
        // 6
        setTimeout(() => console.log('aa1'), 0);
        Promise.resolve().then(() => console.log('aa2'));
        console.log('aa3')
    }, 0);
    Promise.resolve().then(() => {
        // 3
        setTimeout(() => console.log('bb1'), 0);
        Promise.resolve().then(() => console.log('bb2'));
        console.log('bb3')
    });
    console.log('cc1')
});
// cc1 bb3 bb2 c1 b3 b2 aa3 aa2 bb1 a3 a2 b1 aa1 a1 
```

同步代码优先执行。
微任务在本次事件循环结束前（下一个宏任务开始前）全部执行完毕。
宏任务每次只执行一个，然后又会去检查并清空微任务队列。

##  如何获取 DOM 元素？
- document.getElementById('myId');
- document.getElementsByTagName('p');
- document.getElementsByClassName('myClass');
- document.querySelector('.highlight');
- document.querySelectorAll('.item');

## 如何给元素添加/移除事件监听器？
- addEventListener('click', handleClick);
- removeEventListener()

## 数组的 map, filter, forEach 方法的区别。
| 特性 | `forEach` | `map` | `filter` |
| :--- | :-------- | :---- | :------- |
| 返回值 | `undefined` | 一个新数组。 | 一个新数组，包含所有使回调函数返回真值的元素。 |
| 是否会改变原数组 | 不会。但回调函数可以手动修改原数组中的元素（不推荐）。 | 不会。总是返回一个新数组。 | 不会。总是返回一个新数组。 |
| 链式调用 | 不能链式调用，因为它返回 `undefined`。 | 可以链式调用。 | 可以链式调用。 |


# 二、 中级 (Intermediate)
## 闭包（Closure）的概念
- 即函数可以访问并“记住”其外部作用域中的变量
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); // 打印 3, 3, 3
}
// 如何修改让它打印 0, 1, 2 ?
// 1.闭包
for (var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(() => console.log(i), 1); // 打印 0, 1, 2
  })(i);
}
// 2.使用let
```

## 解释 `__proto__` 和 `prototype` 的关系。如何实现一个类的继承？
- `prototype` (原型对象):函数的一个属性
- `__proto__`(隐式原型):对象（包括实例对象、数组、函数本身等）的一个内部属性
- 实例的 `__proto__` 指向其构造函数的 `prototype`。

## 比较 callback, Promise, async/await 的优缺点
- callback 回调地狱 错误处理困难 流程的控制权交给了第三方
- Promise 学习成本 无法取消 忘写.catch()错误可能会被静默吞掉
- async/await Promise的语法糖

## 如何处理多个异步请求的并发执行
- Promise.all 所有传入的 Promise 都成功
- Promise.allSettled 所有 Promise 结束（无论成功还是失败）时使用
- Promise.race 某个 Promise 解决或拒绝，就返回该 Promise 的结果
- Promise.any 任何一个 Promise 成功时，就返回那个已经成功的

## 用 JavaScript 实现一个单例模式
```js
function Singleton(name) {
  // 检查实例是否已经存在
  if (Singleton.instance) {
    return Singleton.instance;
  }

  // 初始化实例（this 指向当前正在被创建的那个实例对象）
  this.name = name;

  // 将当前实例赋值给 Singleton 的静态属性（Singleton: 是构造函数本身）
  Singleton.instance = this;

  // 返回实例
  return this;
}

// --- 使用示例 ---
const instance1 = new Singleton("实例A");
const instance2 = new Singleton("实例B");

console.log(instance1 === instance2); // true
console.log(instance1.name);         // "实例A" (因为第二次调用时直接返回了第一次的实例)
```

## 发布-订阅模式。

## 实现一个深拷贝函数，需要考虑哪些情况（如循环引用）？

# 三、 高级 (Senior)
1. 性能优化:
题目示例: 如何减少 JavaScript 的内存泄漏？如何优化长列表渲染？解释防抖（Debounce）和节流（Throttle）的原理及其实现。
考察点: 内存管理、事件处理优化、渲染性能等。

2. V8 引擎原理:
题目示例: 解释 V8 引擎的垃圾回收机制。为什么说 Map 的性能比普通对象作为 Hash 表更好？
考察点: 对 JS 运行环境的底层理解。

3. 模块化:
题目示例: 比较 CommonJS 和 ESModule 的区别。它们的加载机制有何不同（动态 vs 静态）？
考察点: 代码组织和依赖管理。

4. 编程范式与复杂场景实现:
题目示例: 用函数式编程的思想实现一个数据处理管道。设计并实现一个前端状态管理方案（如简化版的 Redux）。
考察点: 代码抽象能力、架构设计能力。

5. 安全性:
题目示例: 什么是 XSS 攻击？如何防范？什么是同源策略和 CORS？
考察点: 安全意识和防护措施。