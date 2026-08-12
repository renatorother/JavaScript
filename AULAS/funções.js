function soma (a, b=10){
    return a + b;
}
//neste caso o 'b' se torna um parâmetro opcional. Caso não lhe seja atribuído um valor, ele adota o valor pré-determinado de '10'
console.log(soma(5));
console.log(soma(5, 100));

/////////////////////////////////////////////////////////

function soma2 (a=10, b){
    return a + b;
}
//neste caso o 'b' se tornou obrigatório, pois o 'a' veio antes com um valor pré-determinado
console.log(soma2(10, 10));
console.log(soma2(15)); //o 10 foi para o 'a'
