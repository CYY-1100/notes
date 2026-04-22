# JS 基础
## JS数据类型有哪些？ String的底层是什么？
- 基本数据：
  - undefined
  - null
  - Number
  - String
  - Boolean
  - BigInt
  - Symbol
- 引用数据：Object

## null 和 undefined 有什么不同？
- undefined: 表示一个变量被声明了，但是没有被赋值。
- null: 表示一个变量有值，这个值就是“空值”或“无对象”。

## 隐式转换
- 引用类型：调用顺序 valueOf() toString()
- [] == ![]

## 哪些值会被转化为false
- null
- undefined
- ''
- 0
- NaN

## [] == false 的结果是什么？"2" > 1 的结果是什么？
- '' == false， 2 > 1

## == 和 === 的区别
- ==：对比值，会有隐式转换
- ===：对比类型和值

## var，let, const 的区别
- var
  - 作用域：函数，全局
  - 变量提升：有，初始化为undefined
  - 重新声明：允许
  - 重新赋值：可以
- let 
  - 作用域：块
  - 变量提升：无，有暂时性死区（声明前无法访问）
  - 重新声明：同一作用域内不可以
  - 重新赋值：可以
- const
  - 作用域：块
  - 变量提升：无，有暂时性死区（声明前无法访问）
  - 重新声明：不可以
  - 重新赋值：不可以
- 块作用域（解决了if for的变量泄露）

## 函数提升 和 变量提升的优先级
- 函数大于变量

## NaN 是什么？
- not a number

## 深拷贝和浅拷贝（手写deepClone）
- 深拷贝：新旧对象完全独立
  - structuredClone()：内置全局函数
    - 不能拷贝：Function，Error对象，DOM节点
- 浅拷贝：引用类型拷贝地址
  - 扩展运算符
  - Object.assign(val)
  - JSON.parse(JSON.stringify())
    - 会忽略：undefined，Symbol，Function，Date会变成字符串
    - 无法处理循环引用

## 实现一个深拷贝函数，需要考虑哪些情况（如循环引用）？
- 引用数据类型
- 循环引用问题
- 不可枚举属性以及访问器属性
- 特殊对象类型的支持
- 原型链的处理
- Map 和 Set 数据结构的处理

## typeof 和 instanceof 的区别是什么？
- instanceof：判断引用数据类型的实例, 返回一个布尔值
- typeof：判断基本数据类型，返回数据类型字符串
  - 陷阱1：typeof null == Obejct (用===判断)
  - 陷阱2：无法区分具体对象类型（[] 和 {} 都返回Object）
  - 最佳实践：Object.prototype.toString.call()

## instanceof 的原理

## 堆和栈
- 栈（Stack）
  - 变量，参数
  - 快速访问，空间小，自动管理
- 堆（Heap）
  - 引用类型的实际对象数据
  - 空间大，需垃圾回收机制管理

## map, forEach, filter 和 reduce 的区别
- map
  - 原数组：不改变
  - 返回值：新数组（相等长度）
  - 功能：转化新数组，创建新数组
- forEach
  - 原数组：不改变
  - 返回值：undefined
  - 功能：遍历数据
- filter
  - 原数组：不改变
  - 返回值：新的数组（元素是符合条件的，长度小于等于原数组）
  - 功能：筛选数组，创建新数组
- reduce
  - 原数组：不改变
  - 返回值：返回单个汇总值
  - 功能：汇总，累加

## splice 和 slice 的区别
- splice（拼接）
  - 改变原数组
- slice（片段）
  - 不改变原数组

## for in 和 for of 的区别
- for in
  - 用于遍历对象的可枚举属性
  - 返回值：键名
- for of
  - 用于遍历可迭代对象
  - 返回值：键值

## 对象遍历有哪些方法
- Reflect.ownKeys(obj)：最可靠
- Object.keys(obj)：自己可枚举的属性
- for in：会遍历自己和原型链的属性

## 执行上下文。作用域链
- 执行上下文：代码的运行环境，通过栈管理
- 作用域：块，函数，全局
- 作用域链：变量的查找路径

## 作用域有哪些？
- 全局
- 函数
- 块

## 词法作用域是什么
- 也称为静态作用域，函数或变量的`作用域`在定义的时候就确定了，而不是运行的时候。

## 什么是闭包？有什么用？
- 函数 + 词法环境的引用。（函数创建时，记住了作用域）
- 应用场景：函数柯里化，实现数据持久化和状态管理，创建函数工厂，模块模式

## 高阶函数是什么？函数柯里化是什么？
- 纯函数：只依赖于输入参数，不产生副作用
- 高阶函数：参数或返回值是函数的函数。
  - 应用场景：代码复用
- 函数柯里化：多个参数的函数转换为只接受单个参数的函数 

## 节流和防抖
- 节流：规定时间内只执行一次。
- 防抖：延迟执行回调函数，延迟时间内再次触发，则重新计算。

## 在全局环境、函数内部、对象方法中，this 分别指向什么？
- 函数
  - this 默认指向 全局对象 window。
  - 严格模式下：this 的值为 undefined。
- 全局环境:
  - this 指向 全局对象 window。
  - 严格模式下：this 的值为 undefined。
- 对象方法
  - this 指向 该对象。

## 显示绑定 this 的方法
- call
  - 调用一个函数，指定该函数内部 this 的值，可选参数需要逐个列出。
  - 经典应用：方法借用
- apply
  - 与 call 相似，参数是一个类数组。
  - 经典应用：求数组最大值（ES5）。
- bind
  - 不会立即执行函数，返回一个新的函数。
  - 经典应用：在事件处理或定时器中固定 this；函数柯里化
- 作用
  - 控制this指向
  - 借用其他对象方法
  - 灵魂处理函数参数

## 立即执行函数（IIFE）
- 隔离作用域
- 避免污染

## 箭头函数的特性？箭头函数和普通函数的区别？
- 无this
- 不可被显示绑定
- 不能作为构造函数
- 没有 arguments 对象
- 不能用作 Generator 函数,不能使用 yield 关键字
- 没有 super 绑定
- 目的：消除二义性
  - 消除了运行时动态绑定的不确定性
  - 不能作为构造函数、没有arguments对象等，强制明确函数用途
  - 通过简洁语法和强制规则，减少语法解析的歧义
  - 始终基于定义时的上下文，而非调用时的上下文

## setTimeout 和 setInterval 的陷阱有哪些
- setInterval 可能导致任务堆积
- this指向不准确
- delay != 精确执行时间，定时不准（因为事件循环）
- 作用域陷阱（循环中的问题）

## JS中的计时器能做到精确计时吗？为什么？
- 不行。
  1. 计算机硬件没有原子钟无法做到精确计时。
  2. 操作系统的计时函数本身就有少量偏差，由于JS的计时器最终调用的是操作系统的函数，也就携带了这些偏差。
  3. 按照W3C的标准，浏览器计时器嵌套层级超过5层，则会有4毫秒的最少时间，这样在计时时间少于4毫秒时又带来了偏差，受事件循环的影响，计时器的回调函数只能在主线程空闲时运行，因此又带来了偏差。

## 如何实现一个精准的setInterval
- 使用Performonce.now()调整（）
- requestAnimationFrame（）
- webworkers（推荐，不受失活和渲染帧影响）

## 事件循环是什么？浏览器和node环境有什么区别？
1. 检查调用栈是否为空。 如果调用栈不为空，则执行栈顶的任务，直到清空。
2. 检查微任务队列。 如果有任务，全部执行完。（会持续执行微任务队列中的所有任务）
3. 执行一个宏任务。 从回调队列（宏任务队列）中取出第一个任务执行。
4. 重复上诉步骤。

## 事件循环
1. 同步代码优先执行。
2. 微任务在本次事件循环结束前（下一个宏任务开始前）全部执行完毕。
3. 宏任务每次只执行一个，然后又会去检查并清空微任务队列。

## Promise
- 状态
  - 运行中
  - 成功
  - 失败
- 改善异步代码可读性和可维护性

## 比较 callback, Promise, async/await 的优缺点
- callback 回调地狱 错误处理困难 流程的控制权交给了第三方
- Promise 学习成本 无法取消 忘写.catch()错误可能会被静默吞掉
- async/await Promise的语法糖

## 如何处理多个异步请求的并发执行
- Promise.all 所有传入的 Promise 都成功
- Promise.allSettled 所有 Promise 结束（无论成功还是失败）时使用
- Promise.race 某个 Promise 解决或拒绝，就返回该 Promise 的结果
- Promise.any 任何一个 Promise 成功时，就返回那个已经成功的

## 什么是原型？什么是原型链？有什么用？
- 原型
  - 对象：`__proto__`（除了 null）
  - 函数：prototype
- 原型链：
  - 对象：`实例.__proto__.__proto__.__proto__`
  - 函数：`实例.construtor.__proto__`
- 作用
  - 节约内存
  - 用于继承

## `prototype`、`__proto__` 和 `constructor`是什么？有什么作用？
- `prototype`：显式原型，函数天生就拥有的属性，称之为“原型对象”。作用：实例可以共享属性和方法。
- `__proto__`：隐式原型，所有对象都拥有的内部属性。（除了 null）
  - 作用：将实例对象与其构造函数的原型连接起来。`实例对象.__proto__` === `constructor.prototype`
- `constructor`：`prototype`默认自带的一个属性。
  - 作用：指回创建该原型对象的构造函数本身，形成一个闭环。`原型对象.constructor === 构造函数`

## 解释 `__proto__` 和 `prototype` 的关系。如何实现一个类的继承？
- `prototype` (原型对象): 函数的一个属性
- `__proto__` (隐式原型): 所有对象的一个内部属性。（除了null）
- 实例的 `__proto__` 指向其构造函数的 `prototype`。

## 使用 new 操作符调用一个函数时，JS 引擎内部会执行些什么？
1. 创建一个全新的空对象 {}。
2. 将新对象的内部 `[[Prototype]]` 链接到构造函数的 prototype 属性上。
3. 将构造函数内部的 this 关键字绑定到这个新创建的对象上。
4. 返回这个新创建的对象。
```js
function myNew(constructor, ...args) {
  // 创建一个新对象
  const newObj = {};

  // 设置新对象的原型链。将新对象的 __proto__ 指向构造函数的 prototype
  newObj.__proto__ = constructor.prototype;

  // 将构造函数的 this 指向新对象，并执行构造函数。
  // 使用 call 方法可以改变函数内部的 this 指向
  const result = constructor.call(newObj, ...args);

  // 判断构造函数的返回值。
  // 如果构造函数返回了一个对象，则返回该对象；否则返回我们创建的新对象
  return typeof result === 'object' && result !== null ? result : newObj;
}
```

## CommonJS 和 ESModule 的区别。它们的加载机制有何不同？
- CommonJS
  - 来自node社区，是API
  - 运行态
  - require 和 modeule.exports
- ESModule
  - ESM：官方新增语法
  - 运行时（import()）和编译时（静态） Tree shaking
  - import 和 export

## 如何反转一个字符串？如何判断一个字符串是否是回文？
- reverse

## 严格模式的好处和影响
- 更安全的编码实践
- 捕获常见错误

# DOM相关
## dom.write 和 dom.innerHtml
- write是直接向文档流中写入内容
- innerHtml先获取DOM元素，然后设置其内部HTML

##  如何获取 DOM 元素？
- document.getElementById('myId');
- document.getElementsByTagName('p');
- document.getElementsByClassName('myClass');
- document.querySelector('.highlight');
- document.querySelectorAll('.item');

## 如何给元素添加/移除事件监听器？
- addEventListener('click', handleClick);
- removeEventListener()

# BOM相关

# 性能优化
## 如何减少 JavaScript 的内存泄漏？
- 始终使用 let, const 或 var 来声明变量。
- 确保在闭包不需要时，解除引用。
- 事件监听器不需要时，移除事件监听器。
- 定时器不需要时，清理定时器。
- 移除 DOM 元素后，手动将你的 JavaScript 引用设置为 null。
- 适时清理 Map 和 Set，移除不再需要的项。

## 如何优化长列表渲染？
- 虚拟滚动
- 分页
- 懒加载

## 当QPS达到峰值，
- 缓存：本地缓存，服务器缓存，CDN缓存
- 合并请求：雪碧图，
- 延迟请求：懒加载，请求队列
- 用户体验：提示，loading

## 解释 V8 引擎的垃圾回收机制。

## 为什么说 Map 的性能比普通对象作为 Hash 表更好？
- {} 最初并非为纯粹的哈希表而设计，它承载了原型继承等语义。
- 而 Map 是 ES6 专门为高效的键值对集合操作而引入的数据结构。

# 安全性
## 什么是 XSS 攻击？如何防范？

## 什么是同源策略和 CORS？