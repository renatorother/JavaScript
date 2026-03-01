//Nullish Coalescing Operator para Null e Undefined(??)

//exemplo 1
let number = null;
console.log(number ?? 100) //100

//exemplo 2
let number2 = undefined;
console.log(number2 ?? 100) //100

//exemplo 3
let number3 = 123;
console.log(number3 ?? 100) //123

//exemplo 4
let number4 = 0;
console.log(number4 ?? 100) //0

//exemplo 5
let str = '';
console.log(number1 ?? 100) //''

//exemplo 6
let bool = false;
console.log(number1 ?? 100) //false

// ?? ---> Se o valor é Null ou Undefined, troque pelo valor á direita.