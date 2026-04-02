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

## 主流浏览器及其内核分别是什么？
- Chrome / Opera: Blink内核。 (是Webkit的一个分支)
- Safari: Webkit内核。
- Firefox: Gecko内核。
- IE: Trident内核。

## `<meta>`标签的作用是什么？常见属性有哪些？
- `<meta>`标签提供关于HTML文档的元数据
- 设置字符集；提供页面描述；定义关键词；

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