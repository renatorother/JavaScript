class Human {

    #name;

    constructor(name){
        this.#name = name;
    }

    sayHello(){
        return this.#prepareStatement();
    }

    #prepareStatement(){
        return 'Olá, meu nome é ' + this.#name
    }
}

let renato = new Human('Renato');
console.log(renato.sayHello());