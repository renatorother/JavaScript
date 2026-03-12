//'this' é ulitizado para acessar propriedades globais

let person = {
    nome: 'Renato',
    sayHi: function(){
        console.log('Olá, meu nome é ' + this.nome)
    }
}

person.sayHi();