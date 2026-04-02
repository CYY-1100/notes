# CSS 基础

## 初级
### 选择器
```css
/* 基础选择器 */
p { }           /* 元素选择器 */
.class { }      /* 类选择器 */
#id { }         /* ID选择器 */
* { }           /* 通配符选择器 */

/* 组合选择器 */
.class p { }     /* 后代选择器 */
.class > p { }   /* 子选择器 */
h2 + p { }       /* 相邻选择器 */
h2 ~ p { }       /* 兄弟选择器 */

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

### 优先级
| 选择器 | 权重 |
|------------|------|
| !important | 最高 |
| 内联样式   | 1000 |
| #id       | 100 |
| .class    | 10 |
| 元素       | 1 |
| *         | 0 |

### 盒模型
| 模型 | width 包含 |
|------|------------|
| content-box（标准） | 仅内容 |
| border-box（IE） | 内容 + padding + border |

### 隐藏元素
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
| ch/ex | 相对 | 相对于字体尺寸 |
| pt/pc/in | 绝对 | 打印单位（1in = 96px） |

### link vs @import
- link：HTML 标签，并行加载
- @import：串行加载，会阻塞渲染

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

### position 定位
| 值 | 参照 | 说明 |
|----|------|------|
| static | - | 默认 |
| relative | 自身 | 占据空间 |
| absolute | 最近定位祖先 | 脱离文档流 |
| fixed | 视口 | 脱离文档流 |
| sticky | 视口/父元素 | 阈值前固定 |

### BFC（块级格式化上下文）

#### 触发条件
overflow, float, position: absolute/fixed, display: flex/inline-flex/inline-block/grid

#### 特性
- 内部垂直排列
- 外边距合并
- 清除浮动
- 不被浮动覆盖

### 浮动
元素脱离文档流，向左/右移动。

#### 清除浮动
```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

### CSS 变量
```css
:root { --color: red; }
.class { --size: 10px; }
color: var(--color);
```
```js
el.style.setProperty('--color', 'blue');
getComputedStyle(el).getPropertyValue('--color');
```

### 响应式
```css
@media (max-width: 768px) { }   /* 手机 */
@media (min-width: 769px) { }   /* 平板 */
```

## 高级
### 层叠上下文
HTML 元素在三维空间中按层叠顺序排列，层叠上下文就是这个层级的容器。

#### 触发条件
- 根元素
- position + z-index
- opacity < 1
- transform/filter/will-change

#### 层叠级别（从低到高）
1. 背景/边框
2. z-index < 0
3. 块级盒子
4. 浮动盒子
5. inline
6. z-index: 0/auto
7. z-index > 0

### 性能优化
- 选择器层级 < 3
- 避免通配符 *
- transform/opacity GPU 加速
- will-change 提升合成层（谨慎）
- 提取公共样式

### 关键渲染路径

#### CSS 阻塞渲染
- 必须等 CSS 加载完成
- 避免 @import

#### FOUC（无样式内容闪烁）
- 原因：CSS 加载晚于 HTML
- 解决：CSS 放在 `<head>` 中

### CSS 模块化
| 方案 | 说明 |
|------|------|
| BEM | block__element--modifier |
| CSS Modules | 编译时唯一类名 |
| styled-components | JS 中写 CSS |
| Tailwind CSS | 原子化 CSS |

### 新特性
```css
/* 容器查询 */
@container (min-width: 300px) { }

/* :has() 父选择器 */
button:has(.icon) { }

/* clamp() */
font-size: clamp(14px, 2vw, 24px);

/* 嵌套 */
.parent {
  &:hover { }
}
```

### 动画
```css
/* transition */
transition: all 0.3s ease;

/* @keyframes */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
animation: spin 1s infinite;
```

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
