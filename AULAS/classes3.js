class Human {

    constructor (name, age){
        this.myName = name;
        this.myAge = age;
    }

    speak(){
        console.log('Olá, meu nome é ' + this.myName + ', e tenho ' + this.myAge + ' anos!')
    }

    jump(){
        console.log(this.myName + ' está saltando!')
    }

    eat(whatFood){
        console.log(this.myName + ' está comendo ' + whatFood + '!')
    }
}

let person1 = new Human('Renato', '31');
let person2 = new Human('Julia', '32');
let person3 = new Human('Miguel', '05');

person1.speak();
person2.jump();
person3.eat('Camarão');
