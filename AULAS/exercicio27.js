class Person{

    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    fullName(){
        return this.nome + ' ' + this.sobrenome;
    }
}

let renato = new Person('Renato', 'Rother');
console.log(renato.fullName());