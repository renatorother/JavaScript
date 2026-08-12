class Animal {

    constructor ( nome , peso, especie){
        this.Nome = nome;
        this.Peso = peso;
        this.Especie = especie;       
        
    }

    comer(whatFood){
        console.log('O(a) ' + this.Nome + ' da espécia ' + this.Especie + ', pesando' + this.Peso +  'Kg, se alimenta de ' + whatFood)

    }

    brincar(whatToy){
        console.log('O(a) ' + this.Nome + ' da espécia ' + this.Especie + ' brinca com ' + whatToy)
    }

    dormir(){
        console.log('O(a) ' + this.Nome + ' está dormindo!')
    }


}

let cachorro = new Animal('Naná', '13', 'canina');
let gato = new Animal('Jack', '5', 'felina');
let papagaio = new Animal('Gaio', '1', 'psitacídeos');

cachorro.comer('Ração');
gato.comer('Passarinho');
papagaio.comer('Grãos');

cachorro.brincar('Roedor');
gato.brincar('Pluma');
papagaio.brincar('tampinha');

cachorro.dormir();
gato.dormir();
papagaio.dormir();