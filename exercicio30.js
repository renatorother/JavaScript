class Animal {   

    constructor(nome, especie){
        this.nome = nome;
        this.especie = especie;
    }
    
    id(){
        return 'Este animal é o(a) ' + this.nome + ' da espécie ' + this.especie + '!';
    }
}

class Dog extends Animal{
    
    late(){
        console.log('Au, au!');
    }
}

class Bird extends Animal{

    pia(){
        console.log('Piu, piu!');
    }
}


let nana = new Dog('Naná', 'Canina');
console.log(nana.id());
nana.late();


let pardal = new Bird('Pardal', 'aves');
console.log(pardal.id());
pardal.pia();
