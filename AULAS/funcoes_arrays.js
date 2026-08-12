const cities = ['New York', 'Rio de Janeiro', 'Tokyo', 'Los Angeles',]

// length
console.log(cities.length); // exibe 4

// indexOf
console.log(cities.indexOf('Tokyo')); // exibe 2

//adicionar elemento ao final do array
cities.push('London')

// remover elemento do final do array
cities.pop();

// adicionar elemento ao início do array
cities.unshift('London');

// remover elemento do início do array
cities.shift();

// remover elemento do meio do array
cities.splice(1, 1); // remove 1 elemento a partir do índice 1

// ordenar
cities.sort();

//inverter
cities.reverse();

// juntar
console.log(cities.join(' - ')); // exibe 'New York - Rio de Janeiro - Tokyo - Los Angeles - London' 


// podemos iterar sobre um array usando o clico for
for (i = 0; i < cities.length; i++){
    console.log(cities[i])
}

console.log('----------------------')

//mas podemos usar o método map() em vez disso
cities.map(city => console.log(city));