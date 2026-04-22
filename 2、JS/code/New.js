function myNew(constructor, ...args) {
  const newObj = Object.create(constructor.prototype);

  const result = constructor.apply(newObj, args);

  // 判断构造函数的返回值。
  const isObj = typeof result === "object" && result !== null;
  const isFun = typeof result === "function";
  // 如果构造函数返回了一个对象，则返回该对象；
  if (isObj || isFun) return result;
  // 否则返回我们创建的新对象
  return newObj;
}

function myNew(constructor, ...args) {
  // 创建一个新对象
  const newObj = {};

  // 设置新对象的原型链。将新对象的 __proto__ 指向构造函数的 prototype
  newObj.__proto__ = constructor.prototype;

  // 将构造函数的 this 指向新对象，并执行构造函数。
  // 使用 call 方法可以改变函数内部的 this 指向
  const result = constructor.call(newObj, ...args);
  // const result = constructor.apply(newObj, args);

  // 判断构造函数的返回值。
  const isObj = typeof result === "object" && result !== null;
  const isFun = typeof result === "function";
  // 如果构造函数返回了一个对象，则返回该对象；
  if (isObj || isFun) return result;
  // 否则返回我们创建的新对象
  return newObj;
}
