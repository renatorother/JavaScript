console.log(Infinity); // infinity
console.log(typeof Infinity); // number
console.log(Infinity + 1); // infinity
console.log(Infinity - 1); // infinity
console.log(Infinity * 1); // infinity

let number = 123.456;
console.log(number / 0); //infinity
console.log(number / -0); //infinity


console.log(1 / 0); //infinity
console.log(1 / -0); //infinity
console.log(1.42308945720938746980273489572398475092346509236789162897346e+308 * 2); //infinity



console.log(NaN); //NaN
console.log(typeof NaN); //number
console.log(number / "hello"); //NaN
console.log(Math.sqrt(-1)); //NaN
console.log(0 / 0); //NaN
console.log(NaN == NaN); //false
console.log(isNaN(NaN)); //true
console.log(isNaN(123)); //false






