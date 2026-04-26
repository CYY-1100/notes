# Vue 基础
## Vue模板是如何编译的
1. 解析 (Parse)
    - 将模板字符串解析成抽象语法树
2. 优化 (Optimize)
    - 遍历 AST，检测并标记静态节点，用于 diff 算法
3. 生成 (Generate)
    - 根据优化后的 AST 生成渲染函数


vue3相比较于vue2，在编译阶段有哪些改进?

说说Vue页面渲染流程

Vue项目中，你做过哪些性能优化?

如果使用Vue3.0实现一个Modal，你会怎么进行设计?

Vue3.0里为什么要用 Proxy API替代defineProperty API ?

Vue有了数据响应式，为何还要 diff?

说说vue3中的响应式设计原理

说说 Vue 中 CSS scoped 的原理

vue3的响应式库是独立出来的，如果单独使用是什么样的效果?

手写vue的双向绑定

什么是虚拟DOM?如何实现一个虚拟DOM?说说你的思路

SSR是什么?Vue中怎么实现?

说下Vite的原理