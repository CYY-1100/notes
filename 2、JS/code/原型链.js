function A(){
  this.name = 'aaa'
}

A.prototype.say = function(){
  return 'hello'
}

var a = new A()
var b = Object.create(a)
var c = Object.create(b)

console.log(c.say()) // hello 
console.log(c.name) // aaa
console.log(c)
console.log(c.__proto__) // b
console.log(c.__proto__.__proto__) // a Function A 的实列
console.log(c.__proto__.__proto__.__proto__) // A Function A
console.log(c.__proto__.__proto__.__proto__.__proto__) // Function.__proto__
console.log(c.__proto__.__proto__.__proto__.__proto__.__proto__) // null Object.__proto__
console.log(A.prototype === a.__proto__)