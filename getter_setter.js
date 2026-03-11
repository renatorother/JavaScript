class Person {

    #name;

    //getter - método especial que retorna o valor de um atributo/propriedade
    get getName(){
        return this.#name;
    }

    //setter - método especial que define o valor de um atributo/propriedade
    set setName(value){
        this.#name = value;
    }
}

let person1 = new Person();
person1.setName = "Renato Rother"
console.log(person1.getName); // Renato Rother

//altere o valor da propriedade #name usando o setter
person1.name = "Julia Beber";
console.log(person1.name); // Julia Beber
