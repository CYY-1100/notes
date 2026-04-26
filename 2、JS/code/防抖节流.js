/**
 * 节流
 * 应用场景：适用于高频触发的事件，如滚动、输入、点击等
 * 原理：在指定时间窗口内，无论触发多少次，只执行第一次
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

// 防抖
function debounce(func, delay) {
    // 记录定时器 ID，初始值为 null
    let timer = null;

    // 返回一个闭包函数，接收任意参数
    return function(...args) {
        // 如果之前有定时器，清除它，避免之前的 func 执行   
        if (timer) clearTimeout(timer);
        
        // 设置新的定时器，在 delay 毫秒后执行 func
        timer = setTimeout(() => {
            // 使用 apply 保持函数原有的 this 上下文，并传递参数
            func.apply(this, args);
        }, delay);
    }
}