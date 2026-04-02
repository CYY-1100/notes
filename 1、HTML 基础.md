# 基础
## `<!DOCTYPE html>` 的作用是什么？
- 声明文档类型，告知浏览器是什么文档类型。

## 什么是HTML语义化？为什么要使用语义化标签？
- 语义化：是指根据内容的结构和意义选用恰当的HTML标签。
- 好处包括：提升代码可读性和可维护性；增强SEO，利于爬虫解析;

## HTML5新增了哪些语义化标签？
- `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`, `<aside>`, `<main>`, `<figure>`, `<figcaption>`

## 行内元素、块级元素和行内块元素的区别？
- 块级元素：独占一行，可以设置宽高。
- 行内元素：与其他元素在同一行，宽高由内容决定，不可设置。
- 行内块元素：可以与其他元素在同一行，可以设置宽高。

## `<script>` 标签放在 `<head>` 和 `<body>` 底部有什么区别？defer 和 async 属性有什么用？
- 区别：放 head 会阻塞渲染。最好放在`<body>`标签的底部。
- 用处：使用async/defer属性可以使其异步加载。
    - defer：DOM 解析完成后执行，适合外部脚本。（推荐）
    - async：下载完立即执行，可能阻塞 DOM。（不保证顺序）

## `<img>`标签的 alt 和 title 属性有何异同？
- alt：图片无法加载时的替代文本，对SEO和可访问性至关重要。
- title：鼠标悬停时显示的提示文本。

## HTML5带来了哪些新特性？
- 语义化标签；
- 多媒体支持`<audio>`和`<video>`；
- Canvas & SVG
- 本地存储：localStorage, sessionStorage, indexedDB等
- 表单增强：新的输入类型（email, date, number等）和验证属性（required, pattern等）。
- 地理定位：Geolocation API。
- Web Workers：允许在后台运行脚本，不阻塞主线程。
- WebSocket：提供全双工通信，实现服务器主动推送。

## src 和 href 的区别是什么？
- src (Source)：替换当前元素内容，浏览器会暂停解析。
- href (Hypertext Reference)：建立当前文档与外部资源的链接，不会阻塞文档解析。

## `<template>` 和 `<slot>` 有什么用？
- `<template>`：定义 HTML 模板，内容不会直接渲染，可通过 JS 克隆使用
- `<slot>`：Web Components 中的插槽，用于接收自定义元素的嵌套内容
- 场景：组件复用、动态生成 DOM、减少重复代码
```html
<template id="my-card">
  <style>
    .card { border: 1px solid #ccc; padding: 16px; }
  </style>
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
const template = document.getElementById('my-card');
const clone = template.content.cloneNode(true);
document.body.appendChild(clone);
```

## 主流浏览器及其内核分别是什么？
- Chrome / Opera: Blink内核。 (是Webkit的一个分支)
- Safari: Webkit内核。
- Firefox: Gecko内核。
- IE: Trident内核。

## `<meta>`标签的作用是什么？常见属性有哪些？
- `<meta>`标签提供关于HTML文档的元数据
- 设置字符集；提供页面描述；定义关键词；

## data-* 自定义属性有什么用？
- 用于存储页面或应用程序的私有数据
- 命名规范：`data-` 开头，后跟任意小写字母和数字（如 `data-user-id`, `data-status`）
- 获取方式：JS 中通过 `element.dataset.属性名`（驼峰式）或 `getAttribute('data-xxx')` 获取
- 场景：组件传值、动态绑定数据、存储业务状态
```html
<div data-user-id="123" data-user-name="张三">用户</div>
```
```js
const div = document.querySelector('div');
console.log(div.dataset.userId);    // "123"
console.log(div.dataset.userName);  // "张三"
```

## 从HTML层面，如何优化页面加载速度？
- 减少不必要的HTML标签，保持代码精简；
- 将CSS文件放在`<head>`中，将JS文件放在`</body>`；
- 对图片使用懒加载（loading="lazy"）；
- 使用`<picture>`或srcset提供响应式图片；
- 减少HTTP请求数量，例如合并CSS和JS文件。

## <input>标签的常见type类型有哪些？
- text, password, email, number, tel, url， checkbox, radio，file

## 表单验证有哪些方式？HTML5 提供了哪些原生验证属性？
- 原生属性： required, type="email", type="number", min, max, pattern (正则), maxlength。
- JS 验证： checkValidity(), setCustomValidity()。

# 进阶
## LocalStorage, SessionStorage 和 Cookie 的区别。
- Cookie： 容量小 (4KB)，每次请求自动携带（影响性能），可设置过期时间，服务端可读写。
- LocalStorage： 容量大 (5MB+)，永久存储（除非手动清除），仅客户端操作，不参与网络传输。
- SessionStorage： 容量大 (5MB+)，仅在当前会话有效。（标签页关闭即失效）

## `<canvas>` 和 `<svg>`的区别是什么？应用场景分别是什么？
- `<canvas>` 是基于像素的位图，通过JS API进行绘制。适合游戏、图表、图像处理等。
- `<svg>` 是基于XML的矢量图，图形由标签定义，缩放不失真。

## `<iframe>` 的优缺点是什么？如何解决跨域通信问题？
- 优点：可以嵌入外部页面或广告，实现内容复用；主页面和iframe内的脚本相互隔离。
- 缺点：影响主页面的加载速度；不利于SEO；在移动设备上体验不佳；存在安全性问题（如点击劫持）。
- 通信： postMessage API 是唯一安全的跨域通信方式。

## 深入谈谈 HTML 性能优化
- HTML结构优化
    - 语义化标签使用
    - 使用正确的DOCTYPE声明
    - 合理使用标题层级(h1-h6)
    - 减少嵌套层级，保持结构简洁
- CSS资源优化
    - 将CSS放在`<head>`中，避免FOUC(Flash of Unstyled Content, 未格式化内容的闪现)。
    - 关键CSS内联到HTML中，减少关键渲染路径（会发起额外请求）。
    - 使用媒体查询条件加载样式。
- JS资源优化
    - 将非关键JS放在`<body>`底部
    - 使用async或defer属性
    - 实施代码分割和懒加载
- 图片优化
    - 使用适当的图片格式(WebP, AVIF)
    - 实施响应式图片(srcset, sizes)
    - 添加loading="lazy"属性
- 渲染性能优化
    - 减少DOM查询次数。
    - 批量DOM操作。
    - 使用DocumentFragment（在内存中操作，不触发重排）减少重排重绘。
- 关键渲染路径优化
    - 最小化关键资源数量
    - 优化关键字节大小
    - 缩短关键资源加载路径长度
- 缓存策略
    - HTTP缓存
        - 设置合适的缓存头(Cache-Control, ETag)
        - 使用强缓存和协商缓存策略
            - 强缓存适用场景：静态资源
            - 协商缓存场景：API
    - 浏览器缓存
        - 利用localStorage/sessionStorage
        - Service Worker缓存策略
- 网络优化
    - 资源压缩
        - 片压缩和格式优化
        - 压缩HTML、CSS、JS文件
        - 启用Gzip/Brotli压缩
    - CDN使用
        - 静态资源使用CDN
- 现代HTML特性
    - dns-prefetch: 提前DNS解析
    - preconnect: 提前建立连接
    - prefetch/prerender: 预加载资源

## 如何防范 XSS (跨站脚本攻击) 和 CSRF (跨站请求伪造)？
- 防范 XSS
    - 输入验证与过滤
    - 输出编码/转义
    - 使用现代前端框架
    - 设置内容安全策略。只允许从指定的可信来源加载和执行资源
    - 将敏感的 Cookie 设置为 HttpOnly 属性。
- 防范 CSRF
    - 使用 CSRF Token (最有效的方法)
    - 键操作二次验证。（修改密码、转账等敏感操作）

## ARIA 属性有什么用？如何提升可访问性？
- ARIA (Accessible Rich Internet Applications)：增强残障用户对网页的可访问性
- 常见属性：
    - `role`：定义元素作用（如 `role="button"`, `role="navigation"`）
    - `aria-label`：为元素提供可访问的标签
    - `aria-hidden`：隐藏元素（不渲染为可访问树）
    - `aria-expanded`：表示展开/折叠状态
    - `aria-describedby`：关联描述信息
- 场景：自定义组件、表单验证提示、动态内容更新

## History API 有什么用？如何实现 SPA 路由？
- 提供操作浏览器历史记录的能力
- 核心方法：
    - `pushState(state, title, url)`：添加新历史记录
    - `replaceState(state, title, url)`：替换当前记录
    - `popstate` 事件：监听浏览器前进/后退
```js
// 手动切换路由
button.addEventListener('click', () => {
  history.pushState({ page: 1 }, '', '/page1');
});

// 监听返回
window.addEventListener('popstate', (e) => {
  console.log(e.state); // 获取 state
});
```

## 资源提示 (Resource Hints) 有哪些？区别是什么？
- `dns-prefetch`：提前进行 DNS 解析（预解析域名）
- `preconnect`：提前建立 TCP 连接、TLS 握手
- `prefetch`：预取下一个页面可能用到的资源（低优先级）
- `preload`：预加载当前页面必需的资源（高优先级）
- `prerender`：预渲染整个页面（后台加载并执行）
```html
<link rel="dns-prefetch" href="//example.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preload" href="main.js" as="script">
<link rel="prefetch" href="next-page.js">
```

## Viewport meta 标签有哪些常用配置？
- 控制移动端视口和缩放行为
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```
- 常用属性：
    - `width`：视口宽度（device-width 表示设备宽度）
    - `initial-scale`：初始缩放比例
    - `maximum-scale`：最大缩放比例
    - `user-scalable`：是否允许用户缩放（no 禁用）

## `<link>` 标签的 rel 属性有哪些常见值？
- `stylesheet`：引入外部样式表
- `icon` / `shortcut icon`：网站图标
- `preload`：预加载资源
- `prefetch`：预取资源
- `dns-prefetch`：DNS 预解析
- `preconnect`：预连接
- `canonical`：规范化链接（SEO）
- `manifest`：引入 PWA 清单文件

## 表单高级特性有哪些？
- `autocomplete`：启用浏览器自动填充（on/off）
- `autofocus`：页面加载时自动聚焦
- `datalist`：为 input 提供建议选项
- 按钮属性：`formaction`, `formenctype`, `formmethod`, `formtarget`
```html
<input list="browsers" name="browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
</datalist>

<form action="/submit" method="POST">
  <input type="submit" formaction="/save-draft" value="保存草稿">
</form>
```

## SEO 优化有哪些 HTML 手段？
- 语义化标签：正确使用 h1-h6、header、nav、main 等
- meta 标签：title、description、keywords
- 结构化数据：使用 Schema.org (JSON-LD)
- canonical：避免重复内容
- 移动端适配：viewport 设置
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "示例网站",
  "url": "https://example.com"
}
</script>
```

## `<base>` 标签有什么用？
- 为页面所有相对 URL 设置基准 URL
- 只能有一个，且必须放在 `<head>` 中
```html
<head>
  <base href="https://example.com/images/" target="_blank">
</head>
<body>
  <a href="logo.png">logo</a> <!-- 实际指向 https://example.com/images/logo.png -->
</body>
```

## HTML5 全局属性有哪些？
- `contenteditable`：元素内容可编辑（true/false）
- `hidden`：隐藏元素（等同于 `display: none`）
- `draggable`：元素可拖拽（true/false/auto）
- `spellcheck`：是否启用拼写检查
- `tabindex`：Tab 键导航顺序（正数为顺序，-1 跳过）
- `translate`：是否翻译元素内容（yes/no）
```html
<div contenteditable="true" tabindex="1" draggable="true">可编辑可拖拽</div>
<button hidden>隐藏按钮</button>
```

## `<video>` 和 `<audio>` 有哪些常用属性？
- 通用属性：`controls`（控制条）、`autoplay`、`loop`、`muted`、`preload`
- video 专属：`poster`（封面图）、`width`、`height`
- audio 专属：无特殊属性
```html
<video src="movie.mp4" controls autoplay muted poster="poster.jpg" preload="auto">
  您的浏览器不支持 video 标签
</video>

<audio src="music.mp3" controls loop preload="metadata">
  您的浏览器不支持 audio 标签
</audio>
```

## `<noscript>` 标签有什么用？
- JS 被禁用或不支持时显示的备选内容
- 可放在 `<head>` 或 `<body>` 中
```html
<noscript>
  <p>您的浏览器已禁用 JavaScript，请开启以获得最佳体验。</p>
</noscript>
```

## 什么是事件委托？有什么好处？
- 原理：把事件监听器绑定到父元素，利用冒泡机制处理子元素事件
- 好处：减少事件监听器数量；动态添加的子元素自动获得事件处理
```js
// 不使用委托：每个 li 都有监听器
document.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', handleClick);
});

// 使用委托：只绑定一个监听器
ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    handleClick(e.target);
  }
});
```

## 浏览器解析 HTML 的过程是什么？
- 1. 字节 → 字符：字节流解码为字符
- 2. 字符 → 令牌：解析为 Token（开始标签、结束标签、文本等）
- 3. 令牌 → 节点：令牌转换为 Node 对象
- 4. 节点 → DOM 树：Node 按嵌套关系构建成树形结构
- 同时：CSS 解析为 CSSOM，与 DOM 合并生成渲染树
- 特点：解析是增量过程，遇到 `<script>` 会阻塞（除非 defer/async）

## 什么是可替换元素？有哪些？
- 定义：元素内容通常由外部资源替换（src、href 等属性）
- 常见：`<img>`、`<video>`、`<audio>`、`<iframe>`、`<canvas>`、`<svg>`、`<input>`、`<object>`
- 特点：
    - CSS `content` 属性对它们不起作用
    - 宽高默认由内容决定（img 可以用 width/height 控制）
    - 属于行内级元素，但表现类似行内块