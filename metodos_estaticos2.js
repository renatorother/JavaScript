class Operations {

    static sum(a, b) {
        return a + b;
    }

    static sub(a, b) {
        return a - b;
    }

    static mult(a, b) {
        return a * b;
    }

    static div(a, b) {
        return a / b;
    }
}


//podemos guardar o valor do return da operação em uma variável, neste caso, 'result'
let result = Operations.mult(5, 10);


//podemos chamar o método diretamente sem guardar o resultado numa variável
console.log(Operations.sum(5, 10));
console.log(Operations.sub(5, 10));
console.log(Operations.mult(5, 10));
console.log(Operations.div(5, 10));