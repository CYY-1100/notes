/**
 * 1.原型链继承
 * 缺点：
 * 1.无法向父类构造函数传参
 * 2.父类构造函数中定义的引用类型的属性，会被所有子类的实例所共享。(核心的缺点)
 * 3.contructor 有指向问题 (可以解决)
 */
Child.prototype = new Parent(); // 核心
Child.prototype.contructor = Child; // 修复contructor指向问题

/**
 * 2.构造函数继承
 * 缺点：
 * 1.无法继承父类原型（prototype）上的属性和方法
 * 2.方法无法复用，消耗内存
 * 3.效率较低
 */
function Parent() {
  this.name = "Parent";
  this.age = 80;
  this.sayName = function () {
    console.log(this.name);
  };
}

function Child() {
  Parent.call(this); // 核心
  this.name = "Child";
  this.age = 12;
}

/**
 * 3.组合继承（原型链继承 + 构造函数继承）
 * 缺点：
 * 1.父类构造函数被调用2次，分别是 call 和 new 的时候
 */

/**
 * 4.寄生组合式继承（传统最优）
 */
// 寄生函数
function inheritPrototype(child, parent) {
  // 创建空对象作为中介
  const obj = Object.create(parent.prototype);
  // 修复contructor指向问题
  obj.contructor = child;
  // 原型指向中介对象
  child.prototype = obj;
}

/**
 * 5.ES6 的 class（底层机制类似于寄生组合式）
 */
class Child extends Parent {
    constructor(){
        super() // Parent.call(this)
    }
}
