class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.val = undefined;
    this.reason = undefined;
    this.onFulfilledCallBacks = [];
    this.onRejectedCallBacks = [];

    const resolve = (val) => {
      if (this.state == "pending") {
        this.state = "fulfilled";
        this.val = val;
        queueMicrotask(() => {
          this.onFulfilledCallBacks.forEach((func) => func());
        });
      }
    };

    const reject = (reason) => {
      if (this.state == "pending") {
        this.state = "rejected";
        this.val = reason;
        queueMicrotask(() => {
          this.onRejectedCallBacks.forEach((func) => func());
        });
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (value) => {
            throw reason;
          };

    return new MyPromise((resolve, reject) => {
      // 成功
      const handleFulfilled = (value) => {
        queueMicrotask(() => {
          try {
            const result = onFulfilled(value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      };
      // 失败
      const handleRejected = (reason) => {
        queueMicrotask(() => {
          try {
            const result = onRejected(reason);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      };

      if (this.state === "fulfilled") {
        handleFulfilled(this.val);
      } else if (this.state === "rejected") {
        handleRejected(this.val);
      } else {
        this.onFulfilledCallBacks.push(() => {
          setTimeout(() => handleFulfilled(this.val), 0);
        });

        this.onRejectedCallBacks.push(() => {
          setTimeout(() => handleRejected(this.reason), 0);
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(callback) {
    return this.then(
      (value) => {
        return MyPromise.resolve(callback()).then(() => value);
      },
      (reason) => {
        return MyPromise.resolve(callback()).then(() => {
          throw reason;
        });
      },
    );
  }

  // 静态方法：Promise.resolve
  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise((resolve) => resolve(value));
  }

  // 静态方法：Promise.reject
  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason));
  }
}

setTimeout(() => {
  console.log(3);
}, 3000);

setTimeout(() => {
  console.log(1);
}, 1000);
