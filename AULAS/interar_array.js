const names = ['Renato', 'Julia', 'Miguel', 'Nino', 'Naná']

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('---------------------');


names.map(names => console.log(names));


/* A função map() no JavaScript serve para transformar os itens de um array. Ela percorre cada elemento do array original, executa uma função que você define, e devolve um novo array com os resultados dessa transformação. */