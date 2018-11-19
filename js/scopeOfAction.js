// 引子：javascript没有块级作用域
// 所谓“块”，就是大括号“｛｝”中间的语句
// javascript除了全局作用域之外，只有函数可以创建的作用域。

// jquery源码
var document = window.document,
    version = '2.1.1',
    jQuery = function(selector, context) {
      return new jQuery.fn.init(selector, context);
    },

    rtrim = /^[\s\uFEFF\XAO]+|[\s\uFEFF\xAO]+$/g,

    rmsPrefix = /^-ms-/,

    rdashAlpha = /-([\da-z])/gi,

    fcamelCase = function(all, letter) {
      return letter.toUpperCase();
    };


// 作用域有上下级的关系，上下级关系的确定就看函数是在哪个作用域下创建的
// 作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突
var a = 1;
console.log(a);
function fn() {
  var a = 2;
  console.log(a)
};

fn()

// 作用域在函数定义时就已经确定了。而不是在函数调用时确定。
var b = 10;
// 全局作用域
function fn1(x) {
  // fn作用域
  function bar(x) {
    // bar作用域
    console.log(x)
  }

  bar(x)
}
fn1(b)

// 自由变量和作用域链
// 自由变量
// 在A作用域中使用的变量x，却没有在A作用域中声明（即在其他作用域中声明的），对于A作用域来说，x就是一个自由变量。
var c = 10;
function fn3() {
  var b = 20;

  console.log(c + b);  // c就是自由变量
}

// 自由变量取值需要到创建这个函数的那个作用域中取值——其实这就是所谓的“静态作用域”

var d = 10;
function fn4() {
  console.log(d)
}

function show(f) {
  var d = 20;

  function bar() {
    f() // 10
  };

  return bar;
}

var xx = show(fn4);

xx();

