# `<!DOCTYPE html>` 的作用是什么？
- 声明文档类型，告知浏览器是什么文档类型。

# 什么是HTML语义化？为什么要使用语义化标签？
- 语义化是指根据内容的结构和意义选用恰当的HTML标签。
- 好处包括：提升代码可读性和可维护性；增强SEO，利于爬虫解析;

# HTML标签的src属性和href属性有何区别？
- src用于替换当前元素，浏览器会暂停解析, 将其内容嵌入当前位置。
- href用于建立当前文档与引用资源的链接关系，不会暂停解析，而是并行加载资源。

# 行内元素、块级元素和行内块元素的区别？
- 块级元素独占一行，可以设置宽高。
- 行内元素与其他元素在同一行，宽高由内容决定，不可设置。
- 行内块元素可以与其他元素在同一行，可以设置宽高。

# HTML中<script>标签的位置会影响页面加载吗？
- 是的。使用async/defer属性可以使其异步加载。

# <img>标签的alt和title属性有何异同？
- alt是图片无法加载时的替代文本，对SEO和可访问性至关重要。
- title是鼠标悬停时显示的提示文本。

# HTML5新增了哪些语义化标签？
- <header>, <footer>, <nav>, <aside>, <main>

# HTML5带来了哪些新特性？
- 语义化标签；
- 多媒体支持<audio>和<video>；
- Canvas & SVG
- 本地存储：localStorage, sessionStorage, indexedDB等
- 表单增强：新的输入类型（email, date, number等）和验证属性（required, pattern等）。
- 地理定位：Geolocation API。
- Web Workers：允许在后台运行脚本，不阻塞主线程。
- WebSocket：提供全双工通信，实现服务器主动推送。

# <canvas>和<svg>的区别是什么？
- <canvas>是基于像素的位图，通过JavaScript API进行绘制，适合游戏、图表、图像处理等。
- <svg>是基于XML的矢量图，图形由标签定义，缩放不失真。

# 主流浏览器及其内核分别是什么？
Chrome / Opera: Blink内核 (基于Webkit)
Safari: Webkit内核
Firefox: Gecko内核
Internet Explorer: Trident内核

# <meta>标签的作用是什么？常见属性有哪些？
- <meta>标签提供关于HTML文档的元数据
- 设置字符集；提供页面描述；定义关键词；

# 从HTML层面，如何优化页面加载速度？
- 减少不必要的HTML标签，保持代码精简；
- 将CSS文件放在<head>中，将JS文件放在</body>前；
- 对图片使用懒加载（loading="lazy"）；
- 使用<picture>或srcset提供响应式图片；
- 减少HTTP请求数量，例如合并CSS和JS文件。

# <input>标签的常见type类型有哪些？
- text, password, email, number, tel, url， checkbox, radio，file

# <iframe>的优缺点是什么？
- 优点：可以嵌入外部页面或广告，实现内容复用；主页面和iframe内的脚本相互隔离。
- 缺点：影响主页面的加载速度；不利于SEO；在移动设备上体验不佳；存在安全性问题（如点击劫持）。