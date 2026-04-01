# 一、 核心原理与底层机制
## nextTick 是如何工作的？
- 宏观层面
    1. 当数据变化时，DOM 更新任务会被推入一个内部的微任务队列中。
    2. 调用 nextTick 时，callback 也会被推入到这个微任务队列中，排在 DOM 更新任务之后。
    3. 避免了频繁操作 DOM 带来的性能损耗。
- 微观层面：优雅降级（主要针对 Vue 2）
    1. 首选方案：Promise.then
    2. MutationObserver 监听一个虚拟 DOM 节点的变化来触发回调，是一种微任务。
    3. setImmediate
    4. setTimeout
- Vue2 与 Vue3 的实现差异
    - Vue2：闭包封装，包含完整的降级策略。
    - Vue3：整合到调度器中。统一管理，Vue 能更精准地控制任务执行的先后顺序。

## 响应式原理
### 完整工作流程
1. Vue 实例创建时，Observer 会遍历 data 对象进行劫持。
2. 依赖收集 (在 getter 中)
3. 派发更新 (在 setter 中)
### 优缺点
- Vue3 使用 ES6 的 Proxy 对象。
    - 无法兼容旧版浏览器
- Vue2 使用 ES5 的  Object.defineProperty()
    - 在 getter 收集依赖
    - 在 setter 通知
    - 新增或删除属性无能为力
    - 法监听数组索引的变化

## 什么是虚拟DOM？它的作用是什么？
- 将真实DOM，通过算法，转化为对象树
- 作用：提高性能

## Diff算法工作原理

### 题目: 什么是虚拟DOM？它的作用是什么？Vue的Diff算法是如何工作的？
参考答案: 虚拟DOM是一个用JS对象来描述真实DOM结构的数据结构。它的作用是将真实的DOM操作抽象成JS运算，通过高效的Diff算法比较新旧虚拟DOM树的差异，最终只把“差异”部分应用到真实的DOM上，从而最小化DOM操作，提升性能。Diff算法的核心是在同层级节点间进行比较（同层比较），通过key值来快速识别节点是否可以复用，以减少不必要的节点创建和销毁。
Diff算法细节

### 题目: Vue的Diff算法是怎样的？它发生在什么时候？key的作用是什么？
参考答案: 同上，强调其发生在组件重新渲染时。Key的作用是作为节点的唯一标识，帮助Diff算法准确判断一个节点是移动、复用还是需要被销毁重建，这对于列表渲染的性能至关重要，可以避免因数据顺序变化导致的错误复用。
# 二、 API与开发模式
这是最常被问到的部分，主要考察对两种API的熟练度和优缺点的理解。
Options API vs Composition API

### 题目: Vue2 的 Options API 和 Vue3 的 Composition API 有什么区别？各自的优势是什么？你更倾向于哪种？
参考答案:
Options API: 将代码按照选项（data, methods, computed, watch, 生命周期等）进行分类，结构清晰，但当组件逻辑复杂时，相关的代码会被分散到各个选项中，不利于维护。
Composition API: 允许将与同一功能相关的代码组织在一起，逻辑内聚性更高，更易于理解和维护，尤其适合大型组件。它还更好地支持了TypeScript的类型推导。
生命周期

### 题目: Vue2 和 Vue3 的生命周期钩子函数有哪些？它们的主要区别是什么？
参考答案: 整体流程相似。主要区别在于：
Vue3 中，beforeCreate 和 created 被 <script setup> 语法中的 setup() 函数所取代。
Vue3 的生命周期钩子函数名统一加上了 on 前缀（如 beforeMount -> onBeforeMount），并且在使用 Composition API 时，需要从 vue 中显式导入（如 import { onMounted } from 'vue'）。
模板语法

### 题目: Vue2 和 Vue3 在模板方面有什么主要差异？
参考答案: 最显著的差异是 Fragment，即Vue3的模板支持多个根节点，不再强制要求只有一个唯一的根元素。
# 三、 数据处理与状态管理
Ref vs Reactive

### 题目: 在Vue3中，ref 和 reactive 有什么区别？分别在什么场景下使用？
参考答案:
ref: 用于包装基本数据类型（number, string, boolean等）或独立的响应式引用。在模板中使用时，会自动解包 .value。
reactive: 用于创建一个响应式的对象或数组。它返回的是原始对象的代理，不能用 = 赋新值，否则会失去响应性。通常用于包装对象。
Computed vs Watch

### 题目: computed 和 watch 有什么区别？分别适用于什么场景？
参考答案:
computed: 有缓存。只有当它依赖的数据发生变化时，才会重新计算。适用于根据已有数据计算出一个新值的场景。
watch: 用于观察一个或多个数据的变化，并在变化时执行副作用（如发起网络请求、执行异步操作）。没有缓存，数据变化就会执行。适用于需要在数据变化时执行异步或开销较大的操作。
状态管理 (Vuex vs Pinia)

### 题目: Vue2 和 Vue3 推荐的状态管理模式分别是什么？它们有什么区别？
参考答案: Vue2 主要使用 Vuex。Vue3 推荐使用 Pinia。Pinia 的优势在于：API更简洁、对TypeScript支持更友好、支持模块化、不需要像Vuex那样使用 modules 来分割状态，树摇（tree-shaking）使其体积更小。
# 四、 组件化与通信
Props & Custom Events

### 题目: Vue中父子组件通信的方式有哪些？
参考答案: 父传子通过 props；子传父通过 $emit 触发自定义事件。
组件通信高级方案

### 题目: 除了props和 $ emit，还有哪些组件通信方式？请说明它们的适用场景。
参考答案:
Provide / Inject: 用于祖孙组件间的通信，可以跨层级传递数据，避免逐层props。
Event Bus / Mitt: 用于非父子关系的任意组件通信，但在Vue3中由于移除了$on, $off，官方推荐使用第三方库如 mitt。
Vuex / Pinia: 全局状态管理，适用于多组件共享状态的场景。
Slots (插槽)

### 题目: Vue的插槽（Slot）有哪几种？作用域插槽的用途是什么？
参考答案:
默认插槽: <slot></slot>
具名插槽: 通过 name 属性区分 <template #header>...</template>
作用域插槽: 子组件可以向父组件传递数据，允许父组件根据子组件的数据来定制化渲染内容，实现了子向父的数据传递。
# 五、 性能优化与工程实践
性能优化策略

### 题目: 如何优化Vue项目的性能？可以从哪些方面入手？
参考答案:
代码层面: 合理使用 v-if 和 v-show；利用 computed 缓存计算结果；为 v-for 添加唯一的 key；使用防抖（debounce）和节流（throttle）处理频繁事件。
组件层面: 使用 keep-alive 缓存不常改变的组件；采用组件懒加载（路由懒加载）。
构建层面: 启用Gzip压缩；合理使用CDN；进行代码分割（Code Splitting）。
Keep-Alive

### 题目: keep-alive 组件的作用是什么？它会带来哪些生命周期钩子的变化？
参考答案: keep-alive 用于包裹动态组件，缓存其组件实例，而不是销毁和重新创建，以此来优化性能。当组件被 keep-alive 包裹时，会增加 activated 和 deactivated 两个生命周期钩子，分别在组件被激活和停用时调用。
项目迁移与配置

### 题目: 从Vue2迁移到Vue3，可能会遇到哪些主要问题？
参考答案: API的变更（如全局API的挂载方式、事件系统的改变）；第三方库的兼容性；生命周期钩子的调整；构建工具（Vite vs Vue CLI）的切换等。
# 六、 生态与周边
构建工具

### 题目: Vue2 和 Vue3 的主流构建工具分别是什么？它们的特点是什么？
参考答案: Vue2 通常使用 Vue CLI，基于 Webpack，功能强大但配置相对复杂。Vue3 推荐使用 Vite，基于原生ES模块，启动速度快，热更新迅速，开发体验更佳。
TypeScript 支持

### 题目: Vue3 在 TypeScript 支持方面相比 Vue2 有哪些改进？
参考答案: Vue3 使用 TypeScript 重写，提供了更完善的类型推导和提示。Composition API 的设计也更有利于进行类型约束，开发体验和代码健壮性得到了极大提升。