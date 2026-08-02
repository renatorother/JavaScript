console.log(Boolean(0)); // false
console.log(Boolean(1)); // true

let number = 123.456;
console.log(Boolean(number)); // true

let string = "Hello";
console.log(Boolean(string)); // true

let emptyString = "";
console.log(Boolean(emptyString)); // false

let emptyString2 = String();
console.log(Boolean(emptyString2)); // false

let nullValue = null;
console.log(Boolean(nullValue)); //false

let undefinedValue = undefined;
console.log(Boolean(undefinedValue)); // false

let nanValue = NaN;
console.log(Boolean(nanValue)); // false

let infinityValue = Infinity;
console.log(Boolean(infinityValue)); // true