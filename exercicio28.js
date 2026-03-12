class Human {

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    indentify(){
        return 'Olá, meu nome é ' + this.nome + ', e tenho ' + this.idade + ' anos!';
    }
}

let renato = new Human('Renato', 31);
let julia = new Human('Julia', 32);


console.log(renato.indentify());
console.log(julia.indentify());

