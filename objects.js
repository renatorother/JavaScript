let myName = 'Renato'
let myAge = 31
let imMarried = true

// simplificando com o um objeto

let myPerson = {
    name: 'Renato',
    age: 31,
    married: true
};

// Objeto é uma coleção de propriedades com chaves (nomes) e valores separados por dois pontos (:), e as propriedades separadas por vírgulas (,)
// O objeto é delimitado por chaves ({})

// para acessar uma propriedade do objeto usamos a notação ponto (.)
console.log(myPerson.name); // Renato
console.log(myPerson.age); // 31
console.log(myPerson.married); // true

//também podemos utlilizar a notação colchetes ([])
console.log(myPerson['name']); // Renato
console.log(myPerson['age']); // 31
console.log(myPerson['married']); // true

// podemos utilizar variáveis
let propertyName = 'name'
console.log(myPerson[propertyName]);

// e utilizar expressões
console.log(myPerson['na' + 'me'])