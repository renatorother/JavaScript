class Human{

    #name;

    get getName(){
        return this.#name;
    }

    set setName(value){
        this.#name = value;
    }
}

let renato = new Human();
renato.setName = ('Renato Rother');
console.log(renato.getName);