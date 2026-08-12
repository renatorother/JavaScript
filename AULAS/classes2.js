class Human {

    // atributos ou propriedades
    myName;
    myAge;

    //constructor é uma função chamada automaticamente quando um objeto é criado
    constructor(name, age){ 
        this.myName = name;
        this.myAge = age;
    }

    whoIAm(){
        console.log('Eu sou ' + this.myName + ' e tenho ' + this.myAge + ' anos!')
    }
}

const person1 = new Human ('Renato', 31);
const person2 = new Human ('Julia', 32);
const person3 = new Human ('Miguel', 5);

person1.whoIAm();
person2.whoIAm();
person3.whoIAm();