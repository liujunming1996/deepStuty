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


let fn2 = new Function('x', 'console.log(x + 5)')
fn2(2)


// 对象或者数组代替循环
let handle = {
  1: () => {},
  2: () => {},
  default: () => {}
}