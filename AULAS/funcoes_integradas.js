// Aqui estão exemplos de algumas funções integradas para strings em Javascript

const myString = 'This is Javascript';

// length
console.log(myString.length); // exibe 19

// indexOf
console.log(myString.indexOf('is')); // exibe 2

// lastIndexOf
console.log(myString.lastIndexOf('is')); // exibe 5

// search
console.log(myString.search('is')); // exibe 2

// slice
console.log(myString.slice(2, 4)); // exibe 'is'

// substring
console.log(myString.substring(8, 12)); // exibe Java

// replace
console.log(myString.replace('JavaScript', 'HTML')); // 'This is HTML'

// toUppperCase
console.log(myString.toUpperCase()); // exibe tudo em maiúscula

// toLowerCase
console.log(myString.toLowerCase()); // exibe tudo em minúscula

// concat
console.log(myString.concat('and Python!')); // exibe 'This is Javascript and Python!

// trim
const myString2 = '   This is Javascript!    ';
console.log(myString2.trim()); // exibe 'This is JavaScript!' (retira os espaços)

// split
console.log(myString.split()); // exibe ['This', 'is', 'JavaScript!']

// e existem muitas outras funções integradas para strings em JS