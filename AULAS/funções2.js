//criar uma função com um número indefinido de argumentos

function myFunction (...params){
    for (let value of params){
        console.log(value)
    }
}

myFunction (5, 10, 15, 20);

//podemos combinar o parâmetro rest com outros parâmetros. Ex:

function otherFunction (a, b, ...args){
        console.log(a, b, args)
}

otherFunction (10, 20, 30, 40, 50, 60, 70)