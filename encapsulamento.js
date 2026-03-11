class Person {
    
    #name = '';

    constructor(name){
        this.#name = name; //define o nome da pessoa. O constructor não é obrigatório numa classe
    }

    //getter - utilizado para acessar a propriedade privada
    get getName(){
        return this.#name;
    }

    //setter - utilizado para alterar o valor da propriedade privada
    set setName(value){
        if (value == ''){
            this.#name = 'Não definido'
        } else{
            this.#name = value;
        }
    }
}

let person1 = new Person('Renato');
console.log(person1.getName);
person1.setName = 'Rother';
console.log(person1.getName);