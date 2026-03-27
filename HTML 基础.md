# 基础
## `<!DOCTYPE html>` 的作用是什么？
- 声明文档类型，告知浏览器是什么文档类型。

## 什么是HTML语义化？为什么要使用语义化标签？
- 语义化是指根据内容的结构和意义选用恰当的HTML标签。
- 好处包括：提升代码可读性和可维护性；增强SEO，利于爬虫解析;

## HTML5新增了哪些语义化标签？
- <header>, <footer>, <nav>, <article>, <section>, <aside>, <main>, <figure>, <figcaption>
- 利于 SEO，利于屏幕阅读器（无障碍），代码可读性更强。

## 行内元素、块级元素和行内块元素的区别？
- 块级元素独占一行，可以设置宽高。
- 行内元素与其他元素在同一行，宽高由内容决定，不可设置。
- 行内块元素可以与其他元素在同一行，可以设置宽高。

## `<script>` 标签放在 `<head>` 和 `<body>` 底部有什么区别？defer 和 async 属性有什么用？
- 加载顺序、阻塞渲染。
- 使用async/defer属性可以使其异步加载。defer： DOM 解析完成后执行（推荐）。async：下载完立即执行（不保证顺序），可能阻塞 DOM。

## `<img>`标签的alt和title属性有何异同？
- alt是图片无法加载时的替代文本，对SEO和可访问性至关重要。
- title是鼠标悬停时显示的提示文本。

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
Chrome / Opera: Blink内核 (基于Webkit)
Safari: Webkit内核
Firefox: Gecko内核
Internet Explorer: Trident内核

## <meta>标签的作用是什么？常见属性有哪些？
- <meta>标签提供关于HTML文档的元数据
- 设置字符集；提供页面描述；定义关键词；

## 从HTML层面，如何优化页面加载速度？
- 减少不必要的HTML标签，保持代码精简；
- 将CSS文件放在<head>中，将JS文件放在</body>前；
- 对图片使用懒加载（loading="lazy"）；
- 使用<picture>或srcset提供响应式图片；
- 减少HTTP请求数量，例如合并CSS和JS文件。

## <input>标签的常见type类型有哪些？
- text, password, email, number, tel, url， checkbox, radio，file

# 进阶
## LocalStorage, SessionStorage 和 Cookie 的区别。
- Cookie： 容量小 (4KB)，每次请求自动携带（影响性能），可设置过期时间，服务端可读写。
- LocalStorage： 容量大 (5MB+)，永久存储（除非手动清除），仅客户端操作，不参与网络传输。
- SessionStorage： 容量同 LocalStorage，仅在当前会话（标签页关闭即失效）有效。.

## <canvas>和<svg>的区别是什么？应用场景分别是什么？
- <canvas>是基于像素的位图，通过JavaScript API进行绘制，适合游戏、图表、图像处理等。
- <svg>是基于XML的矢量图，图形由标签定义，缩放不失真。

## <iframe>的优缺点是什么？如何解决跨域通信问题？
- 优点：可以嵌入外部页面或广告，实现内容复用；主页面和iframe内的脚本相互隔离。
- 缺点：影响主页面的加载速度；不利于SEO；在移动设备上体验不佳；存在安全性问题（如点击劫持）。
- 通信： postMessage API 是唯一安全的跨域通信方式。

## 表单验证有哪些方式？HTML5 提供了哪些原生验证属性？
原生属性： required, type="email", type="number", min, max, pattern (正则), maxlength。
JS 验证： checkValidity(), setCustomValidity()。

## 深入谈谈 HTML 性能优化
关键渲染路径 (CRP)、资源预加载。

## HTML 安全性：如何防范 XSS (跨站脚本攻击) 和 CSRF (跨站请求伪造)？

## 浏览器的渲染原理中，DOM 树和 CSSOM 树是如何构建的？什么是“关键渲染路径”？