function show(x) {
  console.log(x)
  console.log(typeof x)
}

show() //undefined 
show(10) // 10 number
show('abc') // abc string
show(true) // true boolean
show(() => {}) // () =>{} function
show([1, 'a', true]) // [] object
show(null) // null object
show(new Number(10)) // Number {10} object


const fn = function() {}
console.log(fn instanceof Object)


let obj = {
  a: 10,
  b: function(x) {
    console.log(this.a + x)
  },
  c: {
    name: 'aa',
    year: 1988
  }
}

obj.b(obj.c.year)

