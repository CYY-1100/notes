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
console.log(instance1.name); 