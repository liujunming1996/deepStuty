// this取值分四种情况
// 在函数中this到底取何值，是在函数真正被调用执行的时候确定的，函数定义的时候确定不了。因为this的取值是执行上下文环境的一部分，每次调用函数，都会产生一个新的执行上下文环境.

// 情况1： 构造函数
function Foo() {
  this.name = 'Ming';
  this.year = 1994;
  console.log(this);
}
// 整个原型链中，this代表的也都是当前对象的值。

Foo() // this指向windows
let f1 = new Foo(); // this指向即将new出来的对象
console.log(f1.name);
console.log(f1.year);


// 情况2：函数作为对象的一个属性
// 如果函数作为对象的一个属性时，并且作为对象的一个属性被调用时，函数中的this指向该对象。
let obj = {
  a: 10,
  fn: function() {
    console.log(this);
    console.log(this.a)
  }
}

obj.fn();

let obj3 = {
  x: 10,
  fn: function() {
    console.log(this); // window
    console.log(this.x) // undefined
  }
}
let fn2 = obj.fn
fn2()

// 如果fn函数被赋值到了另一个变量中，并没有作为obj的一个属性被调用，那么this的值就是window，this.x为undefined。


// 情况3： 函数用call或者apply调用
// 当一个函数被call和apply调用时，this的值就取传入的对象的值。

let obj2 = {
  x: 10
};

let fnCall = function() {
  console.log(this); // {x: 10}
  console.log(this.x) // 10
} 
fnCall.call(obj2)


// 全局&调用普通函数
// 在全局环境下，this永远是window，这个应该没有非议。 普通函数在调用时，其中的this也都是window。

console.log(this === window)

var obj6 = {
  x: 10,
  fn: function () {
    function d() {
      console.log(this) // window
      console.log(this.x) // undefined
    }
    var f = () => {
      console.log(this) // {x:10, fn: f}
      console.log(this.x) // 10
    }
    d()
    f()
  }
}

obj6.fn()
