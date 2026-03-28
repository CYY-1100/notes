# 基础语法与概念
## 选择器优先级
- `!important`的优先级最大。
- `内联`样式表的`权重值`为1000。
- `id`选择器的权重值为100。
- `类 .class`选择器的权值为10。
- `元素 p`选择器的优先级为1。
- `通配符 *`选择器的优先级为0。
> 当`权值相等`时，`后定义优于先定义`的样式表。
> 在同一组属性设置中表有`!important`规则的优先级最大。

## `!important` 的作用及其副作用。
- 难以维护和调试
- 与CSS的设计原则相悖
- 阻碍样式的可扩展性。其他地方覆盖这个样式，也必须使用 !important

## 基础选择器
- 元素 p
- 类 .class
- ID #id
- 通用：*

## 组合选择器
- 后代 .class p
- 子 .class > p
- 相邻 h2 + p
- 兄弟 h2 ~ p

## 属性选择器
- [title]

## 伪类和伪元素选择器
- ：hover
- ：：before

## 标准盒模型 (content-box) 与 IE 盒模型 (border-box) 的区别是什么？
- 标准盒模型：内容 + padding + border + margin
- IE盒模型：width(内容 + padding + border) + margin

## 如何通过 box-sizing 属性切换？
- box-sizing: content-box;
- box-sizing: border-box;(IE 盒模型)

## 单位换算
- px: 像素。
- pt：点。全称为 Point。
- pc: 派卡。1pc = 12pt。
- cm: 厘米。1cm = 37.8px。
- mm: 毫米。1mm = 3.78px。
- in: 英寸。1in = 96px。

## em 和 rem 在字体大小计算上的差异。
- em: 相对于`父元素的字体`大小。
- rem: 相对于`根元素的字体`大小。字体和间距优先使用 rem。移动端适配常用 rem 或 vw；字体大小常用 rem 以便缩放。

## Grid 与 Flexbox 的最佳适用场景区别。
- 维度。Flexbox 擅长一维布局， Grid 擅长二维布局
- 适用场景对比。线性内容流或动态组件时，Flexbox 是首选。

## 如何隐藏一个元素？
- display: none。从文档流中移除，不占据任何空间。触发重排。子元素也会隐藏。
- visibility: hidden。仍占据原有空间。触发重绘，不触发重排。
- opacity: 0。元素完全透明，但仍占据空间且存在于文档流中。

## link 和 @import 的区别？
- 归属不同。`<link>`: 是 HTML (XHTML) 标签；@import: 是 CSS 规则；
- 加载行为与性能。`<link>`: 并行加载（可以同时下载）。@import: 串行加载；
- `<link>`: 优先级通常高于 @import。
- `<link>`: 功能丰富，还可以定义图标 (rel="icon")、RSS 订阅、预加载资源 (rel="preload")、DNS 预解析 (rel="dns-prefetch") 等。@import只能用于导入样式表。
- `<link>`: 兼容性极好
- @import在移动网络或慢速网络下的性能表现糟糕。

# 布局、定位与实战
## 元素水平垂直居中
- Flex布局。display: flex;justify-content: center; align-items: center; 
- Grid布局。display: grid; place-items: center;
- position + transform布局。适用旧浏览器

## 谈谈对 BFC (块级格式化上下文) 的理解及应用场景？

## Flex 布局常用属性有哪些？flex: 1 代表什么？
- flex-direction, justify-content, align-items, flex-wrap
```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
```

## 浮动（Float）的原理及清除浮动的方法？

## position 的值有哪些？fixed 和 absolute 的定位参照物是什么？


# 架构、性能、新特性与原理
## CSS 性能优化有哪些手段？
- 减少选择器层级
- 避免通配符 * 的全局高频计算。
- 利用 GPU 加速（transform, opacity 触发合成层，避免触发布局重排）。
- 提取公共样式，减少文件大小。
- 使用 will-change 需谨慎。

## 讲讲 CSS 变量的作用域及与 JS 的交互？
- 考点：:root 全局作用域 vs 局部作用域、级联特性（可被覆盖）。
- JS 交互：getComputedStyle().getPropertyValue() 获取，element.style.setProperty() 修改。
- 场景：主题颜色切换。

## 最新 CSS 特性

## 键渲染路径（CRP）中 CSS 的影响？什么是 FOUC？

## CSS 模块化与样式隔离方案有哪些？

## 手写代码题示例：
- 画一个三角形。
- 实现一个圣杯布局或双飞翼布局。
- 实现一个自适应的正方形。
- 用纯 CSS 实现一个 Loading 动画。
- 实现文本超出省略号（单行/多行）。
