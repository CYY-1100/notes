# 选择器优先级
- `!important`的优先级最大。
- `内联`样式表的`权重值`为1000。
- `id`选择器的权重值为100。
- `类 .class`选择器的权值为10。
- `元素 p`选择器的优先级为1。
- `通配符 *`选择器的优先级为0。
> 当`权值相等`时，`后定义优于先定义`的样式表。
> 在同一组属性设置中表有`!important`规则的优先级最大。

# `!important` 的作用及其副作用。
- 难以维护和调试
- 与CSS的设计原则相悖
- 阻碍样式的可扩展性。其他地方覆盖这个样式，也必须使用 !important

# 基础选择器
- 元素 p
- 类 .class
- ID #id
- 通用：*

# 组合选择器
- 后代 .class p
- 子 .class > p
- 相邻 h2 + p
- 兄弟 h2 ~ p

# 属性选择器
- [title]

# 伪类和伪元素选择器
- ：hover
- ：：before

# 标准盒模型 (content-box) 与 IE 盒模型 (border-box) 的区别是什么？
- 标准盒模型：内容 + padding + border + margin
- IE盒模型：width(内容 + padding + border) + margin

# 如何通过 box-sizing 属性切换？
- box-sizing: content-box;
- box-sizing: border-box;(IE 盒模型)

# 单位换算
- px: 像素。
- pt：点。全称为 Point。
- pc: 派卡。1pc = 12pt。
- cm: 厘米。1cm = 37.8px。
- mm: 毫米。1mm = 3.78px。
- in: 英寸。1in = 96px。

# em 和 rem 在字体大小计算上的差异。
- em: 相对于`父元素的字体`大小
- rem: 相对于`根元素的字体`大小

#  3 种实现水平垂直居中
- Flex布局。display: flex;justify-content: center; align-items: center; 
- Grid布局。display: grid; place-items: center;
- position + transform布局。适用旧浏览器

# Grid 与 Flexbox 的最佳适用场景区别。
- 维度。Flexbox 擅长一维布局， Grid 擅长二维布局
- 适用场景对比。线性内容流或动态组件时，Flexbox 是首选。

# flex: 1;是哪些属性的简写
```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
```

# 纯 CSS 画三角形、圆形、扇形、对话框气泡。
