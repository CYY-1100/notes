// call
Function.prototype.myCall = function(context, ...args) {
  // 如果 context 是 null 或 undefined，默认指向全局对象
  context = context == null ? globalThis : Object(context);

  // 使用 Symbol 避免属性名冲突
  const fnSymbol = Symbol('fn');
  context[fnSymbol] = this;

  // 执行函数并获取结果
  const result = context[fnSymbol](...args);

  // 删除临时属性
  delete context[fnSymbol];

  return result;
};

// apply
Function.prototype.myApply = function(context, argsArray) {
  context = context == null ? globalThis : Object(context);

  const fnSymbol = Symbol('fn');
  context[fnSymbol] = this;

  let result;
  if (argsArray == null) {
    result = context[fnSymbol]();
  } else {
    // 确保 argsArray 是数组或类数组
    if (!Array.isArray(argsArray) && !(argsArray != null && typeof argsArray.length === 'number')) {
      throw new TypeError('CreateListFromArrayLike called on non-object');
    }
    result = context[fnSymbol](...argsArray);
  }

  delete context[fnSymbol];
  return result;
};

// bind
Function.prototype.myBind = function(context, ...bindArgs) {
  const fn = this;

  // 校验调用者是否为函数
  if (typeof fn !== 'function') {
    throw new TypeError('Bind must be called on a function');
  }

  // 返回的新函数
  const boundFn = function(...callArgs) {
    // 如果通过 new 调用，则 this 指向新创建的实例
    // 否则使用绑定的 context
    const finalContext = this instanceof boundFn ? this : context;
    return fn.apply(finalContext, bindArgs.concat(callArgs));
  };

  // 修复原型链：使 boundFn 的实例能继承原函数的原型
  boundFn.prototype = Object.create(fn.prototype);

  return boundFn;
};