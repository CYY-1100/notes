# 一、 初级 (Junior)
这个阶段主要考察对 JavaScript 基础语法、核心概念的理解。
1. 数据类型与操作:
题目示例: typeof 和 instanceof 的区别是什么？null 和 undefined 有什么不同？
考察点: 原始类型（Number, String, Boolean, Null, Undefined, Symbol）和对象类型，类型判断方法。
2. 作用域与变量提升:
题目示例: 解释一下 var, let, const 的区别。什么是变量提升（Hoisting）？下面代码的输出是什么？
javascript

编辑



console.log(a); // undefined
var a = 5;
考察点: 函数作用域、块级作用域、变量提升机制。
3. this 指向:
题目示例: 在全局环境、函数内部、对象方法中，this 分别指向什么？
考察点: this 的基本绑定规则。
4. 事件循环基础:
题目示例: setTimeout 和 Promise 的执行顺序是怎样的？下面代码的输出顺序是什么？
javascript

编辑



console.log('start');
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise'));
console.log('end');
考察点: 宏任务（MacroTask）与微任务（MicroTask）的概念。
5. 基础 API:
题目示例: 如何获取 DOM 元素？如何给元素添加/移除事件监听器？数组的 map, filter, forEach 方法的区别。

# 二、 中级 (Intermediate)
这个阶段开始考察对语言特性的深入理解和实际应用能力。
1. 闭包 (Closure):
题目示例: 解释什么是闭包，它有什么用途？下面代码会打印出什么？
javascript

编辑



for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); // 打印 3, 3, 3
}
// 如何修改让它打印 0, 1, 2 ?
考察点: 闭包的形成原因、应用场景（如实现私有变量、创建模块）。
2. 原型链与继承:
题目示例: 解释 __proto__ 和 prototype 的关系。如何实现一个类的继承？
考察点: JavaScript 的原型链机制，构造函数、实例、原型对象三者之间的关系。
3. 异步编程:
题目示例: 比较 callback, Promise, async/await 的优缺点。如何处理多个异步请求的并发执行（如 Promise.all）？
考察点: 对异步模型的掌握和错误处理能力。
4. 深拷贝与浅拷贝:
题目示例: 实现一个深拷贝函数，需要考虑哪些情况（如循环引用）？
考察点: 对数据结构、引用传递的理解。
5. 设计模式:
题目示例: 用 JavaScript 实现一个单例模式、发布-订阅模式。
考察点: 代码组织和架构思想。

# 三、 高级 (Senior)
这个阶段更侧重于系统性知识、性能优化、底层原理和架构设计能力。
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
总之，从初级到高级，JS 的考核范围越来越广，深度也越来越深。建议循序渐进地学习和实践，将理论知识转化为解决实际问题的能力。