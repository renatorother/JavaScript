class Animal {

    nome = '';
    especie = '';

    constructor(nome, especie){
    this.nome = nome;
    this.especie = especie;
    }

    indent(){
        console.log('Meu nome é ' + this.nome + ', da espécie ' + this.especie);
    }    
}

class Dog extends Animal{
    late(){
        console.log('Au, Au!')
    }
}

class Cat extends Animal{
    mia(){
        console.log('Miaaau!')
    }
}

let nana = new Dog('Naná', 'Canina');
nana.indent();
nana.late();

let gato = new Cat('Morfético', 'Felino');
gato.indent();
gato.mia();
