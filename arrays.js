let names = ['Renato','Julia','Miguel']; // exemplo de array de strings
let numbers = [1,2,3,4,5]; // exemplo de array de numbers

// outra forma de tipagem de arrays

let names2 = new Array ('Renato','Julia','Miguel');
let numbers2 = new Array (1,2,3,4,5);

// buscar o primeiro elemento do array
console.log(names[0]); // Renato (sempre começa por 0)

//portanto, se um array tiver 3 elementos, o último estará no índice 2
console.log(names[2]); // Miguel

// se tentarmos acessar um índice que não existe, teremos undefined
console.log(names[3]); // undefined

//adicionar um novo elemento ao array
names.push('Naná'); // ['Renato','Julia','Miguel','Naná']

//remover o último elemento do array
names.pop(); // ['Renato','Julia','Miguel']

//adicionar um novo elemento ao início do array
names.unshift('Naná'); // ['Naná','Renato','Julia','Miguel']

//remover o primeiro elemento do array
names.shift(); // ['Renato','Julia','Miguel']