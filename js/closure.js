// 闭包
// 但是你只需要知道应用的两种情况即可——函数作为返回值，函数作为参数传递。

// 函数作为返回值
function fn() {
  var max = 10;

  return function bar(x) {
    if(x > max) {
      console.log(x)
    }
  }
};

var f1 = fn();
f1(15);


// 函数作为参数被传递
var max = 10,
    fn = function(x) {
      if(x > max) {
        console.log(x)
      }
    };
(function(f) {
  var max = 100;
  f(15)
})(fn);
