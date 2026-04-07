// concatenação
const string1 = 'Hello';
const string2 = 'World!';

// forma mais comum de concatenar strings
console.log(string1 + ' ' + string2); // exibe 'Hello World!''

// método concat()
console.log(string1.concat(' ', string2)); // exibe 'Hello World!' 

// Template Literals - São strings que permitem incorporar expressões.
// são delimitados pelo acento grave (` `) em vez de aspas simples ou duplas
// podem conter placeholders, indicados pelo símbolo de dólar e chaves ( `${expressão}`)

// Exemplo 1
const string3 = 'Hello';
const string4 = 'World!';

console.log(`${string3} ${string4}`); // exibe 'Hello World!'

const number1 = 10;
const number2 = 20;

console.log(`A soma de ${number1} e ${number2} é ${number1 + number2}!`);