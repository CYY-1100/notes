# CSS 基础

## 初级
### 什么是 CSS？
- 全称：Cascading Style Sheets（层叠样式表）
- 作用：美化 HTML 页面，控制颜色、字体、间距、布局等。
- 与 HTML 的关系：HTML 是“骨架”，CSS 是“皮肤”。

### CSS 的引入方式
- 行内样式：`<p style="color: red;">`
- 内部样式表：`在 <head> 中 <style> 标签写`
- 外部样式表：`<link rel="stylesheet" href="style.css">`

### 选择器
```css
/* 基础选择器 */
p { }           /* 元素选择器 */
.class { }      /* 类选择器 */
#id { }         /* ID选择器 */
* { }           /* 通配符选择器 */

/* 组合选择器 */
.class p { }     /* 后代选择器（子孙都可以） */
.class > p { }   /* 子选择器（子） */
h2 + p { }       /* 相邻选择器（最近一个） */
h2 ~ p { }       /* 兄弟选择器（全部） */

/* 属性选择器 */
[title] { }              /* 有属性 */
[title="hello"] { }      /* 完全匹配 */
[title^="hello"] { }     /* 开头 */
[title$="hello"] { }     /* 结尾 */
[title*="hello"] { }     /* 包含 */

/* 伪类选择器 */
:hover { }              /* 悬停 */
:focus { }              /* 聚焦 */
:first-child { }        /* 第一个子元素 */
:nth-child(n) { }       /* 第 n 个 */
:not(selector) { }      /* 否定 */

/* 伪元素 */
::before { content: ""; }   /* 前插入 */
::after { content: ""; }    /* 后插入 */
```

### 选择器权重
| 选择器 | 权重 |
|------------|------|
| !important | 最高 |
| 内联样式   | 1000 |
| #id       | 100 |
| .class    | 10 |
| 元素       | 1 |
| *         | 0 |

### 盒模型是什么？
| 模型 | width 包含 |
|------|------------|
| content-box（标准） | 仅内容 |
| border-box（IE） | 内容 + padding + border |

### 隐藏元素有哪些方式？
| 属性 | 空间 | 渲染 |
|------|------|------|
| display: none | 不占据 | 触发重排 |
| visibility: hidden | 占据 | 仅重绘 |
| opacity: 0 | 占据 | 不触发 |

### 单位
| 单位 | 类型 | 说明 |
|------|------|------|
| px | 绝对 | 像素 |
| em | 相对 | 相对于父元素字体大小 |
| rem | 相对 | 相对于根元素字体大小 |
| vw/vh | 相对 | 视口宽/高的 1% |
| vmin/vmax | 相对 | 视口较小/较大边的 1% |
| % | 相对 | 相对于父元素 |

### link vs @import
- link：HTML 标签，并行加载
- @import：串行加载，会阻塞渲染

### CSS 阻塞渲染
- 必须等 CSS 加载完成
- 避免 @import

### FOUC（无样式内容闪烁）
- 原因：CSS 加载晚于 HTML
- 解决：CSS 放在 `<head>` 中

### css属性值的计算过程
- 层叠
- 继承
### 视觉格式化模型
- 盒模型
- 包含块

## 中级
### Flex 布局
```css
/* 容器 */
display: flex;
flex-direction: row | column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 10px;

/* 项目 */
flex-grow: 1;      /* 放大，0 不放大 */
flex-shrink: 1;    /* 缩小，0 不缩小 */
flex-basis: auto;  /* 初始大小 */
flex: 1;           /* flex: 1 1 auto */
```

### Grid 布局
```css
display: grid;
grid-template-columns: 1fr 2fr 1fr;
grid-template-rows: 100px auto;
gap: 10px;
grid-column: span 2;  /* 跨列 */
```

### 水平垂直居中
```css
/* Flex */
display: flex;
justify-content: center;
align-items: center;

/* Grid */
display: grid;
place-items: center;

/* absolute */
position: absolute;
top: 50%; left: 50%;
transform: translate(-50%, -50%);
```

### 文本溢出
- 单行：text-overflow: ellipsis + white-space: nowrap
- 多行文本: 使用 -webkit-line-clamp（现代最佳实践）

### CSS 变量（Custom Properties）

### 层叠级别（从低到高）
1. 背景/边框
2. z-index < 0
3. 块级盒子
4. 浮动盒子
5. inline
6. z-index: 0/auto
7. z-index > 0

### 为什么 z-index：9999 没生效？
- 它的父元素可能创建了一个新的层叠上下文，且父元素的 z-index 很低（比如 1）。

### CSS 动画与过渡
- Transition（过渡）
- Animation（关键帧动画）

### position 定位
| 值 | 参照 | 说明 |
|----|------|------|
| static | - | 默认 |
| relative | 自身 | 占据空间 |
| absolute | 最近定位祖先 | 脱离文档流 |
| fixed | 视口 | 脱离文档流 |
| sticky | 视口/父元素 | 阈值前固定 |

### BFC（块级格式化上下文）
一个独立的布局容器，内部元素按照特定规则排列，且不会影响外部其他元素。

#### BFC的核心作用
- 解决"浮动塌陷"问题。
- 阻止外边距折叠。
- 隔离布局干扰。

#### 触发条件
- `<html>` 页面默认的 BFC 容器。
- 浮动元素：float 值不为 none。
- 绝对定位元素：position 为 absolute 或 fixed。
- overflow：不为 visible 值时。
- display：flex/inline-flex/inline-block/grid等。


### 清除浮动的方式有哪些？
1. 伪元素 + clear: both（推荐：现代标准方案）
2. display: flow-root（现代方案）
3. 父元素设置 overflow: hidden/auto（）
```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

### 响应式
媒体查询是基于视口大小的，导致了组件复用性差的问题
```css
@media (max-width: 768px) { }   /* 手机 */
@media (min-width: 769px) { }   /* 平板 */
```

## 高级
围绕性能、可维护性、设计系统、浏览器原生能力替代 JS 等目标展开。

### CSS Grid 子网格（Subgrid）
- 解决嵌套 Grid 布局中对齐难题

### 容器查询（Container Queries）
- 取代媒体查询，实现组件级响应式。

### 锚点定位（Anchor Positioning）
- 传统锚点定位方式，通过 HTML 的 `<a>` 标签和 id 属性来实现。
- CSS position: anchor() (实验性功能)

### 性能优化
- 减少嵌套层级
- 选择器
  - ID 选择器性能最快
  - 类选择器很快（推荐）
  - 后代选择器: 比子选择器慢，优先使用子选择器 (>)
  - 避免通配符 *
- 提取公共样式，删除未使用的 CSS 和 请求数
- 使用 BEM、OOCSS 等方法论
- 避免触发过多的重排和重绘。
- 合理使用 z-index
- 利用现代 CSS 特性
  - 使用 Grid 和 Flexbox
  - 使用容器查询
- 关键路径渲染优化
  - 内联关键 CSS
  - 异步加载非关键 CSS
  - 避免 @import
- transform/opacity GPU 加速
- will-change 提升合成层（谨慎）

### 作用域样式（Scoped Styles）
- 通过 @scope 实现局部样式隔离（类似 Vue 的 scoped）

### CSS 模块化
| 方案 | 说明 |
|------|------|
| BEM | block__element--modifier |
| CSS Modules | 编译时唯一类名 |
| styled-components | JS 中写 CSS |
| Tailwind CSS | 原子化 CSS |

### CSS 新特性
| 特性分类 | 核心语法/属性 | 解决的问题 | 替代方案 |
| :--- | :--- | :--- | :--- |
| 逻辑查询 | `@container scroll-state(stuck)` | 检测导航栏是否吸顶 | JS 监听 scroll 事件 |
| 选择器 | `:has(.child)` | 根据子元素样式化父级 | JS 添加 class |
| 布局 | `grid-template-columns: subgrid` | 嵌套网格对齐 | 复杂的 Grid 计算 |
| 排版 | `text-wrap: balance` | 标题末尾孤行 | 手动 `<br>` 或 JS |
| 计算 | `@function` | 复用计算逻辑 | Sass/Less 预处理器 |
| 数据绑定| `width: attr(data-val, number)` | 数据驱动样式 | JS 操作 style 属性 |
| 动画 | `@starting-style` | 弹窗入场动画 | 复杂的 JS 动画库 |

### CSS 函数
| 函数 | 说明 | 示例 |
|------|------|------|
| calc() | 四则运算 | width: calc(100% - 20px) |
| min() | 取最小值 | width: min(50%, 300px) |
| max() | 取最大值 | width: max(50%, 300px) |
| clamp() | 范围限制 | font-size: clamp(14px, 2vw, 24px) |
| var() | CSS 变量 | color: var(--primary) |
| rgb() / rgba() | 颜色 | color: rgb(255, 0, 0) |
| hsl() / hsla() | 颜色 | color: hsl(0, 100%, 50%) |
| url() | 图片路径 | background: url('img.png') |
| attr() | 属性值 | content: attr(data-title) |
| color() | 色彩空间 | color: color(display-p3 1 0 0) |
