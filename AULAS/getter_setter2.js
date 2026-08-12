class ContaBancaria {

    #saldo;

    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    }

    get apresentarSaldo(){
        return this.#saldo + ' reais'
    }

    sacarDinheiro(valor){

        if(valor > this.#saldo){
            console.log('Saldo insuficiente!')
        } else {
            this.#saldo -= valor;
            console.log('Foi sacado ' +  valor + '. Ficou no saldo: ' + this.#saldo);
        }
    }
}


let minhaConta = new ContaBancaria(1000);

minhaConta.sacarDinheiro(500);
minhaConta.sacarDinheiro(300);



console.log(minhaConta.apresentarSaldo);