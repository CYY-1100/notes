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
- **组件**：`<template>`, `<slot>`, `<dialog>`

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

### Custom Elements（自定义元素）
```js
class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = '<p>自定义元素</p>';
  }
}
customElements.define('my-element', MyElement);
```
```html
<my-element></my-element>
```

### Shadow DOM（影子 DOM）
- 封装的 DOM 树，样式隔离
- `mode: 'open'` 可被外部访问，`mode: 'closed'` 不可访问
- 内部样式不会影响外部，外部样式也不会影响内部（除非使用 `:host`）

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

### Intersection Observer
监听元素进入视口，常用于懒加载、无限滚动
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('进入视口', entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
observer.observe(document.querySelector('.target'));
```

### MutationObserver
监听 DOM 变化
```js
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    console.log('变化类型:', mutation.type);
    console.log('变化节点:', mutation.target);
  });
});
observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true
});
```

### Web Workers
后台线程执行耗时任务，不阻塞主线程
```js
// main.js
const worker = new Worker('worker.js');
worker.postMessage({ type: 'compute', data: 1000 });
worker.onmessage = e => console.log('结果:', e.data);

// worker.js
self.onmessage = e => {
  if (e.data.type === 'compute') {
    const result = e.data.data * 2;
    self.postMessage(result);
  }
};
```

### WebSocket
双向通信协议，服务器可主动推送
```js
const ws = new WebSocket('wss://example.com/ws');
ws.onopen = () => ws.send('Hello');
ws.onmessage = e => console.log('收到:', e.data);
ws.onclose = () => console.log('连接关闭');
```

### File API
读取和操作文件
```js
const input = document.querySelector('input[type="file"]');
input.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => console.log(reader.result);
  reader.readAsText(file);
});
```

### Drag and Drop API
原生拖拽功能
```js
element.addEventListener('dragstart', e => {
  e.dataTransfer.setData('text/plain', '数据');
});
target.addEventListener('dragover', e => e.preventDefault());
target.addEventListener('drop', e => {
  console.log(e.dataTransfer.getData('text/plain'));
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

### Service Workers
PWA 核心，运行在后台的代理服务器

#### 生命周期
install → activate → fetch → message

#### 缓存策略
```js
const CACHE_NAME = 'v1';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(['/'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
```

### PWA（渐进式 Web 应用）
- **manifest.json**：应用清单，定义名称、图标、启动画面
- **Service Worker**：离线缓存
- **添加到主屏幕**：可安装
```json
{
  "name": "我的应用",
  "short_name": "应用",
  "start_url": "/",
  "display": "standalone",
  "icons": [{ "src": "icon.png", "sizes": "192x192" }]
}
```

### 浏览器渲染流程
1. **DOM 树**：解析 HTML
2. **CSSOM 树**：解析 CSS
3. **Render Tree**：DOM + CSSOM 合并
4. **Layout**：计算布局（重排）
5. **Paint**：绘制内容（重绘）
6. **Composite**：合成图层

#### 重排 vs 重绘
| 类型 | 触发条件 | 性能影响 |
|------|----------|----------|
| 重排 | 几何属性变化（宽高、位置） | 严重 |
| 重绘 | 外观变化（颜色、背景） | 较轻 |

#### 合成层优化
- 使用 `transform`（translate/scale）、`opacity` 可触发 GPU 加速
- 避免重排重绘，提升动画性能

### 离屏渲染
Canvas 在可见区域外绘制，减少主线程负担
```js
const offscreen = document.createElement('canvas');
offscreen.width = 800;
offscreen.height = 600;
const ctx = offscreen.getContext('2d');
ctx.fillRect(0, 0, 800, 600);
// 绘制完成后用 drawImage 渲染到可见 canvas
```

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
- 合理分层，减少重排重绘范围

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
