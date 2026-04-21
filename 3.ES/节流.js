/**
 * 节流函数 - 限制函数在指定时间间隔内只能执行一次
 * 
 * 应用场景：适用于高频触发的事件，如滚动、输入、点击等
 * 原理：在指定时间窗口内，无论触发多少次，只执行第一次
 * 
 * @param {Function} func - 需要节流的函数
 * @param {number} delay - 时间窗口大小（毫秒）
 * @returns {Function} - 返回一个新的包装函数
 */
function throttle(func, delay) {
    // 记录上一次执行的时间戳，初始值为 0
    let lastTime = 0;
    
    // 返回一个闭包函数，接收任意参数
    return function(...args) {
        // 获取当前时间戳
        let now = Date.now();
        
        /**
         * 判断是否可以执行：
         * 1. lastTime === 0：首次执行（之前从未执行过）
         * 2. now - lastTime >= delay：距离上次执行已经超过指定间隔
         */
        if (lastTime === 0 || now - lastTime >= delay) {
            // 使用 apply 保持函数原有的 this 上下文，并传递参数
            func.apply(this, args);
            // 更新 lastTime 为当前时间，作为下次判断的基准
            lastTime = now;
        }
        // 如果不满足执行条件，则忽略本次调用（不执行 func）
    }
}