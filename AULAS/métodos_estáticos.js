class Human {

    talk(){
        console.log('Estou falando...');
    }

    static walk(){
        console.log('Estou andando...');
    }
}


let person = new Human();

person.talk(); // este é um método não estático, e só está disponível através de uma instância

Human.walk(); // este é um método estático, e está disponível através da classe