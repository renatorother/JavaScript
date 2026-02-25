// utilizado para substituir o if e else if em algumas ocasiões, por exemplo:
// Funciona como uma pergunta. Por exemplo: idade >= 18 ? Então faça isso : caso contrário faça isso 

let myName = 'Miguel';
console.log(myName == 'Renato' ? 'Olá, Renato!' : 'Olá, visitante!');

myName = 'Renato';
console.log(myName == 'Renato' ? 'Olá, Renato!' : 'Olá, visitante!');


let age = 15;
let canDrive = age >= 18 ? true : false;
console.log(canDrive)
