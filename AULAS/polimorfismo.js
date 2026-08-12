class Animal {

    nome = "";
    especie = "";

    constructor(nome, especie){
        this.nome = nome;
        this.especie = especie;
    }

    identificacao(){
        console.log('Meu nome é ' + this.nome + ' da espécie ' + this.especie + '!')
    }
}

class Dog extends Animal{
    late(){
        console.log('Au,au!')
    }
    identificacao(){
        console.log('Essa é minha nova identificação!')
    }
}

class Cat extends Animal{
    mia(){
        console.log('Miaaaau!')
    }
}


let nana = new Dog('Naná', 'Canina');
nana.identificacao();
nana.late();

let gato = new Cat('Morfético', 'Felina');
gato.identificacao();
gato.mia();