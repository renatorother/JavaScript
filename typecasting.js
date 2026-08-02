//converter number para string
let num1 = 100;
console.log(num1.toString());
//ou
console.log(String(num1));


//converter booleano para string
let myFalse = false;
console.log(myFalse.toString());
//ou
console.log(String(myFalse));


//converter string em number
let num2 = 100;
console.log(Number(num2))
//ou
console.log(parseInt(num2)); //números inteiros
console.log(parseFloat(num2)); //números decimais


//converter booleano para number
let boolean = true
console.log(Number(boolean)) // true é 1 false é 0
//ou
console.log(parseInt(boolean))
console.log(parseFloat(boolean))


//exemplo de conversão implícita
let num1 = 100; // number
let num2 = '100'; //string
console.log(num1 + num2); // 100100 - converte o num1 para string e faz uma concatenação em num2


//exemplo de conversão explícita
console.log(num1 + Number(num2)); // 200 - converte o num2 para um número e faz a soma com num1


//converter string com letras para number
let valor = '100px'
console.log(Number(valor)) // NaN - not a number


//converter string vazia para number
let valor = ''
console.log(Number(valor)) // 0


//converter string com espaço para número
let valor = ' '
console.log(Number(valor)) // 0


//converter uma string com espaços e números para number
let valor = ' 100 '
console.log(Number(valor)) // 100


//converter uma string vazia para booleano
let valor = ''
console.log(Boolean(valor)) // false


//converter uma string com espaço para booleano
let valor = ' '
console.log(Boolean(valor)) // true
