class Human {

    //propriedade de uma classe (é uma variável de uma class)
    name;

    //método de uma classe (é uma function de uma class)
    talk(){
        console.log('Estou falando!')
    }

    jump(){
        console.log('Estou pulando!')
    }

    walk(){
        console.log('Estou andando!')
    }
}

const person = new Human(); //criando uma variável/constante a partir de uma class
person.name = 'Renato'; // utilizando a propriedade da class na constante
console.log(person.name); // retorna 'Renato'

//utilizando os métodos (functions) da classe
person.talk(); // retorna 'Estou falando!'
person.jump(); // retorna 'Estou pulando!'
person.walk(); // retorna 'Estou andando!'