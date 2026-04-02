# 基础
## `<!DOCTYPE html>` 的作用是什么？
- 声明文档类型，告知浏览器是什么文档类型。

## 什么是HTML语义化？为什么要使用语义化标签？
- 语义化：是指根据内容的结构和意义选用恰当的HTML标签。
- 好处：提升代码可读性和可维护性；增强SEO，利于爬虫解析。
- 常见语义化标签：`<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`, `<aside>`, `<main>`, `<figure>`, `<figcaption>`, `<time>`, `<mark>`

## 行内元素、块级元素和行内块元素的区别？
- 块级元素：独占一行，可以设置宽高。（div, p, h1-h6, ul, li 等）
- 行内元素：与其他元素在同一行，宽高由内容决定，不可设置。（span, a, strong 等）
- 行内块元素：可以与其他元素在同一行，可以设置宽高。（img, input, button 等）

## `<script>` 标签放在 `<head>` 和 `<body>` 底部有什么区别？defer 和 async 属性有什么用？
- 区别：放 head 会阻塞渲染。最好放在 `<body>` 标签的底部。
- defer：DOM 解析完成后执行，适合外部脚本。（推荐）
- async：下载完立即执行，可能阻塞 DOM。（不保证顺序）

## `<img>` 标签的 alt 和 title 属性有何异同？
- alt：图片无法加载时的替代文本，对 SEO 和可访问性至关重要。
- title：鼠标悬停时显示的提示文本。

## HTML5带来了哪些新特性？
- 语义化标签：header, footer, nav, article, section, aside, main 等
- 多媒体支持：`<audio>`, `<video>`
- Canvas & SVG 图形绘制
- 本地存储：localStorage, sessionStorage, indexedDB
- 表单增强：新的输入类型（email, date, number 等）和验证属性（required, pattern 等）
- 地理定位：Geolocation API
- Web Workers：后台运行脚本，不阻塞主线程
- WebSocket：全双工通信，服务器主动推送
- History API：操作浏览器历史记录
- Web Components：`<template>`, `<slot>`, 自定义元素

## src 和 href 的区别是什么？
- src (Source)：替换当前元素内容，浏览器会暂停解析。（用于 img, script, iframe 等）
- href (Hypertext Reference)：建立当前文档与外部资源的链接，不会阻塞文档解析。（用于 link, a 等）

## `<template>` 和 `<slot>` 有什么用？
- `<template>`：定义 HTML 模板，内容不会直接渲染，可通过 JS 克隆使用
- `<slot>`：Web Components 中的插槽，用于接收自定义元素的嵌套内容
```html
<template id="my-card">
  <style>.card { border: 1px solid #ccc; padding: 16px; }</style>
  <div class="card">
    <slot name="title">默认标题</slot>
    <slot name="content">默认内容</slot>
  </div>
</template>

<my-card>
  <span slot="title">自定义标题</span>
  <p slot="content">自定义内容</p>
</my-card>
```
```js
const clone = document.getElementById('my-card').content.cloneNode(true);
document.body.appendChild(clone);
```

## 主流浏览器及其内核分别是什么？
- Chrome / Opera: Blink（Webkit 的分支）
- Safari: Webkit
- Firefox: Gecko
- IE: Trident

## `<meta>` 标签的作用是什么？常见属性有哪些？
- 提供关于 HTML 文档的元数据
- 常见属性：`charset`（字符集）、`name`（描述/关键词）、`http-equiv`（HTTP 头）
```html
<meta charset="UTF-8">
<meta name="description" content="页面描述">
<meta name="keywords" content="关键词1, 关键词2">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## data-* 自定义属性有什么用？
- 用于存储页面或应用程序的私有数据
- 命名规范：`data-` 开头，后跟任意小写字母和数字
- 获取方式：`element.dataset.属性名`（驼峰式）或 `getAttribute('data-xxx')`
```html
<div data-user-id="123" data-user-name="张三">用户</div>
```
```js
console.log(div.dataset.userId);   // "123"
console.log(div.dataset.userName); // "张三"
```

## 从HTML层面，如何优化页面加载速度？
- 减少不必要的 HTML 标签，保持代码精简
- CSS 放在 `<head>` 中，JS 放在 `</body>` 底部
- 图片使用懒加载（`loading="lazy"`）和适当格式（WebP, AVIF）
- 响应式图片：`<picture>` 或 `srcset`
- 减少 HTTP 请求：合并 CSS/JS 文件
- 使用资源提示：`dns-prefetch`, `preconnect`, `preload`, `prefetch`
- 关键 CSS 内联，减少关键渲染路径

## `<input>` 标签的常见 type 类型有哪些？
- 文本类：text, password, email, number, tel, url, search
- 选择类：checkbox, radio, file
- 日期时间：date, time, datetime-local, month, week
- 其他：hidden, submit, reset, button, image, range, color

## 表单高级特性有哪些？
- `autocomplete`：启用浏览器自动填充（on/off）
- `autofocus`：页面加载时自动聚焦
- `datalist`：为 input 提供建议选项
- 原生验证：`required`, `pattern`（正则）, `min`, `max`, `maxlength`
- JS 验证：`checkValidity()`, `setCustomValidity()`
- 按钮属性：`formaction`, `formenctype`, `formmethod`, `formtarget`
```html
<input list="browsers" name="browser" autocomplete="on">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
</datalist>
```

# 进阶
## LocalStorage, SessionStorage 和 Cookie 的区别
| 特性 | Cookie | LocalStorage | SessionStorage |
|------|--------|--------------|----------------|
| 容量 | 4KB | 5MB+ | 5MB+ |
| 作用域 | 随请求发送 | 跨标签页 | 当前标签页 |
| 过期 | 可设置 | 永不过期 | 关闭即失效 |
| 操作 | 服务端可读写 | 仅客户端 | 仅客户端 |

## `<canvas>` 和 `<svg>` 的区别
- `<canvas>`：基于像素的位图，通过 JS API 绘制。适合游戏、图表、图像处理。
- `<svg>`：基于 XML 的矢量图，图形由标签定义，缩放不失真，适合图标和 UI。

## `<iframe>` 的优缺点及跨域通信
- 优点：嵌入外部页面/广告，实现内容复用，脚本隔离
- 缺点：影响加载速度，不利于 SEO，安全性问题（点击劫持）
- 通信：使用 `postMessage` API
```js
// 发送
iframe.contentWindow.postMessage('message', 'https://example.com');
// 接收
window.addEventListener('message', (e) => {
  if (e.origin === 'https://example.com') console.log(e.data);
});
```

## HTML 性能优化
- **HTML 结构**：语义化标签、正确 DOCTYPE、合理标题层级、减少嵌套
- **CSS 优化**：放在 `<head>` 避免 FOUC、关键 CSS 内联、使用媒体查询
- **JS 优化**：放在 `</body>` 底部、使用 defer/async、代码分割和懒加载
- **图片优化**：WebP/AVIF 格式、响应式图片(srcset)、懒加载(loading="lazy")
- **渲染优化**：减少 DOM 查询、批量操作、使用 DocumentFragment
- **缓存策略**：
  - HTTP 缓存：Cache-Control, ETag（静态资源强缓存，API 协商缓存）
  - 浏览器缓存：localStorage/sessionStorage, Service Worker
- **网络优化**：Gzip/Brotli 压缩、CDN 加速

## 资源提示 (Resource Hints)
| 属性 | 作用 | 优先级 |
|------|------|--------|
| dns-prefetch | 提前 DNS 解析 | 低 |
| preconnect | 提前建立 TCP/TLS 连接 | 中 |
| preload | 预加载当前页面必需资源 | 高 |
| prefetch | 预取下一页面可能用到的资源 | 低 |
| prerender | 预渲染整个页面 | 低 |
```html
<link rel="dns-prefetch" href="//example.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preload" href="main.js" as="script">
```

## 如何防范 XSS 和 CSRF？
- **XSS 防范**：输入验证过滤、输出编码转义、使用现代框架、设置 CSP、将 Cookie 设为 HttpOnly
- **CSRF 防范**：使用 CSRF Token、敏感操作二次验证（如支付、修改密码）

## ARIA 属性有什么用？
- ARIA (Accessible Rich Internet Applications)：增强残障用户对网页的可访问性
- 常见属性：
  - `role`：定义元素作用（button, navigation, dialog 等）
  - `aria-label`：为元素提供可访问标签
  - `aria-hidden`：隐藏元素（不渲染为可访问树）
  - `aria-expanded`：展开/折叠状态
  - `aria-describedby`：关联描述信息

## History API 实现 SPA 路由
```js
// 切换路由
history.pushState({ page: 1 }, '', '/page1');
history.replaceState({ page: 2 }, '', '/page2');

// 监听前进/后退
window.addEventListener('popstate', (e) => {
  console.log(e.state);
});
```

## Viewport meta 标签配置
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```
- width：视口宽度（device-width）
- initial-scale：初始缩放比例
- maximum-scale：最大缩放比例
- user-scalable：是否允许缩放（no）

## `<link>` 标签的 rel 属性常见值
- stylesheet：样式表
- icon：网站图标
- canonical：规范化链接（SEO）
- manifest：PWA 清单文件
- preload/prefetch/dns-prefetch/preconnect：资源提示

## SEO 优化有哪些 HTML 手段？
- 语义化标签：正确使用 h1-h6、header、nav、main 等
- meta 标签：title、description、keywords
- 结构化数据：Schema.org (JSON-LD)
- canonical：避免重复内容
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "示例网站"
}
</script>
```

## `<base>` 标签有什么用？
- 为页面所有相对 URL 设置基准 URL，只能有一个，放在 `<head>` 中
```html
<base href="https://example.com/images/" target="_blank">
<a href="logo.png">logo</a> <!-- 指向 https://example.com/images/logo.png -->
```

## HTML5 全局属性
- contenteditable：元素内容可编辑（true/false）
- hidden：隐藏元素（等同于 display: none）
- draggable：元素可拖拽（true/false/auto）
- spellcheck：启用拼写检查
- tabindex：Tab 键导航顺序（-1 跳过）
- translate：是否翻译内容（yes/no）

## `<video>` 和 `<audio>` 常用属性
- 通用：controls, autoplay, loop, muted, preload
- video 专属：poster（封面图）, width, height
```html
<video src="movie.mp4" controls muted poster="poster.jpg" preload="auto"></video>
<audio src="music.mp3" controls loop preload="metadata"></audio>
```

## `<noscript>` 标签有什么用？
- JS 被禁用时显示的备选内容，可放在 `<head>` 或 `<body>` 中
```html
<noscript>
  <p>请启用 JavaScript 以获得最佳体验</p>
</noscript>
```

## 什么是事件委托？有什么好处？
- 原理：把事件监听器绑定到父元素，利用冒泡机制处理子元素事件
- 好处：减少监听器数量；动态添加的子元素自动获得事件处理
```js
// 传统方式：每个 li 都有监听器
document.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', handleClick);
});

// 事件委托：只绑定一个监听器
ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') handleClick(e.target);
});
```

## 浏览器解析 HTML 的过程
1. 字节 → 字符：字节流解码
2. 字符 → Token：解析为令牌（开始标签、结束标签、文本等）
3. Token → Node：令牌转换为 Node 对象
4. Node → DOM 树：按嵌套关系构建树形结构
- 同时：CSS 解析为 CSSOM，与 DOM 合并生成渲染树
- 特点：增量解析，遇到 `<script>` 会阻塞（除非 defer/async）

## 什么是可替换元素？有哪些？
- 定义：元素内容由外部资源替换（src, href 等属性）
- 常见：img, video, audio, iframe, canvas, svg, input, object
- 特点：CSS content 属性无效；宽高默认由内容决定；表现类似行内块
