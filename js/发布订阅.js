// ES6
class EventHub {
  constructor() {
    // 存储所有的事件及对应的回调函数列表
    this.events = {};
  }

  // 订阅事件
  on(eventName, callback) {
    if (!this.events[eventName]) {
      // 如果该事件尚无订阅者，初始化一个空数组
      this.events[eventName] = [];
    }
    // 将回调函数添加到该事件的列表中
    this.events[eventName].push(callback);
  }

  // 发布事件
  emit(eventName, ...args) {
    // 检查是否有订阅此事件的回调函数
    if (this.events[eventName]) {
      // 遍历并执行所有回调函数
      this.events[eventName].forEach(callback => {
        callback(...args);
      });
    }
  }

  // 取消订阅
  off(eventName, callback) {
    if (this.events[eventName]) {
      // 过滤掉指定的回调函数，生成新的数组
      this.events[eventName] = this.events[eventName].filter(
        cb => cb !== callback
      );
    }
  }
}

// ES5
// 构造函数
function EventHub() {
  // 用于存储所有事件及其对应的回调函数列表
  // 结构示例: { 'eventA': [func1, func2], 'eventB': [func3] }
  this.events = {};
}

// 订阅方法
EventHub.prototype.on = function(event, callback) {
  if (!this.events[event]) {
    // 如果该事件名下还没有任何回调，则初始化一个空数组
    this.events[event] = [];
  }
  // 将新的回调函数添加到对应事件的回调列表末尾
  this.events[event].push(callback);
};

// 发布方法
EventHub.prototype.emit = function(event, data) {
  // 检查是否有针对该事件的回调函数列表
  if (this.events[event]) {
    // 遍历列表中的所有回调函数，并依次执行它们
    // 将传入的数据 `data` 作为参数传递给每个回调函数
    this.events[event].forEach(function(callback) {
      callback(data);
    });
  }
};

// 取消订阅
EventHub.prototype.off = function(event, callback) {
  // 检查该事件是否存在
  if (!this.events[event]) return;

  if (callback) {
    // 如果提供了具体的回调函数，则从列表中移除它
    this.events[event] = this.events[event].filter(function(fn) {
      // filter会返回一个新数组，只包含使回调函数返回true的元素
      // 因此，只要fn不等于我们要移除的callback，它就会被保留在新数组中
      return fn !== callback;
    });
  } else {
    // 如果没有提供回调函数，则移除该事件下的所有回调
    delete this.events[event];
  }
};
