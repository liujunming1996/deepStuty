// 通过函数创建对象
function Fn() {
  this.name = 'aab';
  this.year = 2019;
}
Fn.prototype.age = 10;
Fn.prototype.borthDay = function() {
  return this.year - this.age
}

let fn1 = new Fn()
console.log(fn1)
console.log(fn1.borthDay())

function Foo() {}
let f1 = new Foo();

f1.a = 10;
Foo.prototype.a = 100;
Foo.prototype.b = 200;

console.log(f1.a);
console.log(f1.b)


// apply, call, bind

function add(a, b) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}
add.call(sub, 3, 1);

add.apply(sub, [3, 1])

add.bind(sub)(3, 1)

// 执行上下文

// 函数体是代码段
// 和script标签，eval（）是代码段
// 函数每被调用一次，都会产生一个新的秩序上下文环境
// 函数在定义的时候（不是调用的时候），就已经确定了函数内部自由变量的作用域。
let fn2 = new Function('x', 'console.log(x + 5)')
fn2(2)

var a = 10;
function fn3() {
  console.log(a) // a是自由变量
}                // 函数创建时，就确定了a要取值的作用域

function bar(f) {
  var a = 20;
  f();  // 执行后 打印‘10’，不是‘20’ 原因： 函数在创建的时候确定了a取的全局变量
}

bar(fn3)



// 对象或者数组代替循环
let handle = {
  1: () => {},
  2: () => {},
  default: () => {}
}