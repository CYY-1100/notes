# HTML 基础

## 初级

### 文档结构
- `<!DOCTYPE html>`：声明文档类型，告知浏览器按 HTML5 规范解析
- 浏览器内核：Chrome/Opera(Blink), Safari(Webkit), Firefox(Gecko), IE(Trident)

### 元素分类
| 类型 | 特征 | 示例 |
|------|------|------|
| 块级 | 独占一行，可设宽高 | div, p, h1-h6, ul, li |
| 行内 | 共处一行，宽高由内容决定 | span, a, strong, em |
| 行内块 | 共处一行，可设宽高 | img, input, button |

### 语义化
根据内容结构选用恰当的标签，提升可读性、可维护性、SEO 效果。
常见标签：header, footer, nav, article, section, aside, main, figure, figfigcaption

### 常用标签
- `<meta>`：字符集、描述、视口
- `<link>`：引入样式表、图标
- `<script>`：脚本加载（defer/async）
- `<img>`：alt（替代文本）、title（悬停提示）
- `<video>` / `<audio>`：controls, autoplay, loop, muted

### 表单基础
- input type：text, password, email, number, checkbox, radio, file, date
- 验证属性：required, pattern, min, max

### 存储基础
- Cookie：4KB，随请求发送，可设过期
- LocalStorage：5MB+，永不过期
- SessionStorage：5MB+，关闭即失效

---

## 中级

### HTML5 新特性
- **语义化**：新增 header, footer, nav, article, section, aside, main
- **多媒体**：`<audio>`, `<video>`
- **图形**：Canvas（位图）, SVG（矢量图）
- **存储**：localStorage, sessionStorage, indexedDB
- **表单增强**：新 input 类型、新验证属性
- **组件**：`<template>`, `<slot>`

### 标签属性
| 属性 | 说明 |
|------|------|
| src vs href | src 替换内容阻塞解析；href 建立链接不阻塞 |
| data-* | 自定义数据属性，JS 通过 dataset 获取 |
| contenteditable | 可编辑元素 |
| hidden | 隐藏元素 |
| draggable | 可拖拽 |
| tabindex | Tab 键导航顺序 |

### Canvas vs SVG
- Canvas：位图，JS API 绘制，适合游戏/图表
- SVG：矢量图，标签定义，缩放不失真，适合图标/UI

### History API
```js
history.pushState(state, '', '/page1');
history.replaceState(state, '', '/page2');
window.addEventListener('popstate', e => console.log(e.state));
```

### `<iframe>` 跨域通信
```js
iframe.contentWindow.postMessage('data', 'https://example.com');
window.addEventListener('message', e => {
  if (e.origin === 'https://example.com') console.log(e.data);
});
```

### 事件委托
将事件绑定到父元素，利用冒泡处理子元素事件，减少监听器数量。
```js
parent.addEventListener('click', e => {
  if (e.target.tagName === 'LI') handleClick(e.target);
});
```

### ARIA 属性
role, aria-label, aria-hidden, aria-expanded, aria-describedby

---

## 高级

### 性能优化

#### 加载优化
- CSS 放在 `<head>`，JS 放在 `</body>` 底部
- defer（按顺序）/ async（无序）异步加载
- 图片懒加载 `loading="lazy"`、WebP/AVIF 格式
- 响应式图片：`<picture>` 或 `srcset`

#### 资源提示
| 属性 | 作用 | 优先级 |
|------|------|--------|
| dns-prefetch | DNS 预解析 | 低 |
| preconnect | TCP/TLS 预连接 | 中 |
| preload | 预加载当前页必需资源 | 高 |
| prefetch | 预取下一页面资源 | 低 |
| prerender | 预渲染整个页面 | 低 |

#### 渲染优化
- 减少 DOM 查询，批量操作
- DocumentFragment 减少重排重绘
- 关键 CSS 内联，减少关键渲染路径

#### 缓存策略
- HTTP 缓存：Cache-Control, ETag（静态资源强缓存，API 协商缓存）
- 浏览器缓存：localStorage, Service Worker
- Gzip/Brotli 压缩，CDN 加速

### 安全

#### XSS 防范
- 输入验证过滤、输出编码转义
- CSP 内容安全策略
- Cookie HttpOnly

#### CSRF 防范
- CSRF Token（最有效）
- 敏感操作二次验证

### 浏览器解析过程
1. 字节 → 字符（解码）
2. 字符 → Token（标记化）
3. Token → Node（节点化）
4. Node → DOM 树（构建）
5. CSS → CSSOM，与 DOM 合并生成渲染树

> 特点：增量解析，遇到 `<script>` 阻塞（defer/async 除外）

### SEO 优化
- 语义化标签：正确使用 h1-h6、header、nav、main
- meta 标签：title、description、keywords
- 结构化数据：Schema.org (JSON-LD)
- canonical：避免重复内容

### 可替换元素
- 定义：内容由外部资源替换（img, video, audio, iframe, canvas, svg, input, object）
- 特点：CSS content 无效；表现类似行内块

### IndexedDB
- 浏览器端大型数据库，支持索引
- 异步 API，操作需要事务
- 存储结构化数据，容量远大于 localStorage
